const { readToken } = require('../utils/token');

const authenticate = async (req, _res, next) => {
  const token = req.headers.authorization;
  if (!token) throw new Error('Token not found', { cause: 401 });
  const data = await readToken(token);
  if (!data) throw new Error('Expired or invalid token', { cause: 401 });
  req.authData = { ...data };
  next();
};

module.exports = authenticate;