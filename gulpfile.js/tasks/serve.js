'use strict';

const browserSync = require('browser-sync').create();

// Создание локального сервера
function browser(event) {
	// <<Open Server>> Enabling or Disabling
	if ($.OpenServer_conn == 'True') {
		browserSync.init({
			https: true,
    		proxy: $.proxy,
  			port: $.port,
  			injectChanges: true,
  			// Синхронизация всех устройств и их действий
			ghostMode: {
			    clicks: true,
			    forms: true,
			    scroll: false
			}
    	});
	} else {
		browserSync.init({
			server: {
	    		baseDir: `./src/${$.start_page}/html`,
	    		https: true
	    	},
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
			    scroll: false
			}
    	});
	}

};

function browserReload(event) {
	browserSync.reload({ stream:true });
};

module.exports = {
	browser: async function() {browser()},
	browserReload: async function() {browserReload()},
}