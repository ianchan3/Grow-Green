const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../../models/user');

module.exports = {
  create,
  login,
  checkToken
};

function checkToken(req, res) {
  console.log('req.user', req.user)
  res.json(req.exp);
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) throw new Error('Invalid Credentials');
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error('Invalid Credentials');
    const token = createJWT(user);
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token is a string
    const token = createJWT(user);
    // Yes, we can serialize (to JSON) strings
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

/*--- Helper Functions ---*/

function createJWT(user) {
  return jwt.sign(
    // additional data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}