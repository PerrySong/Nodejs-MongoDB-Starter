'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Linkedin', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
      },
      access: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'Users',
          key: 'id',
          as: 'userId',
        },
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Linkedin');
  }
};