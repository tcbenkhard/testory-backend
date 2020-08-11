'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Notifications', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      target: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
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
      integrationId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'integrations',
          },
          key: 'id'
        }
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Notifications');
  }
};

