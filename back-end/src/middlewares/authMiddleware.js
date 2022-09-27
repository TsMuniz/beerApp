const { readToken } = require('../utils/token');

const authenticate = (req, _res, next) => {
  const token = req.headers.authorization;
  try {
    const data = readToken(token);
    req.authData = { ...data };
  } catch (error) {
    throw new Error(error.message, { cause: 401 });
  }
  next();
};

module.exports = authenticate;