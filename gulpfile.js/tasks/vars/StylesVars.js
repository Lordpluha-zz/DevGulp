/* <<<---------- [PLUGINS for '../styles.js'] ---------->>>> */

// SCSS
const scss 					= require('gulp-sass')(require('sass')),
// PostCSS (CSS4)
	postcss		   			= require('gulp-postcss'),
	
/* ___________________ --- | PostCSS plugins | --- ___________________ */
	
	// Scss syntax
	postcss_scss	   			= require('postcss-scss'),
	
	/* <+++++++++++++++ [Preprocessing] +++++++++++++++> */

		// ...

	/* <+++++++++++++++ [Linting] +++++++++++++++> */

		// Main Linter
		stylelint 				= require('stylelint'),

		// Analyse supporting
		doiuse 					= require('doiuse'),

	/* <+++++++++++++++ [Additional functions] +++++++++++++++> */
	
		// postcss-flexbugs-fixes
		// postcss-animation

	/* <+++++++++++++++ [Postprocessing] +++++++++++++++> */
	
		// Autoprefixer
		autoprefixer 	   			= require('autoprefixer'),

		// Sorting rules
		postcss_sorting    			= require('postcss-sorting'),

		// Minificator
		cssnano	 					= require('cssnano'),
	
		// immutable-CSS



/*___________________________________________________________________*/

  /*                                                     */
 /*  < -------------- [Side functions] -------------- > */
/*                                                     */

	// Complite functions for including webp in css
	webp_css 									= require('webp-in-css/plugin'),

	// Source map
	srcmap 										= require('gulp-sourcemaps'),
	
	// Execution CMD commands
	{exec} 										= require('child_process');


module.exports = {
	scss,
	postcss,
	postcss_scss,
	stylelint,
	doiuse,
	autoprefixer,
	postcss_sorting,
	cssnano,
	webp_css,
	srcmap,
	exec,
}