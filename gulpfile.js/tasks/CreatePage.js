const git = require('');

var repo = "https://github.com/Lordpluha/DevGulp.git",
	targetPath = "src/",
	options = {},
	callback = function(event) {};

function CreateNEWPage(event) {
	git(repo, targetPath);
}

var pages_dir = $.fs.readdirSync('./src/', {withFileTypes:true})
	.filter(d => d.isDirectory())
	.map(d => d.name);
// List of pages
console.log(pages_dir);


module.exports = {
	CreatePage: async function() {CreateNEWPage()}
};