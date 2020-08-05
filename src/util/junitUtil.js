const Parser = require("junitxml-to-javascript");

const parseJunitResult = async (file) => {
    console.log(`Parsing file ${file.name}`);
    let buffer = Buffer.from(file.data);
    const report = await new Parser({customTag: "GENERAL1"})
        .parseXMLString(buffer);
    return report;
}

const parseJunitResults = async (files) => {
    let testSuites = [];
    for(let i = 0; i < files.length; i++) {
        const report = await parseJunitResult(files[i]);
        testSuites.push(...report.testsuites);
    }

    return testSuites;
}

module.exports = parseJunitResults;