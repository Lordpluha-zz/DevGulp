'use strict';
global.$ = {};

// ============================ [ Plugins ] ============================ \\
$.gulp = require('gulp');
$.rname = require('gulp-rename');
$.plumber = require('gulp-plumber');
// Not connected
$.shell = require('gulp-shell');
// $.fs  = require('fs');



// ========================== [ External files ] ========================== \\
$.tasks = {
	'index': 		require('./tasks/index'),
	'styles': 		require('./tasks/styles'),
	'scripts': 	 	require('./tasks/scripts'),
	'images': 		require('./tasks/images.js'),

	'FileWatcher': 	require('./tasks/FileWatcher'),
	'serve': 		require('./tasks/serve'),

	'github': 		require('./tasks/github'),

	'clean': 		require('./tasks/clean'),
	'build': 		require('./tasks/build'),

};

// ============================ [ Options ] ============================ \\

$.Project_name = 	'DevGulp';
$.pages = 			['main'];
$.start_page = 		$.pages[0];
$.OpenServer_conn = 'True';
$.port = 			8282;
$.proxy = 			$.Project_name;

// ============================ [ Functions ] ============================ \\

// Test info
function defaultTask(cb) {
	console.log('Created by Teslyuk Vladislav!!! :-)')
  	cb();
};

// ============================ [ Tasks ] ============================ \\

/* ||||| Testing function ||||| */

$.gulp.task('index', $.tasks['index'].index);
$.gulp.task('php', 	 $.tasks['index'].php);

$.gulp.task('css',   $.tasks['styles'].styles);
$.gulp.task('fonts', $.tasks['styles'].fonts);

$.gulp.task('js',    $.tasks['scripts'].scripts);

$.gulp.task('img', 	 $.tasks['images'].images);

$.gulp.task('git',   $.tasks['github'].commit);

/* |||||__________________||||| */


$.gulp.task('default',
	$.gulp.series(
		$.tasks['index'].index,
		$.tasks['styles'].styles,
		$.tasks['scripts'].scripts,
		$.tasks['images'].images,
		$.tasks['styles'].fonts,
		$.tasks['github'].commit,

		$.gulp.parallel(
			$.tasks['serve'].browser,
			$.tasks['FileWatcher'].fileWatcher
		)
	)
);

$.gulp.task('test', defaultTask);

$.gulp.task('build', $.gulp.series($.tasks['clean'].clean, $.tasks['build'].build /*, $.tasks['analytics'].lighthouse*/));