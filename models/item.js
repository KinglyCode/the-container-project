const mongoose = require('mongoose')

require('./shopCategory')
const shopItemsSchema = require('./shopItemsSchema')

module.exports = mongoose.model('Item', shopItemsSchema)