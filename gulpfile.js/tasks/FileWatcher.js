// Watching files
function fileWatcher(event) {
	$.gulp.watch('./src/**/styles/css.src/*.css', styles(event));

};

module.exports = {
	fileWatcher: async function() {fileWatcher()}
}