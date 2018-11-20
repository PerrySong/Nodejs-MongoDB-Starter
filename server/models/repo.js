module.exports = (sequelize, DataTypes) => {
  const Repo = sequelize.define('Repo', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    urls: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    techs: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    hightlights: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
  });
  Repo.associate = function(models) {
    Repo.belongsTo(models.Github, {
      foreignKey: 'githubId',
      onDelete: 'CASCADE',
    });
  };
  return Repo;
};