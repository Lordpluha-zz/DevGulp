'use strict';

global.$.browserSync = require('browser-sync').create();

// Создание локального сервера
function browser(event) {
	// <<Open Server>> Enabling or Disabling
	if ($.OpenServer_conn == 'True') {
		$.browserSync.init({
			https: {
	    		key: "localhost-privateKey.key",
	    		cert: "localhost.crt"
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
			logLevel: "debug",
			logPrefix: $.Project_name,
			logConnections: true,
			logFileChanges: true,
			open: false,
			reloadOnRestart: true,
			notify: true,
			scrollProportionally: true,
			codeSync: true,
			timestamps: true,
			files: [
				`./src/${$.start_page}/**/.php*`,
				`./src/${$.start_page}/styles/css.dist/styles.{css, css.map}`,
				`./src/${$.start_page}/html/index.html`,
				`./src/${$.start_page}/js/scripts/scripts.html`
			]
    	});
	} else {
		$.browserSync.init({
			server: {
	    		baseDir: [`./src/${$.start_page}/html`, `./dist/${$.start_page}`],
	    		https: {
	    			key: "localhost-privateKey.key",
	    			cert: "localhost.crt"
	    		}
	    	},
	    	watch: true,
	    	injectChanges: true,
	    	rewriteRules: [
			  	{
			      	match: /Content-Security-Policy/,
			      	fn: function (match) {
			        	return "DISABLED-Content-Security-Policy";
			      	}
			  	}
			],
			// Синхронизация всех устройств и их действий
			ghostMode: {
			    clicks: true,
			    forms: true,
			    scroll: true
			},
			files: [
				`./src/${$.start_page}/**/.php*`,
				`./src/${$.start_page}/styles/css.dist/styles.{css, css.map}`,
				`./src/${$.start_page}/html/index.html`,
				`./src/${$.start_page}/js/scripts/scripts.html`
			]
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