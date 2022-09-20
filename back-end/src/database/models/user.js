const User = (sequelize, DataTypes) => {
    const User = sequelize.define(
        'User', 
    {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
          role: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        tablename: 'users',
        timestamps: false
    }
);  

    User.associate = (models) => {
    User.hasMany(models.sales,
      { foreignKey: 'userId'});
  };
    return User;
};
  
module.exports = User;