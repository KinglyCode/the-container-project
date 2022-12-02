const Order = require('../../models/order')

module.exports = {
    cart,
    addToCart,
    setItemQty,
    setRemoveItem,
}

async function cart(req, res) {
    const cart = await Order.getCart(req.user._id)
    res.json(cart)
}

async function addToCart(req, res) {
    const cart = await Order.getCart(req.user._id)
    await cart.addItemToCart(req.params.id)
    res.json(cart)
}

async function setItemQty(req, res) {
    const cart = await Order.getCart(req.user._id)
    await cart.setItemQty(req.body.itemid, req.body.newQty)
    res.json(cart)
}

async function setRemoveItem(req, res) {
    console.log("HERE for req.body", req.body)
    console.log("HERE for req.params", req.params.id)
    const cart = await Order.getCart(req.user._id)
    await cart.setRemoveItem(req.params.id)
    res.json(cart)
}