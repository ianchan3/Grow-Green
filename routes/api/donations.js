const express = require('express');
const router = express.Router();
const donationsCtrl = require('../../controllers/api/donations');

router.get('/cart', donationsCtrl.cart);
router.get('/user', donationsCtrl.forUser);
router.post('/cart/items/:id', donationsCtrl.addToCart);
router.post('/cart/checkout', donationsCtrl.checkout);
router.put('/cart/qty', donationsCtrl.setItemQtyInCart);
router.delete('/:id', donationsCtrl.deleteDonation);
router.post('/comments/:id', donationsCtrl.addComment);
router.put('/donations/:did/comments/:cid', donationsCtrl.updateComment);

module.exports = router;
