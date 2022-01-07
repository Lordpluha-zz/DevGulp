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
	'images': 		require('./tasks/images'),

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
$.OpenServer_conn = 'False';
$.port = 			8282;
$.proxy = 			$.Project_name;

// ============================ [ Paths ] ============================ \\

$.folders_db = {
		'src': {
			
		},

		'dist': {
			
		}
	}

for (var i = 0; i < $.pages.length; i++) {
	$.folders_db['src'][$.pages[i]] = {
		'html': {
			'blocks': {
				'files': [
					'header.html',
					'nav.html',
					'aside.html',
					'article.html',
					'footer.html'
				]
			},
			'files': [
				'index.html',
				'index.min.html',
				'index.src.html'
			]
		},
		'js': {
			'scripts': {
				'files': [
					'script.js',
					'script.min.js'
				]
			}
		},
		'styles': {
			'css.dist': {
				'files': [
					'styles.css',
					'styles.min.css',
					'styles.css.map'
				]
			},
			'css.src': {
				'files': [
					'styles.css',

					'_zer0.css',
					'_mixins.css',
					'_fonts.css',
					'_preloader.css',

					'_header.css',
					'_aside.css',
					'_nav.css',
					'_article.css',
					'_foooter.css',

					'_media.css'
				]
			},
			'fonts': {

			}
		}

	};

	$.folders_db['dist'][$.pages[i]] = {
		//  In future
	};
}

// ============================ [ Functions ] ============================ \\

// Test info
function defaultTask(cb) {
	console.log('Created by Teslyuk Vladislav!!! :-)')
  	cb();
};

/*
browser()
browserReload()
fileWatcher()
*/

// ============================ [ Tasks ] ============================ \\

/* ||||| Testing function ||||| */

$.gulp.task('index', $.tasks['index'].index);
$.gulp.task('css',   $.tasks['styles'].styles);
$.gulp.task('js',    $.tasks['scripts'].scripts);
$.gulp.task('img',   $.tasks['images'].images);
$.gulp.task('fonts', $.tasks['styles'].fonts);
$.gulp.task('git',   $.tasks['github'].commit);
$.gulp.task('FW',    $.tasks['FileWatcher'].fileWatcher);

/* |||||__________________||||| */


$.gulp.task('default',
	$.gulp.series(
		$.tasks['index'].index,
		$.tasks['styles'].styles,
		$.tasks['scripts'].scripts,
		$.tasks['images'].images,
		$.tasks['styles'].fonts,
		$.tasks['github'].commit,

		$.gulp.parallel($.tasks['serve'].browser,
			$.tasks['FileWatcher'].fileWatcher
		)
	)
);

$.gulp.task('build', $.gulp.series($.tasks['clean'].clean, $.tasks['build'].build /*, $.tasks['analytics'].lighthouse*/));