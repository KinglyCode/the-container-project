const express = require('express')
const router = express.Router()
const cartCtrl = require('../../controllers/api/orders')

router.get('/cart', cartCtrl.cart)

module.exports = router