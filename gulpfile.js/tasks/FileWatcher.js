// Watching files
function fileWatcher() {
	$.gulp.watch(`./src/${$.start_page}/styles/css.src/*.css`, $.tasks['styles'].styles(event));
	$.gulp.watch(`./src/${$.start_page}/js/**/*.js`, $.tasks['scripts'].scripts(event));
	$.gulp.watch([`./src/${$.start_page}/html/blocks/*.html`, `./src/${$.start_page}/html/*.src.html`], $.tasks['index'].index(event));
	$.gulp.watch([`./src/${$.start_page}/img/**/**/*.{jpg, jpeg, png, svg, webp}`], $.tasks['images'].images(event));
};

// github

module.exports = {
	fileWatcher: async function() {fileWatcher()}
}