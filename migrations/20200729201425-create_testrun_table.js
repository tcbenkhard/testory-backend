'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Testruns', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      applicationId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'applications',
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
    await queryInterface.dropTable('Testruns');
  }
};
