const Product = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', 
    {
        name: DataTypes.STRING,        
        price: DataTypes.STRING,        
        urlImage: DataTypes.STRING,        
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