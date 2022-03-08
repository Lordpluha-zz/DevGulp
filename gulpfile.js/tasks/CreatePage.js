const {execSync}  = require('child_process');

var repo = "https://github.com/Lordpluha/main.git",
	targetPath = "./src/",
	options = {},
	callback = function(event) {};

// Create new page folder with name "main"
function CreateNEWPage(event) {
	execSync(`cd ${targetPath} && git clone ${repo}`);
	/*
	let pages_list = $.fs.readdirSync('./src/', {withFileTypes:true})
		.filter(d => d.isDirectory())
		.map(d => d.name);
	*/
	$.updatePagesList();
	// console.log(pages_list);
}

module.exports = {
	CreatePage: async function() {CreateNEWPage()}
};