
const Schema = require('mongoose').Schema

const shopItemsSchema = new Schema({
    name: { type: String, required: true},
    //name1: { type: String },
    img: { type: String },
    //img1: { type: String },
    category: { type: Schema.Types.ObjectId, ref: 'Shop'},
    packAmount: Number,
    price: { type: Number, required: true, default: 0 },
    feature: { type: Boolean, default: false}
}, {
    timestamps: true
})

module.exports = shopItemsSchema