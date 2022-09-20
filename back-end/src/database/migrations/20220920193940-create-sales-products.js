'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      saleId: {        
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: "sales",
          key: "id"
        },
        fields: "sale_id"
      },
      productId: {        
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: "products",
          key: "id"
        },
        fields: "product_id"
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
   });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  }
};
