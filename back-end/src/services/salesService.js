const Joi = require('joi');
const { sequelize } = require('../database/models');
const { Sale, User, Product, SalesProduct } = require('../database/models');

const saleStatus = ['Pendente', 'Preparando', 'Em Trânsito', 'Entregue'];

const salesService = {
    async validateSaleBody(body) {
        const schema = Joi.object({
          userId: Joi.number().required(),
          sellerId: Joi.number().required(),
          totalPrice: Joi.number().required(),
          deliveryAddress: Joi.string().required(),
          deliveryNumber: Joi.number().required(),
          status: Joi.string().allow(...saleStatus).required(),
        });
    
        const { error } = schema.validate(body);

        if (error) { throw new Error(error.message, { cause: 400 }); }
    },

    async findAll() {
        const sales = await Sale.findAll({ include: Product });
        return sales;
    },

    async checkCustomer(id) {
        const customer = await User.findByPk(+id);
        if (!customer) throw new Error('Not Found', { cause: 404 });
        console.log(customer);
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

    // async create(body) {
    //     const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = body;
    //     this.checkCustomer(userId);
    //     this.checkSeller(sellerId);
    //     const createdSale = await Sale.create({
    //             userId: Number(userId),
    //             sellerId: Number(sellerId),
    //             totalPrice: Number(totalPrice), 
    //             deliveryAddress,
    //             deliveryNumber, 
    //         });
            
    //     const product = await Sale.findByPk(createdSale.dataValues.id);    
    //     products.map(({ saleId, productId, quantity }) => product.setProduct({ 
            //      saleId: Number(saleId),
            //      productId: Number(productId),
            //    quantity: Number(quantity),
    //         }));   
    //     return createdSale;
    // },

    create: async (body) => {
        const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, products } = body;

        const createdPost = await sequelize.transaction(async (t) => {
          const post = await Sale.create({
            userId, sellerId, totalPrice, deliveryAddress, deliveryNumber,
          }, { transaction: t });

          await SalesProduct.bulkCreate(products.map(({  productId, quantity }) => (
            { 
                productId: Number(productId),
                quantity: Number(quantity),
            }
          )), { transaction: t });
          return post;
        });
        return createdPost;
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