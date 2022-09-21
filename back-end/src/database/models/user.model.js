const User = (sequelize, DataTypes) => {
    const User = sequelize.define('User', 
    {
        name: DataTypes.STRING,        
        email: DataTypes.STRING,        
        password: DataTypes.STRING,        
        role: DataTypes.STRING,        
    },
    {
        tablename: 'users',
        timestamps: false, 
        underscored: true
    }
);  

//     User.associate = (models) => {
//     User.hasMany(models.sales,
//       { foreignKey: 'userId'});
//   };
    return User;
};
  
module.exports = User;