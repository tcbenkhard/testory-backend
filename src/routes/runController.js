const sequelize = require('../conf/database');

const express = require('express')
const router = express.Router();
const Testrun = require('../model/testrun');

// get all latest routes
const getLatestRuns = async (req, res) => {
    const query = 'select * from Testruns r1 where id = (select max(id) from Testruns r2 where r2.applicationId = r1.applicationId)';
    const result = await sequelize.query(query, {model: Testrun});
    res.status(200).send(result);
}



router.get('/latest', getLatestRuns);

module.exports = router;