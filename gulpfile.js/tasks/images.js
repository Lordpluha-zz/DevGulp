// Images
const pngquant = require('imagemin-pngquant'),
	  imagemin = require('gulp-imagemin'),
	  webp = require('gulp-webp');

// Video

// Работа с картинками
function images(event) {
	let img_dirs = ['nav', 'header', 'article', 'aside', 'footer'];
	img_dirs.forEach( function(item1, index1, arr1) {
		return $.gulp.src([
				`./src/${$.start_page}/img/${item1}/*.{jpeg, jpg, png, tiff, psd, bmp, gif, jp2}`,
				`./src/${$.start_page}/img/${item1}/**/*.{jpeg, jpg, png, tiff, psd, bmp, gif, jp2}`,
				`!./src/${$.start_page}/img/${item1}/**/*.min.*`,
				`!./src/${$.start_page}/img/${item1}/*.min.*`
			])
			.pipe( imagemin([
		      	pngquant()
			], {
				optimizationLevel: 3,
		      	quality: 100,
		      	progressive: true,
			}) )
			.pipe(webp())
			.pipe( $.rname({suffix: '.min'}))
			.pipe( $.gulp.dest(`./src/${$.start_page}/img/${item1}/`) );
	});
};

function video(event) {
	console.log("Video converter is epmty");
};

// Изменение картинок под определенные размеры
function resz_img(event) {
	console.log("RESZ_img is epmty");
};

module.exports = {
	images: async function() {images()},
	resz_img: async function() {resz_img()}
}