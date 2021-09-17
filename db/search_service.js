const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolve) => {
    db((connection) => {
        const query = `select label, chapter, paragraph, sentence from bible3 where label = '${label}' and chapter = ${chapter} and paragraph = ${paragraph};`;
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
        const query = `select label, chapter, paragraph, sentence from bible3 where label = '${label}' and chapter = ${chapter} and paragraph between ${start} and ${end};`;
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
        const query = `select label, chapter, paragraph, sentence from bible3 where label = '${label}' and chapter = ${chapter};`;
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
        const query = `select label, chapter, paragraph, sentence from bible3 where label = '${label}';`;
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

const getBookCount = (label) => new Promise((resolve) => {
    db((connection) => {
        const query = `select chapter, count(id) as 'count' from bible3 where label = '${label}' group by chapter;`;
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

const getPreviousTextTotalLength = (book, chapter) => new Promise((resolve) => {
    db((connection) => {
        const query = `select coalesce(sum(char_length(sentence)),0) as result from bible3 where label = '${book}' and chapter < ${chapter}`;
        console.log(query);
        connection.query(query, (err, results) => {
            if (err) {
                console.error(`getBookCount Chapter: ${err}`);
                throw err;
            }
            resolve(results[0]);
        });
        connection.release();
    })
});

module.exports = {
    searchOne,
    searchMultiLines,
    searchChapter,
    searchLabel,
    getBookCount,
    getPreviousTextTotalLength,
}