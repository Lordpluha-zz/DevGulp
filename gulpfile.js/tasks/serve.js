$.browserSync = require('browser-sync').create();

// Local server
function browser(event) {
	// <<Open Server>> Enabling or Disabling
	var conf = {
		injectChanges: true,
		watch: true,
		// Sync of all devices and them action
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		scrollProportionally: true,
		codeSync: true,

		reloadOnRestart: true,

		logLevel: $.logLevel,
		logPrefix: $.Project_name,
		logConnections: false,
		logFileChanges: true,
		
		open: true,
		notify: true,
		timestamps: true,
		online: true,
		minify: false
	}

	// OS Panel on/off checking
	if ($.OpenServer_conn == true) {
		conf.proxy = $.proxy;
		conf.port = $.port;
		conf.serveStatic = [
			`./src/${$.start_page}/html`,
			`./src/${$.start_page}`
		];
	} else {
		conf.server = {
			baseDir: [`./src/${$.start_page}`, `./src/${$.start_page}/html`]
		};
	}

	// Https on/off check
	if ($.https == true) {
		conf.https = {
			key: `${$.CertDir}/localhost-server.key`,
			cert:`${$.CertDir}/localhost-server.crt`
		};
	}

	// Server initialization
	$.browserSync.init(conf);
};

function browserReload() {
	$.browserSync.reload({ stream:true });
};

module.exports = {
	browser: async function() {browser()},
	browserReload: async function() {browserReload()},
}