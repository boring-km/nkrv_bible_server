const express = require('express');
const router = express.Router();
const bibleApi = require('./bible_api');

router.get('/', (req, res) => {
    res.render('index');
});
router.get('/searchOne/:label/:chapter/:paragraph', bibleApi.searchOne);
router.get('/searchMul/:label/:chapter/:paragraphString', bibleApi.searchMultiLines);
router.get('/search/:label/:chapter', bibleApi.searchChapter);
router.get('/search/:label', bibleApi.searchLabel);
router.get('/count/:label', bibleApi.getBookCount);
router.get('/textLength/:label/:chapter', bibleApi.getPreviousTextTotalLength);

module.exports = router;