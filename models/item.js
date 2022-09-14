const mongoose = require('mongoose');
const itemSchema = require('./itemSchema');

module.exports = mongoose.model('Item', itemSchema);