const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolve) => {
    db((connection) => {
        const query = `select sentence from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph = ${paragraph};`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`searchOne: ${err}`);
                throw err;
            }
            resolve(results);
        });
        connection.release();
    });
});

const searchMultiLines = (label, chapter, start, end) => new Promise((resolve) => {
    db((connection) => {
        const query = `select sentence from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph between ${start} and ${end};`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`searchMultiLines: ${err}`);
                throw err;
            }
            resolve(results);
        });
        connection.release();
    });
});

module.exports = {
    searchOne,
    searchMultiLines,
}