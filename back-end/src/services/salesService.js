const Joi = require('joi');
const { sequelize } = require('../database/models');
const { Sale, User, SalesProduct, Product } = require('../database/models');
const { readToken } = require('../utils/token');
const getTotalPrice = require('../utils/getTotalPrice');
// const saleStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

const salesService = {
    async validateSaleBody(body) {
        const schema = Joi.object({
          userId: Joi.number().required(),
          sellerId: Joi.number().required(),
          totalPrice: Joi.number().required(),
          deliveryAddress: Joi.string().required(),
          deliveryNumber: Joi.number().required(),
        });
    
        const { error } = schema.validate(body);

        if (error) { throw new Error(error.message, { cause: 400 }); }
    },

    async findAll() {
        const sales = await Sale.findAll({
            attributes: { exclude: ['sellerId'] }, 
            include: [{
                model: SalesProduct,
                as: 'products',                
                attributes: { exclude: ['saleId', 'productId'] },                            
                include: [{
                    model: Product,
                    as: 'product',
                }],
            }],
        });

        return sales;
    },
    async findBySeller(sellerId) {
        const salesByRole = await Sale.findAll({ where: { sellerId },
        attributes: { exclude: ['sellerId'] }, 
        include: [{
            model: SalesProduct,
            as: 'products',                
            attributes: { exclude: ['saleId', 'productId'] },                            
            include: [{
                model: Product,
                as: 'product',
            }],
        }] });

        return salesByRole;
    },

    async checkCustomer(id) {
        const customer = await User.findByPk(+id);
        if (!customer) throw new Error('Not Found', { cause: 404 });
        if (customer.dataValues.role !== 'customer') { 
            throw new Error('Forneça a id de um cliente!', { cause: 401 }); 
        }
    },

    async checkSeller(id) {
        const seller = await User.findByPk(+id);
        if (!seller) throw new Error('Not Found', { cause: 404 });
        if (seller.dataValues.role !== 'seller') { 
            throw new Error('Forneça a id de um vendedor!', { cause: 401 }); 
        }
    },

    async create(body) {
        const { userId, sellerId, deliveryAddress, deliveryNumber, products } = body;
        await this.checkCustomer(userId);
        await this.checkSeller(sellerId);
        const totalPrice = getTotalPrice(products);
        const createdSale = await sequelize.transaction(async (t) => {
            const sale = await Sale.create({
                userId,
                sellerId,
                totalPrice,
                deliveryAddress,
                deliveryNumber,
            }, { transaction: t });

            await SalesProduct.bulkCreate(products.map(({ productId, quantity }) => ({ 
                saleId: sale.id, productId, quantity, 
            })), { transaction: t });
            
            return sale;
        });
        
        return createdSale;
    },

    async findOne(id) {
        const sale = await Sale.findByPk(id, {
            include: [{
                model: SalesProduct,
                as: 'products',                
                attributes: { exclude: ['saleId', 'productId'] },                            
                include: [{
                    model: Product,
                    as: 'product',
                }],
            }],
        });
        if (!sale) throw new Error('Not Found', { cause: 404 });
        return sale;
    },
    
    async changeStatus(id, status, token) {
        console.log(typeof status);
        const { role } = await readToken(token);
        if (role !== 'seller') throw new Error('Unauthorized', { cause: 401 });
        const newStatus = ['Preparando', 'Em Trânsito'];
        if (status === '1' || status === '0') {
            const updatedSale = await Sale.update({ status: newStatus[+status] }, { 
                where: { id }, 
            });
            return updatedSale;
        }
    },

    async finishOrder(id, status, token) {
        const { role } = await readToken(token);
        if (role !== 'customer') throw new Error('Unauthorized', { cause: 401 });
        if (status === 'Entregue') {
            const updatedSale = await Sale.update({ status }, { 
                where: { id }, 
            });
            return updatedSale;
        }
    },
    
    async delete(id) {
        const sale = await this.findOne(id);
       
        await Sale.destroy({ where: { id } });
        return sale;
    },
};

module.exports = salesService;