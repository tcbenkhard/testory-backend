const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');
const Testsuite = require('./testsuite');

const Testrun = sequelize.define('Testrun', {
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
    errors: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    skipped: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
}, {});

Testrun.hasMany(Testsuite);
Testsuite.belongsTo(Testrun);

Testrun.prototype.updateWithSuite = function (suite) {
    this.tests += suite.tests;
    this.succeeded += suite.succeeded;
    this.errors += suite.errors;
    this.skipped += suite.skipped;
}

module.exports = Testrun;