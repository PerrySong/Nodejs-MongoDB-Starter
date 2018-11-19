
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  });
  User.associate = function(models) {
    // associations can be defined here
    // User.hasOne(models.Github, {
    //   foreignKey: 'userId',
    //   as: 'github',
    // })
    // User.hasOne(models.Linkedin, {
    //   foreignKey: 'userId',
    //   as: 'linkedin',// Now I will get User.getProfile and User.setProfile
    // })
  };
  return User;
};