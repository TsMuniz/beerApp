const SalesProduct = (sequelize, DataTypes) => {
    const SalesProduct = sequelize.define('SalesProduct', 
    {
        saleId: DataTypes.INTEGER,        
        productId: DataTypes.INTEGER,        
        quantity: DataTypes.INTEGER,        
    },
    {
        tablename: 'salesProducts',
        timestamps: false, 
        underscored: true
    }
);  

SalesProduct.associate = ({Sale, Product}) => {
    Sale.belongsToMany(Product, {
        through: SalesProduct,
        foreignKey: 'productId', 
        otherKey: 'saleId',
    });
    Product.belongsToMany(Sale, {
        through: SalesProduct,
        foreignKey: 'saleId',  
        otherKey: 'productId',
    });
};
    return SalesProduct;
};
  
module.exports = SalesProduct;