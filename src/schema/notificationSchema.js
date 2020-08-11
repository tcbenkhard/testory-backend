const Joi = require('@hapi/joi');

const notificationSchema = () => {
    return Joi.object({
        target: Joi.string(),
        integrationId: Joi.number().required()
    });
}

module.exports.notificationSchema = notificationSchema;