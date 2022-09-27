const jwt = require('jsonwebtoken');
const fs = require('fs');

const secretKey = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8', flag: 'r' });

const secret = secretKey.split('=')[1] || 'batatinha123';

async function createToken(user) {
    const { email, password, role } = user;
    const payload = { data: { email, password, role } };
    const token = jwt.sign(payload, secret);
    return token;
}

async function readToken(token) {
    try {
      const { data } = jwt.verify(token, secret);
      return data;
    } catch (error) {
        throw new Error(error.message, { cause: 401 });
    }
}

module.exports = { secret, createToken, readToken };