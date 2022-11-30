const mongoose = require('mongoose')
const shopItemsSchema = require('./shopItemsSchema')
const Schema = mongoose.Schema



const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    cartItems: [cartItem],
    isPaid: { type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    return this.cartItems.reduce((total, item) => total + item.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.cartItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart() = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId},
        { upsert: true, new: true }
    )
}

const cartItemSchema = new Schema({
    qty: { type: Number, default: 1},
    item: shopItemsSchema
}, {
    timestamps: true,
    toJSON: { virtual: true }
})

cartItemSchema.virtual('extPrice').get(function() {
    return this.qty * this.item.price
})

module.exports = mongoose.model('Order', orderSchema)
