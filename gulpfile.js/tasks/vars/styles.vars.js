/* <<<---------- [PLUGINS for '../styles.js'] ---------->>>> */

// SCSS
const scss                                  = require('gulp-sass')(require('sass')),
// PostCSS (CSS4)
	postcss                                 = require('gulp-postcss'),
	
/* ___________________ --- | PostCSS plugins | --- ___________________ */
	
	// Scss syntax
	postcss_scss                        	= require('postcss-scss'),
	
	/* <+++++++++++++++ [Preprocessing] +++++++++++++++> */

		// Complite functions for including webp in css
		webp_css                            = require('webp-in-css/plugin'),

		// Auto convert px -> rem
		pxtorem                             =  require('postcss-pxtorem'),

		// Sqrt()
		sqrt 								= require('postcss-sqrt'),

		// Pow()
		pow 								= require('postcss-pow'),

		// Allow supporting vhw
		vwh 								= require('postcss-vwh'),

	/* <+++++++++++++++ [Linting] +++++++++++++++> */

		// Main Linter
		stylelint                           = require('stylelint'),

		// Analyse supporting
		doiuse                              = require('doiuse'),

	/* <+++++++++++++++ [Additional functions] +++++++++++++++> */
	
		// postcss-flexbugs-fixes
		// postcss-animation

	/* <+++++++++++++++ [Postprocessing] +++++++++++++++> */
	
		// Automatically detects and combines duplicated css selectors
		combine_duplicated_selectors 		= require('postcss-combine-duplicated-selectors'),

		// Autoprefixer
		autoprefixer                        = require('autoprefixer'),

		// Sorting rules
		postcss_sorting                 	= require('postcss-sorting'),

		// Fix known Browser Bugs
		fixes 								= require('postcss-fixes'),

		// Minificator
		cssnano                             = require('cssnano'),

		// Browser reporter
		browser_reporter              		= require('postcss-browser-reporter'),

		// immutable-CSS


/*___________________________________________________________________*/

	/*                                                     */
 /*  < -------------- [Side functions] -------------- > */
/*                                                       */
	
	// Beautifier
	cleanCSS                                = require('gulp-clean-css'),

	// Source map
	srcmap                                  = require('gulp-sourcemaps'),

	// Execution CMD commands
	{exec}                                  = require('child_process');


module.exports = {
	scss,
	postcss,
	postcss_scss,

	webp_css,
	pxtorem,
	sqrt,
	pow,
	vwh,
	
	combine_duplicated_selectors,
	autoprefixer,
	postcss_sorting,
	fixes,

	stylelint,
	doiuse,

	cleanCSS,
	cssnano,
	
	browser_reporter,
	srcmap,
	exec,
}