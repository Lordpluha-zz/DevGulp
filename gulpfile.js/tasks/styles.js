// Styles
// PostCSS (CSS4)
const postcss	= require('gulp-postcss'),	
	// PostCSS plugins in postcss
	postcssSass = require('postcss-scss')
	autoprefixer = require('autoprefixer'),
	postcss_nested = require('postcss-nested'),
	postcss_sorting = require('postcss-sorting'),
	postcss_preset_env = require('postcss-preset-env'),
	webp_css = require('webp-in-css/plugin'),
	stylefmt = require('stylefmt'),
	lost = require('lost'),
	doiuse = require('doiuse'),
	stylelint = require('stylelint')({
		/* options */
	}),
	cssnano = require('cssnano'),
	colorguard = require('colorguard')
// Source map
	srcmap 		= require('gulp-sourcemaps'),
	{exec} 		= require('child_process');

// Работа со стилями
function styles(event) {
	return $.gulp.src(`./src/${$.start_page}/styles/css.src/styles.css`)
		.pipe($.plumber())
		.pipe( srcmap.init() )

		// PostCSS main processing
		.pipe( postcss([,
			autoprefixer({
				grid: "autoplace",
				cascade: true,
				remove: true,
				add: true,
				supports: true,
				flexbox: true,
			}),
			postcss_nested(),
			postcss_sorting(),
			postcss_preset_env({
				stage: 3,
				features: {
					'nesting-rules': true
				},
			}),
			webp_css(),
			stylefmt({
				from: 'styles.css',
    			syntax: postcssSass
			}),
			lost,
			doiuse,
			stylelint,
			cssnano,
			colorguard

		]) )

		// // Очистка кеша путей (удаление доп. авто-путей $.gulp)
		// .pipe( rname({dirname: ""}) )

		// Выгрузка красивого css
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist/`))
		
		// PostCSS minification
		// .pipe( postcss([]))
		.pipe($.rname({suffix: '.min'}) )
		.pipe($.plumber.stop())

		// Выгрузка минимизированного файла
		.pipe( $.gulp.dest(`./src/${$.start_page}/styles/css.dist`) )

		// Выгрузка sourcemap
		.pipe( srcmap.write(`./`) )
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