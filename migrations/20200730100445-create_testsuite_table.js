'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Testsuites', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      testrunId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'testruns',
          },
          key: 'id'
        }
      },
      tests: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      succeeded: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      durationSec: {
        type: Sequelize.DataTypes.DECIMAL(10,3),
        allowNull: false,
        defaultValue: 0
      },
      errors: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      skipped: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Testsuites');
  }
};
