require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');


// IIFE
(async function() {

  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Anywhere', sortOrder: 10},
    {name: 'California', sortOrder: 20},
    {name: 'Oregon', sortOrder: 30},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Any Tree', emoji: '🌳', category: categories[0], price: 5.95},
    {name: 'Palm Tree', emoji: '🌴', category: categories[1], price: 14.95},
    {name: 'Pine Tree', emoji: '🌲', category: categories[2], price: 1.95},
  ]);

  console.log(items)

  process.exit();

})();