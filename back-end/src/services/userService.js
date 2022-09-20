const user = require('../database/models/user');

const userService = {
    async findAll() {
        const userList = await user.findAll();
        return userList;
    },
};

module.exports = userService;