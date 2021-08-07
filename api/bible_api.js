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

module.exports = {
    searchOne,
}