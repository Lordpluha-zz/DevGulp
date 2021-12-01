// Watching files
function fileWatcher() {
	$.gulp.watch(`./src/${$.start_page}/styles/css.src/*.css`, $.tasks['styles'].styles);
	$.gulp.watch(`./src/${$.start_page}/js/**/*.js`, $.tasks['scripts'].scripts);
	$.gulp.watch([`./src/${$.start_page}/html/blocks/*.html`, `./src/${$.start_page}/html/*.src.html`], $.tasks['index'].index);
	$.gulp.watch([`./src/${$.start_page}/img/**/**/*.{jpg, jpeg, png, svg, webp}`], $.tasks['images'].images);
	$.gulp.watch([`!./src/${$.start_page}/styles/fonts/**/*.{py, zip}`, `./src/${$.start_page}/styles/fonts/**/*.{ttf, woff, otf}`], $.tasks['styles'].fonts);
};

// github

module.exports = {
	fileWatcher: async function() {fileWatcher()}
}