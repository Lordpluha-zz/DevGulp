/* <==================== [Styles] ====================> */

// DataBase of plugins and configs
const plug 					= require('./vars/styles.vars.js'),
	  path 					= require('path'),
	  
	  autoprefxr_conf 		= require('./configs/styles.js/autoprefixer.config.js'),
	  sorting_conf 			= require('./configs/styles.js/postcss-sorting.config.js'),
	  doiuse_conf 			= require('./configs/styles.js/doiuse.config.js'),
	  browser_rep_config 	= require('./configs/styles.js/postcss-browser-reporter.config.js'),
	  cleanCSS_conf 		= require('./configs/styles.js/gulp-clean-css.config.js'),
	  cssnano_conf 			= require('./configs/styles.js/cssnano.config.js'),
	  stylelint_conf 		= require('./configs/styles.js/stylelint.config.js');



// Styles processing
function styles(event) {
	return $.gulp.src(`./src/${$.start_page}/styles/css.src/styles.scss`)
		// Initialization plumber error chech and sourcemap
		.pipe( $.plumber())
		.pipe( plug.srcmap.init() )

		.pipe( plug.postcss([
			// Linting //
			plug.stylelint(stylelint_conf)
		],
		{
			syntax: plug.postcss_scss
		}))
		
		// SCSS
		.pipe( plug.scss().on('error', plug.scss.logError) )

		// PostCSS pre/post processing
		.pipe( plug.postcss([
			// Preprocessing //
			plug.webp_css(),
			plug.pxtorem(),
			plug.sqrt(),
			plug.pow(),
			plug.vwh(),



			// Postprocessing //
			plug.combine_duplicated_selectors({removeDuplicatedProperties: true}),

			plug.autoprefixer(autoprefxr_conf),
			// Working: Yes
			// Setted up: Yes

			plug.postcss_sorting(sorting_conf),
			// Working: Yes
			// Setted up: Yes
			
			plug.fixes({preset: 'safe'}),
			
			// Analyse //
			plug.doiuse(doiuse_conf),
			// Working: Yes
			// Setted up: No



			// Browser report //
			plug.browser_reporter(browser_rep_config)

		], {
			syntax: plug.postcss_scss,
		}))



		// Beautiffying
		.pipe( plug.cleanCSS(cleanCSS_conf, (details) => {
			console.log(`• ${details.name} [Log] Default size: ${details.stats.originalSize} bytes`);
			console.log(`• ${details.name} [Log] After cleanCSS: ${details.stats.minifiedSize} bytes`);
		}))
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist/`))
		


		// Minification
		.pipe( plug.postcss([
			plug.cssnano(cssnano_conf),

			// // Browser report
			plug.browser_reporter()
		]) )
		.pipe( $.rname({suffix: '.min'}) )
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist`) )
		


		// Downloading sourcemap
		.pipe( plug.srcmap.write(`./`) )
		// Stop plumber and streaming new style rules
		.pipe( $.plumber.stop() )
		// .pipe( $.browserSync.stream({match: `./src/${$.start_page}/styles/css.dist*.{css, map}`}) )
		.pipe( $.browserSync.stream() );
}

// Обработка шрифтов !!!
function fonts(event) {
	plug.exec(`py ./gulpfile.js/file_for_uploading_fonts_to_scss.py`,
		(err, stdout, stderr) => {
			if (err) {
				console.log(err);
			}
			if (stdout!='' || stderr!='') {
				console.log(stdout);
				console.log(stderr);	
			}
		}
	);
};

module.exports = {
	styles: async function() {styles()},
	fonts: async function() {fonts()}
}