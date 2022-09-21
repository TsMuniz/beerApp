const jwt = require('jsonwebtoken');

const secret = 'batatinha123';

async function createToken(user) {
    const { email, password, role } = user;
    const payload = { data: { email, password, role } };
    const token = jwt.sign(payload, secret);
    return token;
}

module.exports = { secret, createToken };