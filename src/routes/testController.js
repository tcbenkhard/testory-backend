
const express = require('express')
const router = express.Router();
const sequelize = require('../conf/database');
const {QueryTypes} = require('sequelize');

// get all latest routes
const getInstableTests = async (req, res) => {
    const query = `
        select a.name as application, c.name as class, s.name as package, count(1) as count
        from testcases c
        join testsuites s on s.id = c.testsuiteId
        join testruns r on r.id = s.testrunId
        join applications a on r.applicationId = a.id
        where c.result = 'failed'
        group by a.name, c.name, s.name
        order by count(1) desc;    
    `
    const result = await sequelize.query(query, { type: QueryTypes.SELECT });

    res.status(200).send(result);
}

router.get('/instable', getInstableTests);

module.exports = router;