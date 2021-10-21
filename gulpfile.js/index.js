'use strict';

// ============================ [ Plugins ] ============================ \\
global.$ = {
	gulp = require('gulp'),

// Tasks
	tasks = {
	  	'addpage':	 	require('./tasks/AddPage'),
	  	'build': 		require('./tasks/build'),
	  	'FileWatcher': 	require('./tasks/FileWatcher'),
	  	'github': 		require('./tasks/github'),
	  	'index': 		require('./tasks/index'),
	  	'images': 		require('./tasks/images'),
	  	'scripts': 	 	require('./tasks/scripts'),
	  	'serve': 		require('./tasks/serve'),
	  	'styles': 		require('./tasks/styles')
	},


// ============================ [ Options ] ============================ \\
	Project_name 	= 'DevGulp',
	pages 			= ['main'],

// Текущая дирректория для работы
	start_page 		= $.pages[0],
	OpenServer_conn = 'True',
	port 			= 8282,
	proxy			= `${$.Project_name}`,

// ============================ [ Paths ] ============================ \\

	folders_db = {
		'src': {
			
		},

		'dist': {
			
		}
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


// ============================ [ Tasks ] ============================ \\

gulp.task('default',
	gulp.series(
		tasks['index'].index,
		tasks['styles'].styles,
		tasks['scripts'].scripts,
		tasks['images'].images,

		gulp.parallel(tasks['serve'].browser,
			tasks['FileWatcher'].fileWatcher
		)
	)
);

gulp.task('build', tasks['build'].build);