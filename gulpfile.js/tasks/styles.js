// Styles


// PostCSS (CSS4)
const gulp = require('gulp'),
		postcss	= require('gulp-postcss'),	
	
	// PostCSS plugins in postcss

	

// Source map
	  srcmap 	= require('gulp-sourcemaps');
	  

// Работа со стилями
function styles(event) {
	/*
	return gulp.src()
		.pipe( srcmap.init() )

		// PostCSS main processing
		.pipe( postcss([

		]) )

		// Очистка кеша путей (удаление доп. авто-путей gulp)
		.pipe( rname({dirname: ""}) )

		// Выгрузка красивого css
		.pipe( gulp.dest(`.//`))
		
		// Минификация
		// PostCSS minification
		// .pipe( postcss([]))
		// .pipe( rname({suffix: '.min'}) )

		// Выгрузка sourcemap
		.pipe( srcmap.write(`./`) )

		// Выгрузка минимизированного файла
		.pipe( gulp.dest(`./`) )
		.pipe( browserSync.stream() );

	// del(`./${source_dir}/${start_page}/${styles_dir_name}/${css_dir_name}/styles.css.min.map`);
	*/
};

// Обработка шрифтов
function fonts(event) {

	event();
};

module.exports = {
	styles: async function() {styles()},
	fonts: async function() {fonts()}
}