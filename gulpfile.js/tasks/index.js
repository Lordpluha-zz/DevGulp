const file_include 	= require('gulp-file-include'),
		htmlmin		= require('gulp-htmlmin'),
		htmlhint 	= require('gulp-htmlhint'),
		gulpHtmlBV  = require('gulp-html-bem-validator')
		
		htmlhint_conf = require('./configs/index.js/gulp-htmlhint.config.js'),
		htmlmin_conf = require('./configs/index.js/gulp-htmlmin.config.js');

// Работа с php, html файлами
function index(event) {
	return $.gulp.src([
			`!./src/${$.start_page}/html/*.{min.html, html}`,
			`./src/${$.start_page}/html/*.src.html`
		])
		.pipe( $.plumber({}))
		.pipe( file_include() )
		
		.pipe( htmlhint(htmlhint_conf))
		.pipe( htmlhint.reporter() )
		.pipe( gulpHtmlBV() )
		
		.pipe( $.rname({ extname: 'index.html', basename: '' }))
		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		
		.pipe( htmlmin(htmlmin_conf) )
		.pipe( $.rname({ extname: 'index.min.html', basename: '' }))

		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		.pipe($.plumber.stop())
		.pipe( $.browserSync.reload({ stream:true }) );
};

module.exports = {
	index: async function() {index()}
}