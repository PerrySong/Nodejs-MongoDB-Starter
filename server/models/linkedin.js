module.exports = (sequelize, DataTypes) => {
  var Linkedin = sequelize.define('Linkedin', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
    },
    access: {
      type: DataTypes.STRING,
    }
  });
  Linkedin.associate = function(models) {
    Linkedin.belongsTo(models.User, {
      foreignKey: 'userId',
      //If we delete a user, its profile should be deleted as well
      //cascade the delete action
      onDelete: 'CASCADE',
    });
  };
  return Linkedin;
};