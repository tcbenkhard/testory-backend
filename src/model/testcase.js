const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');

const Testcase = sequelize.define('Testcase', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    time: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false,
        defaultValue: 0
    },
    result: {
        type: DataTypes.STRING,
        allowNull: false
    },
    message: {
        type: DataTypes.STRING
    }
}, {});

module.exports = Testcase;