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
        as: "products",
        through: SalesProduct,
        foreignKey: 'saleId', 
        otherKey: 'productId',
    });
    Product.belongsToMany(Sale, {
        as: "sales",
        through: SalesProduct,
        foreignKey: 'productId',  
        otherKey: 'saleId',
    });
};
    return SalesProduct;
};
  
module.exports = SalesProduct;