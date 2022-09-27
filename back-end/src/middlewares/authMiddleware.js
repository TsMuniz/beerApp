const { readToken } = require('../utils/token');

const authenticate = (req, _res, next) => {
  const token = req.headers.authorization;
  const data = readToken(token);
  req.authData = { ...data };
  next();
};

module.exports = authenticate;