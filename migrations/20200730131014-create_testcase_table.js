'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Testcases', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      testsuiteId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'testsuites',
          },
          key: 'id'
        }
      },
      name: {
        type: Sequelize.DataTypes.STRING,
            allowNull: false
      },
      time: {
        type: Sequelize.DataTypes.DECIMAL(10,3),
            allowNull: false,
            defaultValue: 0
      },
      result: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      message: {
        type: Sequelize.DataTypes.STRING
      },
      createdAt: Sequelize.DataTypes.DATE,
      updatedAt: Sequelize.DataTypes.DATE,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Testcases');
  }
};
