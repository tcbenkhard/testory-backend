const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');
const Testrun = require('./testrun');

const Application = sequelize.define('Application', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
});

Application.hasMany(Testrun);
Testrun.belongsTo(Application);

module.exports = Application;