'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Integrations', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      token: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Integrations');
  }
};

