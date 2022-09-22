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
        allowNull: false,
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
        allowNull: false,
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
        type: Sequelize.STRING(100),
        allowNull: false,
        fields: "delivery_address"
      },
      deliveryNumber: {
        type: Sequelize.STRING(50),
        allowNull: false,
        fields: "delivery_number"
      },
      saleDate: {
        type: Sequelize.DATE,
        allowNull: false,
        fields: "sale_date"
      },
      status: {
        type: Sequelize.STRING(50),
        allowNull: false,
        defaultValue:'Pendente'
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};
