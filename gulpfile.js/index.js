'use strict';
global.$ = {};

// ============================ [ Plugins ] ============================ \\
global.$.gulp = require('gulp');
global.$.rname = require('gulp-rename');
	


// ========================== [ External files ] ========================== \\
global.$.tasks = {
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
global.$.Project_name = 	'DevGulp';
global.$.pages = 			['main'];
global.$.start_page = 		$.pages;
global.$.OpenServer_conn = 	'False';
global.$.port = 			8282;
global.$.proxy = 			$.Project_name;

// ============================ [ Paths ] ============================ \\

global.$.folders_db = {
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