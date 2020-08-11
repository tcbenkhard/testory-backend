const express = require('express')
const router = express.Router();
const Testrun = require('../model/testrun');
const { applicationSchema } = require('../schema/applicationSchema');
const Application = require('../model/application');
const Integration = require('../model/integration');
const Testsuite = require('../model/testsuite');
const Testcase = require('../model/testcase');
const parseJunitResults = require('../util/junitUtil');
const { notificationSchema } = require('../schema/notificationSchema');

const create = async (req, res) => {
    const application = applicationSchema().validate(req.body);
    if(application.error) {
        return res.status(400).send(application.error);
    }
    return res.status(201).send(await Application.create(application.value));
}

const index = async (req, res) => {
    const applications = await Application.findAll(
        {
            include: {
                model: Testrun,
                limit: 10,
                separate: true,
                order: [
                    ['createdAt', 'DESC']
                ]
            },
        }
    ).catch(error => {console.log(error); res.status(500).send(error);});
    return res.status(200).send(JSON.stringify(applications));
}

const createRun = async (req, res) => {
    const application = await Application.findByPk(req.params.applicationId);
    if (!application) res.status(404).send("Application not found.");

    const files = req.files.files;
    if (!files) {
        res.status(400).send("Missing file data!")
    } else {
        const testsuites = await parseJunitResults(files);
        const testrun = await application.createTestrun({});

        for (let i = 0; i < testsuites.length; i++) {
            const suite = testsuites[i];
            const savedSuite = await testrun.createTestsuite(suite);

            const testcases = suite.testCases;
            for (let j = 0; j < testcases.length; j++) {
                testcases[j].time = testcases[j].duration;
                await savedSuite.createTestcase(testcases[j]);
            }

            testrun.updateWithSuite(savedSuite);
        }
        await testrun.save({include: {model: Testsuite, include: Testcase}});
        res.status(200).send(testrun);
    }
}

const createNotification = async (req, res) => {
    const application = await Application.findByPk(req.params.applicationId);
    if (!application) return res.status(404).send("Application not found.");

    const notification = notificationSchema().validate(req.body);
    if(notification.error) {
        return res.status(400).send(notification.error);
    }
    const validNotification = notification.value;

    console.log('IntegrationID: ', validNotification.integrationId);
    const integration = await Integration.findByPk(validNotification.integrationId);
    if(!integration) return res.status(404).send("Integration not found");

    const savedNotification = await application.createNotification(validNotification);
    return res.status(201).send(savedNotification);
}

router.get('/', index);
router.post('/:applicationId/runs', createRun);
router.post('/:applicationId/notifications', createNotification);
router.post('/', create);

module.exports = router;
