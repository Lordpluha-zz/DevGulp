const file_include 	= require('gulp-file-include'),
		htmlmin		= require('gulp-htmlmin'),
		htmlhint 	= require('gulp-htmlhint');

// Работа с php, html файлами
function index() {
	return $.gulp.src([
			`!./src/${$.start_page}/html/*.{min.html, html}`,
			`./src/${$.start_page}/html/*.src.html`
		])
		.pipe( file_include() )
		
		.pipe( htmlhint() )
		.pipe( htmlhint.reporter() )
		
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
		.pipe( $.tasks['serve'].browserReaload );
	
	event();
};

module.exports = {
	index: async function() {index()}
}