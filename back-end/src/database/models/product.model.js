const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', 
    {
        name: DataTypes.STRING(100),        
        price: DataTypes.STRING,        
        urlImage: DataTypes.STRING(200),        
    },
    {
        tablename: 'products',
        timestamps: false, 
        underscored: true
    }
);  

Product.associate = ({ Sale, Product }) => {
    Product.hasMany(Sale, {foreignKey: "productId"})
  };
    return Product;
};
  
module.exports = Product;