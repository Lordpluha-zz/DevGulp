const del = require('del'),
    fs = require('fs');

// Cleaning dist build dir
async function clean() {
    del.sync('./dist/*.*');
    del.sync('./dist');
    fs.mkdirSync('./dist');
}
module.exports = {
    clean: async function () {clean()}
}