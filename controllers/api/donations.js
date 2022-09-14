const Donation = require('../../models/donation');
// const Item = require('../../models/item');


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
  forUser,
  deleteDonation,
  // updateDonation,
  addComment,
  updateComment
  
  
};

async function updateComment(req, res) {
  
  console.log(req.body, req.params.did, req.params.cid)
   const donation = await Donation.findOne({_id: req.params.did})
   const comment = donation.comments.id(req.params.cid);
    comment.content = req.body.content;
    await donation.save();
  
    const donations = await Donation.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
    res.json(donations);
    
    }



async function addComment(req, res) {
  let donation = await Donation.findById(req.params.id) 
  req.body.user = req.user._id;
  donation.comments.push(req.body);
  await donation.save()
  const donations = await Donation.find({user: req.user._id, isPaid: true}).sort('-updatedAt');
  res.json(donations);
}

async function deleteDonation(req, res) {
  await Donation.findByIdAndDelete(req.params.id);
 
}

// async function updateDonation(req, res) {
//   await Donation.findByIdAndUpdate(req.params.id);
// }

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





