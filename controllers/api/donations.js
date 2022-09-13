const Donation = require('../../models/donation');
// const Item = require('../../models/item');


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  forUser,
  deleteDonation,
  updateDonation,
  addReview
};

async function deleteDonation(req, res) {
  await Donation.findByIdAndDelete(req.params.id);
  // const donations = await Donation.find({}).sort('-createdAt').exec();
  // res.json(donations);
}

async function updateDonation(req, res) {
  await Donation.findByIdAndUpdate(req.params.id);
}

async function forUser(req, res) {
  const donations = await Donation.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(donations);
}

async function checkout(req, res) {
  const cart = await Donation.getCart(req.user._id);
  cart.isPaid = true;
  await cart.save();
  res.json(cart);
}
async function setItemQtyInCart(req, res) {
  const cart = await Donation.getCart(req.user._id);
  await cart.setItemQty(req.body.itemId, req.body.newQty);
  res.json(cart);
}
async function addToCart(req, res) {
  const cart = await Donation.getCart(req.user._id);
  await cart.addItemToCart(req.params.id);
  res.json(cart);
}
async function cart(req, res) {
  const cart = await Donation.getCart(req.user._id);
  res.json(cart);
}

async function addReview(req, res) {
  let donation = await Donation.findById(req.params.id) 
  req.body.user = req.user._id;
  donation.reviews.push(req.body);
  await donation.save()
  res.json(donation);
}



