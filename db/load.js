const mysql = require('mysql');

function getConnection(callback) {
    const config = {
        host: 'localhost',
        port: 8080,
        user: 'test',
        password: '1234',
        database: 'bible',
        connectionLimit: 20,
    };
    const pool = mysql.createPool(config);
    pool.getConnection((err, conn) => {
        if (!err) {
            callback(conn);
        } else {
            console.error(err);
        }
    });
}

module.exports = getConnection;
