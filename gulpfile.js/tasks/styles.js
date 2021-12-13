/* <==================== [Styles] ====================> */

// PostCSS (CSS4)
const postcss		   = require('gulp-postcss'),

	// PostCSS plugins in postcss
		// Scss syntax
	postcss_scss	   = require('postcss-scss'),

		// Completing prefixes with some properties
	autoprefixer 	   = require('autoprefixer'),

		// PostCSS plugin to keep rules and at-rules content in order.
	postcss_sorting    = require('postcss-sorting'),

		/* PostCSS Preset Env lets you convert modern CSS into something
			most browsers can understand, determining the polyfills you need 
			based on your targeted browsers or runtime environments.
		*/
	postcss_preset_env = require('postcss-preset-env'),

	precss 			   = require('precss'),


	// postcss-flexbugs-fixes
	// postcss-animation
	// immutable-CSS

	// Complite functions for including webp in css
	webp_css = require('webp-in-css/plugin'),
	// Beautifying css
	stylefmt = require('gulp-stylefmt'),
	// New modern css grid sytem
	lost = require('lost'),
	// Lint CSS for browser support against Can I use database.
	doiuse = require('doiuse'),
	/* A mighty, modern linter that helps you avoid errors and
		enforce conventions in your styles.
	*/
	stylelint = require('stylelint')({
		/* options */
	}),
	// Minificator
	cssnano = require('cssnano'),
	// Help to complete color palette
	colorguard = require('colorguard')

// Source map
	srcmap 		= require('gulp-sourcemaps'),
	{exec} 		= require('child_process');

// Работа со стилями
function styles(event) {
	return $.gulp.src(`./src/${$.start_page}/styles/css.src/styles.css`)
		.pipe( $.plumber())
		.pipe( srcmap.init() )

		// PostCSS main processing
		.pipe( postcss([
			precss(), // Scss syntax
			postcss_preset_env({
				stage: 3,
				features: {
					'nesting-rules': true
				},
				browsers: [
					"last 5 versions",
    				"cover 99.5%"
				],
				autoprefixer: true,
			}),
			// Working: I can`t test)
			// Setted up: Yes

			postcss_sorting({
				order: [
					'dollar-variables',
					'at-variables',
					'declarations',
					'custom-properties',
					'rules',
					'at-rules'
				],
				'properties-order': [
					'box-sizing',
					'position',
					'display',
					'z-index',

					'top',
					'bottom',
					'left',
					'right',

					'margin',
					'margin-top',
					'margin-bottom',
					'margin-left',
					'margin-right',

					'padding',
					'padding-top',
					'padding-bottom',
					'padding-left',
					'padding-right',

					'border',
					'border-radius',
					'border-top',
					'border-bottom',
					'border-left',
					'border-right',

					'background',
					'background-size',
					'background-position',
					'background-image',
					'background-color',

				],
				'unspecified-properties-position': 'bottom'
			}),
			// Working: Yes
			// Setted up: Yes

			autoprefixer({
				grid: "autoplace",
				cascade: true,
				remove: true,
				add: true,
				supports: true,
				flexbox: true,
			}),
			// Working: Yes
			// Setted up: Yes

		]) )
		// webp_css(),
			
		// lost(),
		//
		// doiuse({
		// 	browsers: [
		//     	"last 5 versions",
    	// 		"cover 99.5%"
		//     ],
		// 	ignore: ['rem'], // an optional array of features to ignore
		// 	// ignoreFiles: ['**/normalize.css'], // an optional array of file globs to match against original source file path, to ignore
		// 	onFeatureUsage: function (usageInfo) {console.log(usageInfo.message)}
		// }),
		// require("stylelint")({
		// 	/* your options */
		// }),
		// require("postcss-reporter")({ clearReportedMessages: true }),
		// 
		// colorguard()

		// PostCSS Beautifying
		.pipe( stylefmt() )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist/`))

		// PostCSS minification
		.pipe( postcss([
			// cssnano()
		]))
		.pipe($.rname({suffix: '.min'}) )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist`) )

		// Downloading sourcemap
		.pipe( srcmap.write(`./`) )

		// Stop plumber and streaming new style rules
		.pipe( $.plumber.stop() )
		.pipe( $.browserSync.stream() );
};

// Обработка шрифтов
function fonts(event) {
	$.plumber();
	exec(`py ./src/${$.start_page}/styles/fonts/file_for_uploading_fonts_to_css.py`, (err, stdout, stderr) => {
	    console.log(stdout);
	    console.log(stderr);
 	});
 	// exec(`cd .../.../.../...`);
 	$.plumber.stop();
};

module.exports = {
	styles: async function() {styles()},
	fonts: async function() {fonts()}
}