/* <<<---------- [PLUGINS for 'styles.js'] ---------->>>> */

// PostCSS (CSS4)
const postcss		   					= require('gulp-postcss'),

/* ___________________ --- | PostCSS plugins | --- ___________________ */
	// Solve Global CSS Problem
	postcss_use 							= require('postcss-use'),
	
	// Scss syntax
	postcss_scss	   					= require('postcss-scss'),
	
	/* <+++++++++++++++ [Preprocessing] +++++++++++++++> */

		// @import
		postcss_nested_import 	= require('postcss-nested-import'),

		// @mixin
		postcss_sassy_mixins 		= require('postcss-sassy-mixins'),

		// @if/else if/else
		postcss_conditionals 		= require('postcss-conditionals'),

		// @for, $variables
		precss 									= require('precss'),

		// @extend
		postcss_extend_rule 		= require('postcss-extend-rule'),

		// @lost (Modern grid sys)
		lost 										= require('lost'),


	/* <+++++++++++++++ [Linting] +++++++++++++++> */

		/* Main Linter */
		stylelint 							= require('stylelint')({
			/* options */
		}),

		// Analyse supporting
		doiuse 									= require('doiuse'),



	/* <+++++++++++++++ [Additional functions] +++++++++++++++> */

		
	
		// postcss-flexbugs-fixes
		// postcss-animation



	/* <+++++++++++++++ [Postprocessing] +++++++++++++++> */
	
		// Autoprefixer
		autoprefixer 	   				= require('autoprefixer'),

		// Sorting rules
		postcss_sorting    			= require('postcss-sorting'),

		// Beautifying css
		stylefmt 								= require('gulp-stylefmt'),

		// Help to complete color palette
		colorguard 							= require('colorguard'),

		// Minificator
		cssnano	 								= require('cssnano'),
	
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
	postcss,
	postcss_use,
	postcss_scss,
	postcss_nested_import,
	postcss_sassy_mixins,
	postcss_conditionals,
	precss,
	postcss_extend_rule,
	lost,
	stylelint,
	doiuse,
	autoprefixer,
	postcss_sorting,
	stylefmt,
	colorguard,
	cssnano,
	webp_css,
	srcmap,
	exec
}