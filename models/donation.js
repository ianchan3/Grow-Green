const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  user: string,
  isPaid: {type: Boolean, default: false}
}, {
  timestamps: true,
});

module.exports = mongoose.model('Donation', donationSchema);