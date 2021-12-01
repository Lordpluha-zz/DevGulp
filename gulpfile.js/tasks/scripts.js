// Javascript обработка
function scripts() {
	return $.gulp.src(`./src/${$.start_page}/js/scripts/scripts.js`)
		.pipe($.plumber())
		.pipe($.plumber.stop())
		.pipe($.rname({suffix: '.min'}) )
		.pipe($.gulp.dest(`./src/${$.start_page}/js/scripts/`));
}

module.exports = {
	scripts: async function() {scripts()}
}