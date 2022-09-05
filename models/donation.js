const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const donationSchema = new Schema({
  user: string,
}, {
  timestamps: true,
});