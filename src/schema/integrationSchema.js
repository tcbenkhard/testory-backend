const Joi = require('@hapi/joi');

const integrationSchema = () => {
    return Joi.object({
        name: Joi.string().min(2).max(200).required(),
        type: Joi.string().valid('slack').required(),
        token: Joi.string().min(2).required(),
    });
}

module.exports.integrationSchema = integrationSchema;