const express = require('express')
const router = express.Router()
const cartCtrl = require('../../controllers/api/orders')

router.get('/cart', cartCtrl.cart)
router.post('/cart/items/:id', cartCtrl.addToCart)

module.exports = router