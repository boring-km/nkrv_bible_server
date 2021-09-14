const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolve) => {
    db((connection) => {
        const query = `select label, chapter, paragraph, sentence from bible where label = '${label}' and chapter = ${chapter} and paragraph = ${paragraph};`;
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
        const query = `select label, chapter, paragraph, sentence from bible where label = '${label}' and chapter = ${chapter} and paragraph between ${start} and ${end};`;
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

const searchChapter = (label, chapter) => new Promise((resolve) => {
    db((connection) => {
        const query = `select label, chapter, paragraph, sentence from bible where label = '${label}' and chapter = ${chapter};`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`searchChapter: ${err}`);
                throw err;
            }
            resolve(results);
        });
        connection.release();
    });
});

const searchLabel = (label) => new Promise((resolve) => {
    db((connection) => {
        const query = `select label, chapter, paragraph, sentence from bible where label = '${label}';`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`searchLabel: ${err}`);
                throw err;
            }
            resolve(results);
        });
        connection.release();
    });
});

const getBookCount = (book) => new Promise((resolve) => {
    db((connection) => {
        const query = `select chapter, count(id) as 'count' from bible where label = '${book}' group by chapter;`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`getBookCount Chapter: ${err}`);
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
    searchChapter,
    searchLabel,
    getBookCount,
}