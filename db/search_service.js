const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolve) => {
    db((connection) => {
        const query = `select long_label, chapter, paragraph, regexp_replace(sentence, '<[^>]*> ', '') from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph = ${paragraph} and paragraph > 0;`;
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
        const query = `select long_label, chapter, paragraph, regexp_replace(sentence, '<[^>]*> ', '') from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph between ${start} and ${end} and paragraph > 0;`;
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
        const query = `select long_label, chapter, paragraph, regexp_replace(sentence, '<[^>]*> ', '') from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph > 0;`;
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
        const query = `select long_label, chapter, paragraph, regexp_replace(sentence, '<[^>]*> ', '') from bible2 where long_label = '${label}' and paragraph > 0;`;
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
        const query = `select chapter, count(idx) as 'count' from bible2 where long_label = '${book}' and paragraph > 0 group by chapter;`;
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