const express = require('express');
const router = express.Router();
const bibleApi = require('./bible_api');

router.get('/searchOne/:label/:chapter/:paragraph', bibleApi.searchOne);
router.get('/searchMul/:label/:chapter/:paragraphString', bibleApi.searchMultiLines);
router.get('/search/:label/:chapter', bibleApi.searchChapter);

module.exports = router;