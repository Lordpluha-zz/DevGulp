/* <<<---------- [PLUGINS for '../styles.js'] ---------->>>> */

// SCSS
const scss                                  = require('gulp-sass')(require('sass')),
// PostCSS (CSS4)
	postcss                                 = require('gulp-postcss'),
	
/* ___________________ --- | PostCSS plugins | --- ___________________ */
	
	// Scss syntax
	postcss_scss                        = require('postcss-scss'),
	
	/* <+++++++++++++++ [Preprocessing] +++++++++++++++> */

		// Complite functions for including webp in css
		webp_css                                = require('webp-in-css/plugin'),

		// Auto convert px -> rem
		pxtorem                                 =  require('postcss-pxtorem')

	/* <+++++++++++++++ [Linting] +++++++++++++++> */

		// Main Linter
		stylelint                           = require('stylelint'),

		// Analyse supporting
		doiuse                                  = require('doiuse'),

	/* <+++++++++++++++ [Additional functions] +++++++++++++++> */
	
		// postcss-flexbugs-fixes
		// postcss-animation

	/* <+++++++++++++++ [Postprocessing] +++++++++++++++> */
	
		// Autoprefixer
		autoprefixer                        = require('autoprefixer'),

		// Sorting rules
		postcss_sorting                 = require('postcss-sorting'),

		// Minificator
		cssnano                                 = require('cssnano'),

		// Browser reporter
		browser_reporter                = require('postcss-browser-reporter'),

		// immutable-CSS


/*___________________________________________________________________*/

	/*                                                     */
 /*  < -------------- [Side functions] -------------- > */
/*                                                       */
	
	// Beautifier
	cleanCSS                                            = require('gulp-clean-css'),
	// Source map
	srcmap                                      = require('gulp-sourcemaps'),
	
	// Execution CMD commands
	{exec}                                      = require('child_process');


module.exports = {
	scss,
	postcss,
	postcss_scss,

	webp_css,
	pxtorem,

	autoprefixer,
	postcss_sorting,

	stylelint,
	doiuse,

	cleanCSS,
	// css_beautify,
	cssnano,
	
	browser_reporter,
	srcmap,
	exec,
}