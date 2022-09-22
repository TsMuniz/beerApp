const Joi = require('joi');
const { Sale } = require('../database/models');

const saleStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

const salesService = {
    async validateSaleBody(body) {
        const schema = Joi.object({
          userId: Joi.number().required(),
          sellerId: Joi.number().required(),
          totalPrice: Joi.number().required(),
          deliveryAdress: Joi.string().required(),
          deliveryNumber: Joi.number().required(),
          status: Joi.string().allow(...saleStatus).required(),
        });
    
        const { error } = schema.validate(body);

        if (error) { throw new Error(error.message, { cause: 400 }); }
    },

    async findAll() {
        const sales = await Sale.findAll();
        return sales;
    },

    async create(body) {
        const createdSale = await Sale.create({ ...body });
        return createdSale;
    },

    async findOne(id) {
        const sale = await Sale.findByPk(id);
        return sale;
    },
    
    async update(id, obj) {
        const updatedSale = await Sale.update({ ...obj }, { 
            where: { id }, 
        });
        return updatedSale;
    },
    
    async delete(id) {
        const sale = await Sale.destroy({
            where: id,
        });
        return sale;
    },
};

module.exports = salesService;