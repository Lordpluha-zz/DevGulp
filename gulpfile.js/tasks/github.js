// Работа с Git
function commit(event) {
	exec(`py src/${start_page}/styles/fonts/file_for_uploading_fonts_to_css.py`, (err, stdout, stderr) => {
	    console.log(stdout);
	    console.log(stderr);
	    cb(err);
 	})
	event();
};

module.exports = {
	commit: async function() {commit()}
}