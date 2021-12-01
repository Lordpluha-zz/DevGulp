const file_include 	= require('gulp-file-include'),
		htmlmin		= require('gulp-htmlmin'),
		htmlhint 	= require('gulp-htmlhint'),
		gulpHtmlBV  = require('gulp-html-bem-validator');

// Работа с php, html файлами
function index(event) {
	return $.gulp.src([
			`!./src/${$.start_page}/html/*.{min.html, html}`,
			`./src/${$.start_page}/html/*.src.html`
		])
		.pipe($.plumber({}))
		.pipe( file_include() )
		
		.pipe( htmlhint() )
		.pipe( htmlhint.reporter() )
		.pipe( gulpHtmlBV() )
		
		.pipe( $.rname({ extname: 'index.html', basename: '' }))
		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		
		.pipe( htmlmin({
			collapseWhitespace: true,
		    html5: true,
		    removeComments: true,
		    useShortDoctype: true
		}) )
		.pipe( $.rname({ extname: 'index.min.html', basename: '' }))

		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		.pipe($.plumber.stop())
		.pipe( $.browserSync.reload({ stream:true }) );
};

module.exports = {
	index: async function() {index()}
}