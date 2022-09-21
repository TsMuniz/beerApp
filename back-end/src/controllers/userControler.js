const userService = require('../services/userService');

const userController = {
    async findAll(_req, res) {
        const userList = await userService.findAll();
        return res.status(200).json(userList);
    },
    async create(req, res) {
        await userService.validateRegisterBody(req.body);
        const userCreated = await userService.create(req.body);
        return res.status(201).json(userCreated);
    },
    async findOne(req, res) {
        const { id } = req.params;
        const userCreated = await userService.findOne(+id);
        return res.status(200).json(userCreated);
    },
};

module.exports = userController;