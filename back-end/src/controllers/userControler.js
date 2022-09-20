const userService = require('../services/userService');

const userController = {
    async findAll(_req, res) {
        const userList = await userService.findAll();
        return res.status(200).json(userList);
    },
};

module.exports = userController;