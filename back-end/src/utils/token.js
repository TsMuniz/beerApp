const jwt = require('jsonwebtoken');


const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });


async function createToken(user) {
    const { email, password, role } = user;
    const payload = { data: { email, password, role } };
    const token = jwt.sign(payload, secret);
    return token;
}

const readToken = async (token) => {
    let data;
    jwt.verify(token, secret, (_err, decoded) => {
      data = decoded.data;
    });
    return data;

};

module.exports = { secret, createToken, readToken };