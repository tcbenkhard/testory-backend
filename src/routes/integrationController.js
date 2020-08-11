const express = require('express')
const router = express.Router();
const { integrationSchema } = require('../schema/integrationSchema');
const Integration = require('../model/integration');

// get all latest routes
const createIntegration = async (req, res) => {
    const integration = integrationSchema().validate(req.body);
    if(integration.error) {
        return res.status(400).send(integration.error);
    }
    res.status(200).send(await Integration.create(integration.value));
}

const listIntegrations = async (req, res) => {
    return res.status(200).send(await Integration.findAll());
}

router.post('/', createIntegration);
router.get('/', listIntegrations);

module.exports = router;