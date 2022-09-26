const jwt = require('jsonwebtoken');

const secret = 'batatinha123';

async function createToken(user) {
    const { email, password, role } = user;
    const payload = { data: { email, password, role } };
    const token = jwt.sign(payload, secret);
    return token;
}

const readToken = async (token) => {
    if (!token) throw new Error('Token not found', { cause: 401 });
  
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
        throw new Error('Expired or invalid token', { cause: 401 });
    }
};

module.exports = { secret, createToken, readToken };