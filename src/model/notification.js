const { DataTypes } = require('sequelize');
const sequelize = require('../conf/database');
// const Application = require('../model/application');
// const Integration = require('../model/integration');

const Notification = sequelize.define('Notification', {
    target: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {});

module.exports = Notification;