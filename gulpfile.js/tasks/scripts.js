// Javascript обработка

/*
// gulp-plato - Анализ кода в таблицах ☑
 		// Ecmascript
const auto_polyf = require('gulp-autopolyfiller'),
	  	
	  	// ES6/ES7 => ES5
	  		babel = require('gulp-babel'), 

	  	// JS Linter (плагины: fixmyjs - исправление простых ошибок после работы линтера,
	  	// 					   jshint-stylish - красивое описание ошибки)
	  		jshint = require('gulp-jshint'),
	  		fixmyjs = require('gulp-fixmyjs'),
	  		stylish = require('jshint-stylish'),

	  		map = require('map-stream')

	  	// gulp-jscpd - поиск и работа с дубликатами ☑

	  	// Проверка качества кода 
	  		complexity = require('gulp-complexity'),
	  	
	  	// Beautifier as standart JQ, Yandex, Google, AirBnb
	  		eslint = require('gulp-eslint'),
	  	
	  	// Beautifier
	  		jsbeautifier = require('gulp-jsbeautifier'),
	  	
	  	// gulp-jsfmt - Вырезка фрагментов из кода ☑

	  	// gulp-plato - Анализ кода в таблицах ☑

	  	// Compressor
	  		uglify = require('gulp-uglify-es').default;
*/
// Установить и использовать!!!

function scripts() {
	return $.gulp.src(`./src/${$.start_page}/js/scripts/scripts.js`)
		.pipe($.plumber())
		.pipe($.plumber.stop())
		.pipe($.rname({suffix: '.min'}) )
		.pipe($.gulp.dest(`./src/${$.start_page}/js/scripts/`));
}

module.exports = {
	scripts: async function() {scripts()}
}