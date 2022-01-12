/* <==================== [Styles] ====================> */

// DataBase of plugins
var plug = require('./vars/StylesVars.js');
var path = require('path');

// Styles processing
function styles(event) {
	return $.gulp.src(`./src/${$.start_page}/styles/css.src/styles.scss`)

		// Initialization plumber error chech and sourcemap
		.pipe( $.plumber())
		.pipe( plug.srcmap.init() )
		
		// SCSS
		.pipe( plug.scss().on('error', plug.scss.logError) )

		// PostCSS pre/post processing
		.pipe( plug.postcss([
			// Preprocessing




			// Postprocessing
			plug.autoprefixer({
				grid: "autoplace",
				cascade: true,
				remove: true,
				add: true,
				supports: true,
				flexbox: true,
				"overrideBrowserslist": [
					"last 5 versions",
					" >= 1%"
				]
			}),
			// Working: Yes
			// Setted up: Yes
			plug.postcss_sorting({
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

					'width',
					'max-width',
					'height',
					'max-height',

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

					'outline',

					'background',
					'background-image',
					'background-color',
					'background-size',
					'background-position',
					'background-repeat',

					'font-family',
					'font-style',
					'font-size',
					'font-weight',

					'color',

					'line-height',
					'list-style-type',

					"text-decoration",

					'user-select',

					'scroll-behavior,'
				],
				'unspecified-properties-position': 'bottom',
			}),
			// Working: Yes
			// Setted up: Yes

		], {
			syntax: plug.postcss_scss
		}))

		// Linting
		.pipe( plug.postcss([
			plug.stylelint({
				
			}) 
		]))

		// Analyse
		.pipe( plug.postcss([
			plug.doiuse({
				browsers:[
					"last 5 versions",
    				"> 1%"
				],
				ignore: [
					// 'css3-boxsizing',
					// 'outline',
					// 'css-mediaqueries',
					// 'background-img-opts',
					// 'user-select-none',
					// 'viewport-units',
					// 'object-fit',
					// 'calc'
				]
			})
			// Working: Yes
			// Setted up: No
		], {

		}))

		// Beautiffying
		// .pipe()
		
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist/`))
		
		// Minification
		.pipe( plug.postcss([
			plug.cssnano({
				"preset": ['cssnano-preset-advanced', {
					"cssDeclarationSorter": false,
					"discardOverridden": false,
					"discardUnused": false,
					"mergeIdents": false,
					"mergeLonghand": false,
					"normalizeTimingFunctions": false,
					"reduceInitial": false,
					"uniqueSelectors": false,
				}]
			})
		]) )

		.pipe( $.rname({suffix: '.min'}) )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist`) )

		// Downloading sourcemap
		.pipe( plug.srcmap.write(`./`) )

		// Stop plumber and streaming new style rules
		.pipe( $.plumber.stop() )
		.pipe( $.browserSync.stream() );
}

// Обработка шрифтов !!!
function fonts(event) {
	$.plumber();
	plug.exec(`py ./src/${$.start_page}/styles/fonts/file_for_uploading_fonts_to_css.py`,
		(err, stdout, stderr) => {
	    	console.log(stdout);
	    	console.log(stderr);
 		}
 	);
 	// exec(`cd .../.../.../...`);
 	$.plumber.stop();
};

module.exports = {
	styles: async function() {styles()},
	fonts: async function() {fonts()}
}