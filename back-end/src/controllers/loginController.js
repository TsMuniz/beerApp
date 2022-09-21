const loginService = require('../services/loginService');

const loginController = {
    async login(req, res) {
        await loginService.validateLoginBody(req.body);
        const token = await loginService.login(req.body);
        return res.status(200).json({ token });
    },

};

module.exports = loginController;