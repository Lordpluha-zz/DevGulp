/* <==================== [Styles] ====================> */

// DataBase of plugins
var plug = require('./vars/StylesVars.js');


function styles(event) {
	return $.gulp.src(`./src/${$.start_page}/styles/css.src/styles.css`)

		// Initialization plumber error chech and sourcemap
		.pipe( $.plumber())
		.pipe( plug.srcmap.init() )

		// PostCSS preprocessing
		.pipe( plug.postcss([
			plug.postcss_use(),

			plug.postcss_conditionals(),
			plug.postcss_nested_import(),
			plug.postcss_sassy_mixins(),
			
			
			plug.precss(), // Scss syntax

		],
		{
			syntax: plug.postcss_scss,
			parser: plug.postcss_scss
		}
		))

		// Postprocessing
		/*
		.pipe(postcss([
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
				'unspecified-properties-position': 'bottom',
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
		],
		{
			syntax: postcss_scss,
			parser: postcss_scss
		}
		))
		*/


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
		// .pipe( stylefmt() )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist/`))

		// PostCSS minification
		/*
		.pipe( postcss([
			cssnano()
		]))
		*/
		.pipe($.rname({suffix: '.min'}) )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist`) )

		// Downloading sourcemap
		.pipe( plug.srcmap.write(`./`) )

		// Stop plumber and streaming new style rules
		.pipe( $.plumber.stop() )
		.pipe( $.browserSync.stream() );
};

// Обработка шрифтов
function fonts(event) {
	$.plumber();
	plug.exec(`py ./src/${$.start_page}/styles/fonts/file_for_uploading_fonts_to_css.py`, (err, stdout, stderr) => {
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