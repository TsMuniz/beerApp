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

const readToken = async (token) => {
    let data;
    jwt.verify(token, secret, (_err, decoded) => {
      data = decoded;
    });
    return data;
};

module.exports = { secret, createToken, readToken };