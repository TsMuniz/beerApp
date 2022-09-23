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
      tablename: 'products',
      timestamps: false, 
      underscored: true
    }
);  

// Product.associate = ({ Sale, Product }) => {
//     Product.hasMany(Sale, {foreignKey: "productId"})
//   };
    return Product;
};
  
module.exports = Product;