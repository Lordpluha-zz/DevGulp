const del = require('del'),
    fs = require('fs');

async function clean() {
    del.sync('./dist/*.*');
    del.sync('./dist');
    fs.mkdirSync('./dist');
}
module.exports = {
    clean: async function () {clean()}
}