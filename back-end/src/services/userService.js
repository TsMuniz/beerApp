const Joi = require('joi');
const md5 = require('md5');
const { User } = require('../database/models');

const userService = {
    async validateRegisterBody(body) {
        const schema = Joi.object({
          email: Joi.string().min(8).required(),
          password: Joi.string().required(),
          role: Joi.string().required(),
          name: Joi.string().alphanum().min(4).required(), 
        });
    
        const { error } = schema.validate(body);
        console.log(error);
        if (error) { throw new Error(error.message, { cause: 400 }); }
    },

    async findAll() {
        const userList = await User.findAll();
        return userList;
    },

    async create(body) {
        const { password, name, email, role } = body;
        const hashedPassword = md5(password); 
        const createdUser = await User.create({ name, email, role, password: hashedPassword });
        if (createdUser) return createdUser;
    },

    async findOne(id) {
        const createdUser = await User.findByPk(id);
        if (createdUser) return createdUser;
    },
};

module.exports = userService;