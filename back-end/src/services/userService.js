const { User } = require('../database/models/user');

const userService = {
    async findAll() {
        const userList = await User.findAll();
        return userList;
    },
};

module.exports = userService;