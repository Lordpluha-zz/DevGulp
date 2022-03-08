// Project build
async function build() {
	for (var i = 0; i <= $.pages.length; i++) {
		return $.gulp.src([
				`./src/${$.pages[i]}/html/index.min.html`,
				`./src/${$.pages[i]}/styles/css.dist/styles.{min.css, css.map}`,
				`./src/${$.pages[i]}/php/**/*.{min.php, php}`,
				`./src/${$.pages[i]}/js/**/*.min.js`,
				`./src/${$.pages[i]}/img/**/*.min.*`
			])       
			.on('data', function(file){
				console.log(file)
			})
		    .pipe($.gulp.dest(`./dist/${$.start_page}`) );
	}
};

module.exports = {
	build: async function() {build()}
}