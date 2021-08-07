const db = require('./load');

const searchOne = (label, chapter, paragraph) => new Promise((resolve) => {
    db((connection) => {
        const query = `select * from bible2 where long_label = '${label}' and chapter = ${chapter} and paragraph = ${paragraph};`;
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

module.exports = {
    searchOne,
}