'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        fields: "user_id",
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          // Informa a tabela da referência da associação
          model: 'users',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
      sellerId: {
        type: Sequelize.INTEGER,
        fields: "seller_id",
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          // Informa a tabela da referência da associação
          model: 'users',
          // Informa a coluna da referência que é a chave correspondente
          key: 'id',
        },
      },
      totalPrice: {
        type: Sequelize.DECIMAL(9,2),
        allowNull: false,
        fields: "total_price"
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: "delivery_address"
      },
      deliveryNumber: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: "delivery_number"
      },
      saleDate: {
        type: Sequelize.DATE,
        fields: "sale_date"
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
