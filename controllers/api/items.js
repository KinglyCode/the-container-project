const Item = require('../../models/item')

module.exports = {
    index,
}

async function index(req, res) {
    console.log('line 8')
    const items = await Item.find({}).sort('name').populate('category').exec()
    res.json(items)
    console.log(items, "items")
}