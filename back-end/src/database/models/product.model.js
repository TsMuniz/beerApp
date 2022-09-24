const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', 
    {       
      name: DataTypes.STRING(100),        
      price: DataTypes.DECIMAL(4,2),        
      urlImage: {
        type: DataTypes.STRING(200),
        field: 'url_image'
      },      
    },
    {
      tableName: 'products',
      timestamps: false, 
      underscored: true
    }
);  

<<<<<<< HEAD
Product.associate = ({ Sale, Product }) => {
    Product.hasMany(Sale, {foreignKey: "productId"})
=======
  Product.associate = ({ SalesProduct, Product }) => {
    Product.hasMany(SalesProduct, { foreignKey: "productId" })
>>>>>>> 70b3675aeaf14c643027430d34d732a6e06af723
  };
    return Product;
};
  
module.exports = Product;