const express = require('express')
const router = express.Router();
const {parseJunitResults} = require('../util/junitUtil');
const Application = require('../model/application');
const Testrun = require('../model/testrun');
// const Testrun = require('../model/testrun');
// const Testsuite = require('../model/testsuite');

const handleUpload = async (req, res, next) => {
  // const files = req.files.files;
  // const targetPath = req.path.substr(1);
  //
  // if(!files) {
  //   res.status(400).send("Missing file data!")
  // } if(targetPath === '') {
  //   res.status(400).send("Need atleast 1 directory in path!")
  // } else {
  //   const testsuites = await parseJunitResults(files);
  //   const run = await Testrun.create({ application: req.body.application });
  //
  //   console.log(testsuites);
  //
  //   for(let i = 0; i < testsuites.length; i++) {
  //     let testsuite = await Testsuite.create(testsuites[i]);
  //     await testsuite.setTestrun(run);
  //   }
  //
  //   return res.status(201).send(await run.reload());
  // }

    return res.status(200).send("Ok");
}

router.post('/', handleUpload);
router.post('/*', handleUpload);

module.exports = router;