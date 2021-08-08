const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const api = require('./api');

async function startServer() {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(cors());
    require('dotenv').config();
    
    app.use('/', api);
    
    const port = 3000;
    app.listen(port, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`서버 시작, 포트: ${port}`);
    });
}

startServer().then(() => null);
