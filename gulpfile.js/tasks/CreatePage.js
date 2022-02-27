const git_clone = require('git-clone');

var repo = "https://github.com/Lordpluha/DevGulp/tree/main/src/main/html",
	targetPath = "src/",
	options = {},
	callback = function(event) {};

function CreateNEWPage(event) {
	git_clone(repo, targetPath, options, callback);
}

var pages_dir = $.fs.readdirSync('./src/', {withFileTypes:true})
	.filter(d => d.isDirectory())
	.map(d => d.name);
// List of pages
console.log(pages_dir);


module.exports = {
	CreatePage: async function() {CreateNEWPage()}
};