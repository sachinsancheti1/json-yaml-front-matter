const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// read template and files
var jsonData = fs.readFileSync('_site/_data/properties.json');
var jsonObj = JSON.parse(jsonData)[0]; // capturing only the first element. I am sure there is a way to do this using a foreach loop.
let yamlStr = yaml.safeDump(jsonObj);
// console.log(yamlStr);

if(jsonObj.message == undefined){
	var slug = jsonObj.websiteLink;
	var filename = slug+".md";
	let yamlStr1 = "---\n"+yamlStr+"\n---";
	let output = yamlStr1;

// write new file
console.log(filename);
fs.writeFile('_site/houses-for-sale/'+filename,output , 'utf8', function (err) {
	if (err) {
		console.log("An error occured while writing JSON Object to File.");
		return console.log(err);
	}
	// console.log("file has been saved.");
});
} else {
	console.log(jsonObj.message);
}



// Usage: node templateMaker/js-yaml-script.js