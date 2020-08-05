const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');
const Testcase = require('./testcase');

const Testsuite = sequelize.define('Testsuite', {
    tests: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    succeeded: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    durationSec: {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false,
        defaultValue: 0
    },
    errors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    skipped: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    }
}, {});

Testsuite.hasMany(Testcase);
Testcase.belongsTo(Testsuite);

module.exports = Testsuite;