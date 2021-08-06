const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolove) => {
    db((connection) => {
        resolove(true);
        connection.release();
    });
});

module.exports = {
    searchOne,
}