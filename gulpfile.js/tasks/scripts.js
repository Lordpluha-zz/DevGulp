// Javascript обработка

	// Объединение файлов☑
const concat = require('gulp-concat'),

	// JS Linter☑
	jshint = require('gulp-jshint'),
	// Beauty reporter☑
		stylish = require('jshint-stylish'),

	// ES6/ES7 => ES5☑
		// babel = require('gulp-babel'),

	// Beautifier as standart JQ, Yandex, Google, AirBnb
		// eslint = require('gulp-eslint'),

	// Проверка качества кода ☑
		// complexity = require('gulp-complexity'),

	// gulp-plato - Анализ кода в таблицах
	// gulp-rev
	// 

	// Compressor☑
		uglify = require('gulp-uglify-es').default,

	// Sourcemap☑
		map = require('gulp-sourcemaps');


function scripts(event) {
	return $.gulp.src([
			`./src/${$.start_page}/js/scripts/**/*.js`,
			`!./src/${$.start_page}/js/scripts/**/*.min.js`,
			`!./src/${$.start_page}/js/scripts/scripts.js`
		])
		.pipe( $.plumber())

		// Developing	

		.pipe(jshint()) // '.jshintrc'
		.pipe(jshint.reporter(stylish))

		.pipe( map.init())
		// .pipe(eslint())
		// .pipe(babel())
		
		
		.pipe(concat({path: 'scripts.js'}))

		.pipe( $.gulp.dest(`./src/${$.start_page}/js/scripts/`))



		// Gap-analyse
		// .pipe(complexity())

		// Minification
		.pipe(uglify())
		.pipe( map.write('./'))
		
		
		
		.pipe( $.rname({suffix: '.min'}) )
		
		.pipe( $.gulp.dest(`./src/${$.start_page}/js/scripts/`))
		
		

		.pipe( $.plumber.stop())
		.pipe( $.browserSync.stream());
}

module.exports = {
	scripts: async function() {scripts()}
}