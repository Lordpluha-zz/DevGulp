global.$.browserSync = require('browser-sync').create();

// Создание локального сервера
function browser(event) {
	// <<Open Server>> Enabling or Disabling
	if ($.OpenServer_conn == 'True') {
		$.browserSync.init({
			https: {
				key: "certificates/localhost-server.key",
				cert:"certificates/localhost-server.crt"
			},
			proxy: $.proxy,
			port: $.port,
			injectChanges: true,
			watch: true,
			// Синхронизация всех устройств и их действий
			ghostMode: {
				clicks: true,
				forms: true,
				scroll: true
			},
			// 'debug' if have problem)
			logLevel: "info",
			logPrefix: $.Project_name,
			logConnections: false,
			logFileChanges: true,
			open: true,
			reloadOnRestart: true,
			notify: true,
			scrollProportionally: true,
			codeSync: true,
			timestamps: true,
			// files: [
			// 	`./src/${$.start_page}/***.{php, min.php}`,
			// 	`./src/${$.start_page}/styles/**/*.{css, css.map, scss, min.css}`,
			// 	`./src/${$.start_page}/styles/fonts/**/*.{otf, ttf, woff, woff2, eot, eot?#iefix}`,
			// 	`./src/${$.start_page}/html/*.html`,
			// 	`./src/${$.start_page}/js/**/*.{js, min.js}`
			// ]
		});
	} else {
		$.browserSync.init({
			server: {
				baseDir: [`./src/`],
			},
			https: {
				key: "certificates/localhost-server.key",
				cert:"certificates/localhost-server.crt"
			},
			watch: true,
			injectChanges: true,
			// Синхронизация всех устройств и их действий
			ghostMode: {
				clicks: true,
				forms: true,
				scroll: true
			},
			// files: [
			// 	`./src/${$.start_page}/***.{php, min.php}`,
			// 	`./src/${$.start_page}/styles/**/*.{css, css.map, scss, min.css}`,
			// 	`./src/${$.start_page}/styles/fonts/**/*.{otf, ttf, woff, woff2, eot, eot?#iefix}`,
			// 	`./src/${$.start_page}/html/*.html`,
			// 	`./src/${$.start_page}/js/**/*.{js, min.js}`
			// ]
		});
	}

};

function browserReload() {
	$.browserSync.reload({ stream:true });
};

module.exports = {
	browser: async function() {browser()},
	browserReload: async function() {browserReload()},
}