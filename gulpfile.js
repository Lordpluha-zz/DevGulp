// ============================ [ Plugins ] ============================ \\
const gulp = require('gulp'),
	// SCSS
			scss 			= require('gulp-scss'),
		// PostCSS (CSS4)
			postcss 		= require('gulp-postcss'),
		// PostCSS plugins
		// ...

		// Source map
			sourcemaps 		= require('gulp-sourcemaps');

	// JS
		// ...
	
	// HTML
		// ...

	// Инструменты

// ============================ [ Options ] ============================ \\
var Project_name 	= 'DevGulp',
	pages 			= ['main'],

	// Текущая дирректория для работы
	start_page 		= pages[0],
	OpenServer_conn = 'True',
	port 			= 8282,
	proxy			= `${Project_name}`;

// ============================ [ Paths ] ============================ \\


var folders_db = {

	'src': {
		
	},

	'dist': {
		
	}
}

for (var i = 0; i <= pages.length; i++) {
	folders_db['src'][pages[i]] = {
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
			'css': {
				'files': [
					'styles.css',
					'styles.min.css',
					'styles.css.map'
				]
			},
			'scss': {
				'files': [
					'styles.scss',

					'_zer0.scss',
					'_mixins.scss',
					'_fonts.scss',
					'_preloader.scss',

					'_header.scss',
					'_aside.scss',
					'_nav.scss',
					'_article.scss',
					'_foooter.scss',

					'_media.scss'
				]
			},
			'fonts': {

			}
		}

	};

	folders_db['dist'][pages[i]] = {
		//  In future
	};

}

// ============================ [ Functions ] ============================ \\

// Создание простой структуры проэкта
function CreateProjectFiles(event) {
	// Log
	console.log('\nOutput:\n');

	for (var lvl = 1; lvl <= 5; lvl++) {
		lvl_names = [`depth${lvl}`];
		for (var lvl_names in folders_db) {
			// Log
			console.log(lvl_names);
		}
	}
	
	// Log
	console.log('\n\nPages dirs was created!!!');
	event();
};

function addPage(event) {

};

// Создание локального сервера
function browser(event) {
	
  	event();
};

// Работа с php, html файлами
function index(event) {
	
	event();
};

// Работа со стилями
function styles(event) {
	return gulp.src(`./${source_dir}/${start_page}/${styles_dir_name}/${scss_dir_name}/${styles_main_file_name}.scss`)

		.pipe( sourcemaps.init() )

		.pipe( scss ({
			includePaths: require('node-bourbon').includePaths,
			errorLogToConsole: true,
      		// outputStyle: 'compressed'
		}).on( 'error', notify.onError({
        	message: "<%= error.message %>",
        	title  : "Sass Error!"
      	} ) ))
		// .pipe( autoprefixer({
		// 	supports: true,
  // 		   	overrideBrowserslist: ['last 2 versions'],
  // 		    cascade: false
		// })) 
		// Запихнем в PostCSS
		.pipe( postcss() )

		// Выгрузка sourcemap
		.pipe( sourcemaps.write(`./`) )

		// Очистка кеша путей (удаление доп. авто-путей gulp)
		.pipe( rname({dirname: ""}) )

		// Выгрузка красивого css
		.pipe( gulp.dest(`./${source_dir}/${start_page}/${styles_dir_name}/${css_dir_name}/`))
		
		// Минификация
		// .pipe( clean_css() )
		// PostCSs(nano)
		.postcss()
		.pipe( rname({suffix: '.min'}) )

		// Выгрузка минимизированного файла
		.pipe( gulp.dest(`./${source_dir}/${start_page}/${styles_dir_name}/${css_dir_name}/`) )
		.pipe( browserSync.stream() );

	// del(`./${source_dir}/${start_page}/${styles_dir_name}/${css_dir_name}/styles.css.min.map`);
};

// Javascript обработка
async function scripts(event) {

}

// Работа с картинками
async function img(event) {

	event();
};

// Watching files
function fileWatcher() {
};

// Сборка проэкта
function build(event) {
	
	event();
};

// Изменение картинок под определенные размеры
async function resz_img(event) {

	event();
};

// Обработка шрифтов
function fonts(event) {

	event();
};

// Работа с Git
function github(event) {
	// ...
	event();
};

// Test info
function defaultTask(cb) {
	console.log('Created by Teslyuk Vladislav!!! :-)')
  	cb();
};


// ============================ [ Tasks ] ============================ \\

gulp.task('CPF', gulp.series(CreateProjectFiles, defaultTask));
gulp.task('Resize', resz_img);
gulp.task('default', gulp.series(index, styles, scripts, img, gulp.parallel( browser, fileWatcher )));
gulp.task('build', build);

// gulp-changed и gulp-newer — запускают таски только для изменившихся файлов.
// tmi
// grunt-phantomas
// grunt-gitbook
// gulp-duration
// grunt-conventional-changelog
// grunt-usebanner