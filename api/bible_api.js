const dbService = require('../db/search_service');

const searchOne = async (req, res) => {
    try {
        const { label, chapter, paragraph } = req.params;
        const result = {
            text: await dbService.searchOne(label, chapter, paragraph)
        };
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: `err` });
    }
};

const searchMultiLines = async (req, res) => {
    try {
        const { label, chapter, paragraphString } = req.params;
        const paragraphArray = paragraphString.split('-');
        const start = paragraphArray[0];
        const end = paragraphArray[1];
        const result = {
            text: await dbService.searchMultiLines(label, chapter, start, end)
        };
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: `err` });
    }
}

const searchChapter = async (req, res) => {
    try {
        const { label, chapter } = req.params;
        const result = {
            text: await dbService.searchChapter(label, chapter)
        };
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: `err` });
    }
}

const searchLabel = async (req, res) => {
    try {
        const { label } = req.params;
        const result = {
            text: await dbService.searchLabel(label)
        };
        res.json(result);
    } catch (err) {
        res.status(500).json({ err });
    }
}

const getBookCount = async (req, res) => {
    try {
        const { book } = req.params;
        const result = {
            result: await dbService.getBookCount(book)
        };
        res.json(result);
    } catch (err) {
        res.status(500).json({ err })
    }
}

module.exports = {
    searchOne,
    searchMultiLines,
    searchChapter,
    searchLabel,
    getBookCount,
}