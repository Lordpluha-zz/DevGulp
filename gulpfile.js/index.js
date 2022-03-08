'use strict';
global.$ = {};

// ============================ [ Plugins ] ============================ \\
$.gulp 	  = require('gulp');
$.rname   = require('gulp-rename');
$.path 	  = require('path');
$.fs      = require('fs');
$.plumber = require('gulp-plumber');

// ========================== [ External files ] ========================== \\

$.tasks = {
	'index': 			require('./tasks/index.js'),
	'styles': 			require('./tasks/styles.js'),
	'scripts': 	 		require('./tasks/scripts.js'),
	'images': 			require('./tasks/images.js'),

	'FileWatcher': 		require('./tasks/FileWatcher.js'),
	'serve': 			require('./tasks/serve.js'),

	'github': 			require('./tasks/github.js'),

	'clean': 			require('./tasks/clean.js'),
	'build': 			require('./tasks/build.js'),
	'CreatePage': 		require('./tasks/CreatePage.js')
};

// Update page list
$.updatePagesList = () => {
	var pages_dir = $.fs.readdirSync('./src/', {withFileTypes:true})
	.filter(d => d.isDirectory())
	.map(d => d.name);

	$.fs.writeFileSync("./gulpfile.js/tasks/vars/pages_list.json", 
		JSON.stringify({pages: pages_dir})
	);
}
$.updatePagesList();

// ============================ [ Options ] ============================ \\

// Project name
$.Project_name    =	JSON.parse($.fs.readFileSync("package.json", "utf8"))["name"];
// List of all pages
$.pages 		  =	JSON.parse(
		$.fs.readFileSync("./gulpfile.js/tasks/vars/pages_list.json", "utf8")
	)["pages"];
// Current page
$.start_page 	  = 'main';
// OS Panel on/off
$.OpenServer_conn = false;
// Using 'php' only with OpenServer_conn = true!!! (php/html)
$.main_file_type = 'html'
// Server port
$.port 			  = 8282;
// Proxy (OS Panel)
$.proxy 		  = $.Project_name;
// Https on/off
$.https 		  = false;
// Certificates dir (working only with https = true)
$.CertDir		  = './certificates'
// debug || info
$.logLevel 		  = 'info';

// ============================ [ Functions ] ============================ \\

// Test info
function defaultTask(cb) {
	console.log('Created by Lordpluha!!! :-)');
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

$.gulp.task('NewPage', $.tasks['CreatePage'].CreatePage);

$.gulp.task('git',   $.tasks['github'].commit);

/* |||||__________________||||| */

// Main task
$.gulp.task('default',
	$.gulp.series(
		$.tasks['index'].index,
		$.tasks['index'].php,
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
// Test task
$.gulp.task('test', defaultTask);

// Build task
$.gulp.task('build', $.gulp.series($.tasks['clean'].clean, $.tasks['build'].build));