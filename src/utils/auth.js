const jwt = require('jsonwebtoken');
const User = require('../api/user/user.model');

exports.auth = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      throw new Error('Acces denied');
    }
    const [_, token] = authorization.split(' ');

    if (!token) {
      throw new Error('Sesion expired');
    }
    const { id } = jwt.verify(token, process.env.SECRET_KEY);
    req.user = id;
    const user = await User.findById(req.user);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    next();
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
