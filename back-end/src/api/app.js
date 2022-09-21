require('express-async-errors');
const express = require('express');
const loginRoute = require('../routes/loginRouter');
const userRoute = require('../routes/userRoute');

const app = express();
app.use(express.json());

app.use('/user', userRoute);
app.use('/login', loginRoute);

app.use((error, _req, res, _next) => {
    const { cause, message } = error;
    if (!cause) return res.status(500).json({ message });
    return res.status(cause).json({ message });
});

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
