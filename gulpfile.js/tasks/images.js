// Images
const pngquant = require('imagemin-pngquant'),
	  imagemin = require('gulp-imagemin'),
	  webp = require('gulp-webp');

// Images processing
function images(event) {
	let img_dirs = ['nav', 'header', 'article', 'aside', 'footer'];

	// -------- [ Inserted dir images processing] --------
	img_dirs.forEach( function(item1, index1, arr1) {
		// Default processing
		$.gulp.src([
			`./src/${$.start_page}/img/${item1}/*.jpeg`,
			`./src/${$.start_page}/img/${item1}/*.jpg`,
			`./src/${$.start_page}/img/${item1}/*.png`,
			`./src/${$.start_page}/img/${item1}/*.tiff`,
			`./src/${$.start_page}/img/${item1}/*.psd`,
			`./src/${$.start_page}/img/${item1}/*.bmp`,
			`./src/${$.start_page}/img/${item1}/*.gif`,
			`./src/${$.start_page}/img/${item1}/*.jp2`,

			`./src/${$.start_page}/img/${item1}/**/*.jpeg`,
			`./src/${$.start_page}/img/${item1}/**/*.jpg`,
			`./src/${$.start_page}/img/${item1}/**/*.png`,
			`./src/${$.start_page}/img/${item1}/**/*.tiff`,
			`./src/${$.start_page}/img/${item1}/**/*.psd`,
			`./src/${$.start_page}/img/${item1}/**/*.bmp`,
			`./src/${$.start_page}/img/${item1}/**/*.gif`,
			`./src/${$.start_page}/img/${item1}/**/*.jp2`,

			`!./src/${$.start_page}/img/**/_*.*`,
			`!./src/${$.start_page}/img/*.min.*`,
			`!./src/${$.start_page}/img/**/*.min.*`
			])
			.pipe( imagemin([
		      		pngquant()
				], {
					optimizationLevel: 3,
			      	quality: 100,
			      	progressive: true,
				}
			))
			.pipe(webp())
			.pipe( $.rname({suffix: '.min'}))
			.pipe( $.gulp.dest(`./src/${$.start_page}/img/${item1}/`));

			// Only minification (icons in png and etc)
			$.gulp.src([
					`./src/${$.start_page}/img/${item1}/_*.jpeg`,
					`./src/${$.start_page}/img/${item1}/_*.jpg`,
					`./src/${$.start_page}/img/${item1}/_*.png`,
					`./src/${$.start_page}/img/${item1}/_*.tiff`,
					`./src/${$.start_page}/img/${item1}/_*.psd`,
					`./src/${$.start_page}/img/${item1}/_*.bmp`,
					`./src/${$.start_page}/img/${item1}/_*.gif`,
					`./src/${$.start_page}/img/${item1}/_*.jp2`,

					`!./src/${$.start_page}/img/*.min.*`,
					`!./src/${$.start_page}/img/**/*.min.*`
				])
				.pipe( imagemin([
			      		pngquant()
					], {
						optimizationLevel: 3,
				      	quality: 100,
				      	progressive: true,
					}
				))
				.pipe( $.rname({suffix: '.min'}))
				.pipe( $.gulp.dest(`./src/${$.start_page}/img/${item1}/`));

	});

	// -------- [ Source dir images processing] --------
	// Default processing
	$.gulp.src([
			`./src/${$.start_page}/img/*.jpeg`,
			`./src/${$.start_page}/img/*.jpg`,
			`./src/${$.start_page}/img/*.png`,
			`./src/${$.start_page}/img/*.tiff`,
			`./src/${$.start_page}/img/*.psd`,
			`./src/${$.start_page}/img/*.bmp`,
			`./src/${$.start_page}/img/*.gif`,
			`./src/${$.start_page}/img/*.jp2`,

			`!./src/${$.start_page}/img/**/_*.*`,
			`!./src/${$.start_page}/img/*.min.*`,
			`!./src/${$.start_page}/img/**/*.min.*`
		])
		.pipe( imagemin([
	      		pngquant()
			], {
				optimizationLevel: 3,
		      	quality: 100,
		      	progressive: true,
			}
		))
		.pipe(webp())
		.pipe( $.rname({suffix: '.min'}))
		.pipe( $.gulp.dest(`./src/${$.start_page}/img/`));

	// Only minification
	$.gulp.src([
			`./src/${$.start_page}/img/_*.jpeg`,
			`./src/${$.start_page}/img/_*.jpg`,
			`./src/${$.start_page}/img/_*.png`,
			`./src/${$.start_page}/img/_*.tiff`,
			`./src/${$.start_page}/img/_*.psd`,
			`./src/${$.start_page}/img/_*.bmp`,
			`./src/${$.start_page}/img/_*.gif`,
			`./src/${$.start_page}/img/_*.jp2`,

			`!./src/${$.start_page}/img/*.min.*`,
			`!./src/${$.start_page}/img/**/*.min.*`
		])
		.pipe( imagemin([
	      		pngquant()
			], {
				optimizationLevel: 3,
		      	quality: 100,
		      	progressive: true,
			}
		))
		.pipe( $.rname({suffix: '.min'}))
		.pipe( $.gulp.dest(`./src/${$.start_page}/img/`));
};

module.exports = {
	images: async function() {images()}
}