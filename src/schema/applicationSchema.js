const Joi = require('@hapi/joi');

const applicationSchema = () => {
    return Joi.object({
        name: Joi.string().min(2).max(200).required()
    });
}

module.exports.applicationSchema = applicationSchema;