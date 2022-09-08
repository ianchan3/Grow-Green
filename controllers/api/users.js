const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
};


async function create(req, res) {
  try {
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error('Invalid Credentials');
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error('Invalid Credentials');
    const token = createJWT(user);
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

function createJWT(user) {
  return jwt.sign(
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}