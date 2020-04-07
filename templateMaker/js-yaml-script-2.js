const {promisify} = require("es6-promisify");
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const readFile = promisify(fs.readFile);

const defaultFilePath = '_site/_data/properties.json';
let outputFileName = 'rename-me';

async function makeTemplate () {
  const properties = await readAsJson(defaultFilePath);

  if (properties.websiteLink!=="") {
    return writeFile(properties);
  } else {
    console.log(properties.projectName);
  }
}

async function readAsJson (filePath) {
  let jsonData;
  try {
  jsonData = await readFile(filePath, 'utf8');  // jsonData equals the second argument of the original callback)
  // console.log('JSON data', jsonData);
  return JSON.parse(jsonData)[0];
} catch (err) {
  console.error('Error in readAsJson', err);
}
}

function writeFile (properties) {
  const output = computeOutput(properties);
  outputFileName = getOutputFileName(properties);
  console.log(`Writing `+outputFileName);
  return fs.writeFile(outputFileName, output, 'utf8', function (err) {
    if (err) console.log("An error occured while writing JSON Object to File.");
  });
}

function computeOutput (properties) {
  const frontmatter = yaml.safeDump(properties);
  // console.log(frontmatter);
  return `---\n${frontmatter}\n---`;
}

function getOutputFileName (properties) {
  return `_site/houses-for-sale/${properties.websiteLink}.md`
}

makeTemplate();