require('dotenv/config');

const port = process.env.PORT;
console.log(port);
const app = require('./app');


app.listen(port);
console.log(`Api rodando na porta ${port}`);
