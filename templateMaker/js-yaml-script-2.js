const {promisify} = require("es6-promisify");
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const readFile = promisify(fs.readFile);

const defaultFilePath = '_site/_data/properties.json';
let outputFileName = 'rename-me';

async function makeTemplate () {
  const properties = await readAsJson(defaultFilePath);

  if (properties.websiteLink!="") {
    return writeFile(properties);
  } else {
    console.log(properties.projectName);
  }
}

async function readAsJson (filePath) {
  const jsonData = fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) console.log('Error in readAsJson');
  });
  return = JSON.parse(jsonData)[0];  // Yes this broke. Not sure if any of my syntax is even right
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
  console.log(frontmatter);
  return `---\n${frontmatter}\n---`;
}

function getOutputFileName (properties) {
  return `_site/houses-for-sale/${properties.websiteLink}.md`
}

makeTemplate();