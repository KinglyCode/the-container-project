const Item = require('../../models/item')

module.exports = {
    index,
}

async function index(req, res) {
    const items = await Item.find({}).sort('name').populate('category').exec()
    res.json(items)
}