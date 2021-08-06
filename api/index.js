const express = require('express');
const router = express.Router();
const bibleApi = require('./bible_api');

router.get('/search/:label/:chapter/:paragraph', bibleApi.searchOne);

module.exports = router;