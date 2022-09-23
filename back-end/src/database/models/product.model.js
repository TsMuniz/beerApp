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
    return Product;
};
  
module.exports = Product;