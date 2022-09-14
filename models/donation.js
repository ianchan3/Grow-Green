const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = require('./itemSchema');

const commentSchema = new Schema({
  content: {
    type: String,
    match: /.{1,}/
  },
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  userName: String,
}, {
  timestamps: true
});

const lineItemSchema = new Schema({
  qty: { type: Number, default: 1 },
  item: itemSchema
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

lineItemSchema.virtual('extPrice').get(function() {
  return this.qty * this.item.price;
});

const donationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [commentSchema],
  lineItems: [lineItemSchema],
  isPaid: {type: Boolean, default: false }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

donationSchema.virtual('donationTotal').get(function() {
  return this.lineItems.reduce((total, item) => total + item.extPrice, 0);
});

donationSchema.virtual('totalQty').get(function() {
  return this.lineItems.reduce((total, item) => total + item.qty, 0);
});

donationSchema.virtual('donationId').get(function() {
  return this.id.slice(-6).toUpperCase();
});

donationSchema.statics.getCart = function(userId) {
  return this.findOneAndUpdate(
    { user: userId, isPaid: false },
    { user: userId },
    { upsert: true, new: true }
  );
};

donationSchema.methods.addItemToCart = async function(itemId) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem) {
    lineItem.qty++;
  } else {
    const Item = mongoose.model('Item');
    const item = await Item.findById(itemId);
    const newLineItem = { item };
    cart.lineItems.push(newLineItem);
  }
  return cart.save();
};

donationSchema.methods.setItemQty = function(itemId, newQty) {
  const cart = this;
  const lineItem = cart.lineItems.find(lineItem => lineItem.item._id.equals(itemId));
  if (lineItem && newQty <= 0) {
    lineItem.remove();
  } else if (lineItem) {
    lineItem.qty = newQty;
  }
  return cart.save();
};


module.exports = mongoose.model('Donation', donationSchema);