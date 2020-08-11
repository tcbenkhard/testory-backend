const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');
const Notification = require('./notification');

const Integration = sequelize.define('Integration', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {});

Integration.hasMany(Notification);

module.exports = Integration;