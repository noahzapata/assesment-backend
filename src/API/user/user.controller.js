const User = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
  try {
    const userData = req.body;
    const { email, password } = userData;
    const existingUser = await User.find({ email });

    if (!existingUser) {
      throw new Error('The user already exist');
    }

    const encPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ email, password: encPassword });

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });

    res
      .status(201)
      .json({ message: 'User created succesfully', data: { email, token } });
  } catch (error) {
    res
      .status(400)
      .json({ message: 'Error creating user', error: error.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new Error('Some of your credentials are invalid');
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      throw new Error('Some of your credentials are invalid');
    }
    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24,
    });
    return res
      .status(201)
      .json({ message: 'Login successfully', data: { token } });
  } catch (err) {
    return res
      .status(400)
      .json({ message: 'User could not login', error: err.message });
  }
};

module.exports = { signUp, signIn };
