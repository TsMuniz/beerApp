const Joi = require('joi');
const md5 = require('md5');
const { User } = require('../database/models');

const userService = {
    async validateRegisterBody(body) {
        const schema = Joi.object({
          email: Joi.string().email().required(),
          password: Joi.string().min(6).required(),
          role: Joi.string().required(),
          name: Joi.string().min(12).required(), 
        });
    
        const { error } = schema.validate(body);
        if (error) { throw new Error(error.message, { cause: 400 }); }
    },

    async findAll() {
        const userList = await User.findAll();
        return userList;
    },

    async create(body) {
        const { password, name, email, role } = body;
        const hashedPassword = md5(password); 
        const findExist = await User.findOne({ where: { email } });
        if (findExist) throw new Error('Usuario ja existente', { cause: 409 });
        const createdUser = await User.create({ name, email, role, password: hashedPassword });
        if (createdUser) return createdUser;
    },

    async findOne(id) {
        const createdUser = await User.findByPk(id);
        if (createdUser) return createdUser;
        throw new Error('Not Found', { cause: 404 });
    },

    async delete(id) {
        const product = await this.findOne(id);

        if (product) {
            await User.destroy({ where: { id } });
            return product;
        }
    },

    async update(id, body) {
        const user = await this.findOne(id, { raw: true });
        const updatedUser = { ...user.dataValues, ...body };
        const { name, email, role, password } = updatedUser;
        
        if (body.password && user) {
            const hashedPassword = md5(body.password);
            updatedUser.password = hashedPassword;
            await User.update({ name, email, role, password: hashedPassword }, { where: { id } });
            return updatedUser;
        }

        if (user) {
            await User.update({ name, email, role, password }, { where: { id } });
            return updatedUser;
        }
    },
};

module.exports = userService;