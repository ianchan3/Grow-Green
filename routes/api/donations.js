const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');

// GET /api/donations/cart
router.get('/cart', donationsCtrl.cart);
// GET /api/donations/user
router.get('/user', donationsCtrl.forUser);
// POST /api/donations/cart/items/:id
router.post('/cart/items/:id', donationsCtrl.addToCart);
// POST /api/donations/cart/checkout
router.post('/cart/checkout', donationsCtrl.checkout);
// POST /api/donations/cart/qty
router.put('/cart/qty', donationsCtrl.setItemQtyInCart);

module.exports = router;
