$.browserSync = require('browser-sync').create();

// Создание локального сервера
function browser(event) {
	// <<Open Server>> Enabling or Disabling
	var conf = {
		injectChanges: true,
		watch: true,
		// Синхронизация всех устройств и их действий
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		// 'debug' if have problem)
		logLevel: $.logLevel,
		logPrefix: $.Project_name,
		logConnections: false,
		logFileChanges: true,
		open: true,
		reloadOnRestart: true,
		notify: true,
		scrollProportionally: true,
		codeSync: true,
		timestamps: true
	}

	if ($.OpenServer_conn == true) {
		conf.proxy = $.proxy;
		conf.port = $.port;
	} else {
		conf.server = {
			baseDir: [`./src/`]
		};
	}

	if ($.https == true) {
		conf.https = {
			key: "certificates/localhost-server.key",
			cert:"certificates/localhost-server.crt"
		};
	}

	$.browserSync.init(conf);
};

function browserReload() {
	$.browserSync.reload({ stream:true });
};

module.exports = {
	browser: async function() {browser()},
	browserReload: async function() {browserReload()},
}