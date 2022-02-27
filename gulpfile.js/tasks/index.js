const file_include 	= require('gulp-file-include'),
		htmlmin		= require('gulp-htmlmin'),
		htmlhint 	= require('gulp-htmlhint'),
		gulpHtmlBV  = require('gulp-html-bem-validator'),
		
		htmlhint_conf = require('./configs/index.js/gulp-htmlhint.config.js'),
		htmlmin_conf = require('./configs/index.js/gulp-htmlmin.config.js');

// HTML processing
function index(event) {
	return $.gulp.src([
			`!./src/${$.start_page}/html/*.{min.html, html}`,
			`./src/${$.start_page}/html/*.src.html`
		])
		.pipe( $.plumber({}))
		.pipe( file_include() )
		
		// Check code quality
		.pipe( htmlhint(htmlhint_conf))
		.pipe( htmlhint.reporter() )
		.pipe( gulpHtmlBV() )
		
		.pipe( $.rname({ extname: 'index.html', basename: '' }))
		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		
		// Minification
		.pipe( htmlmin(htmlmin_conf) )
		.pipe( $.rname({ extname: 'index.min.html', basename: '' }))
		.pipe( $.gulp.dest(`./src/${$.start_page}/html/`) )
		
		.pipe($.plumber.stop())
		.pipe( $.browserSync.reload({ stream:true }) );
};

// PHP processing
function php(event) {
	return $.gulp.src([`!./src/${$.start_page}/php/*.min.php`,
					   `./src/${$.start_page}/php/*.php`
		])
		.pipe( $.plumber({}))

		// Minification
		.pipe( htmlmin({
	    	collapseWhitespace: true,
	    	ignoreCustomFragments: [ /<%[\s\S]*?%>/, /<\?[=|php]?[\s\S]*?\?>/ ]
	    }))
		.pipe( $.rname({extname: 'index.min.php', basename: ''}))
		.pipe( $.gulp.dest(`./src/${$.start_page}/php`))

		.pipe($.plumber.stop())
		.pipe( $.browserSync.reload({ stream: true }) );

};

module.exports = {
	index: async function() {index()},
	php: async function() {php()},
}