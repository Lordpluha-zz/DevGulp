// Watching files
function fileWatcher() {
	$.gulp.watch([`./src/${$.start_page}/styles/css.src/*.scss`], $.tasks['styles'].styles);
	$.gulp.watch([`./src/${$.start_page}/js/**/*.js`,
				  `!./src/${$.start_page}/js/scripts/scripts.js`,
				  `!./src/${$.start_page}/js/**/*.min.js`
				], $.tasks['scripts'].scripts);
	$.gulp.watch([`./src/${$.start_page}/html/blocks/*.html`,
				  `./src/${$.start_page}/html/*.src.html`
				], $.tasks['index'].index);
	$.gulp.watch([`./src/${$.start_page}/php/blocks/*.php`,
				  `!./src/${$.start_page}/php/*.min.php`,
				  `./src/${$.start_page}/php/*.php`
				  ], $.tasks['index'].php);
	$.gulp.watch([`./src/${$.start_page}/img/**/**/*.{jpg, jpeg, png, svg, webp}`], $.tasks['images'].images);
	$.gulp.watch([`./src/${$.start_page}/styles/fonts/**/*.{ttf, woff, otf}`], $.tasks['styles'].fonts);
};
// + github

module.exports = {
	fileWatcher: async function() {fileWatcher()}
}