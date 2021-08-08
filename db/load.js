const mysql = require('mysql');

function getConnection(callback) {
    const config = {
        host: process.env.mysql_host,
        port: process.env.mysql_port,
        user: process.env.mysql_user,
        password: process.env.mysql_password,
        database: process.env.mysql_database,
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
