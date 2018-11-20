module.exports = (sequelize, DataTypes) => {
  const Linkedin = sequelize.define('Linkedin', {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
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
    
  },
  {
    // disable the modification of tablenames; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    // if you don't want that, set the following
    freezeTableName: true,
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