require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');


// IIFE
(async function() {



  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Any Tree', emoji: '🌳', price: 5.95},
    {name: 'Palm Tree', emoji: '🌴', price: 14.95},
    {name: 'Pine Tree', emoji: '🌲', price: 1.95},
  ]);

  console.log(items)

  process.exit();

})();