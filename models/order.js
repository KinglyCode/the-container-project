const mongoose = require('mongoose')
const shopItemsSchema = require('./shopItemsSchema')
const Schema = mongoose.Schema

const cartItemSchema = new Schema({
    qty: { type: Number, default: 1},
    item: shopItemsSchema
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

cartItemSchema.virtual('extPrice').get(function() {
    console.log("This is the THIS", this)
    return this.qty * this.item.price
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
    cartItems: [cartItemSchema],
    isPaid: { type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    console.log('cartItems', this.cartItems)
    return this.cartItems.reduce((total, item) => total + item.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.cartItems.reduce((total, item) => total + item.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId},
        { upsert: true, new: true }
    )
}

orderSchema.methods.addItemToCart = async function (itemId) {
    const cart = this
    const cartItem = cart.cartItems.find(cartItem => { cartItem._id.equals(itemId) })
    if (cartItem) {
        cartItem.qty += 1
    } else {
        const item = await mongoose.model('Item').findById(itemId)
        cart.cartItems.push({ item })
    }
    return cart.save()
}

orderSchema.methods.setItemQty = function(itemId, newQty) {
    const cart = this

    const cartItem = cart.cartItems.find(cartItem => cartItem._id.equals(itemId))
    if(cartItem && newQty <= 0) {
        cartItem.remove()
    } else if (cartItem) {
        cartItem.qty = newQty
    }
    return cart.save()
}

orderSchema.methods.setRemoveItem = function(itemId) {
    const cart = this
    const cartItem = cart.cartItems.find(cartItem => cartItem._id.equals(itemId))
    
    return cartItem.remove()
}

module.exports = mongoose.model('Order', orderSchema)
