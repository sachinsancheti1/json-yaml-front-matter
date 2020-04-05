<h1>Create yaml files from a json array for Eleventy</h1>
<p>This repo helps you create markdown/nunjuncks template files with relevant headers and other data for use in the paging layouts and include templates</p>
<h2>Instructions</h2>
<ol>
	<li>Clone repo</li>
	<li>Run `cd js-yaml-front-matter` or bash into the repo downloaded</li>
	<li>Run `npm install` to install all node modules</li>
	<li>Ensure the `_site/_data` being the data source is in place</li>
	<li>Then run `node templateMaker/js-yaml-script.js` to generate the files under the folder here `houses-for-sale`. I have made the run only for the first element in the array - see line number 7 in `templateMaker/js-yaml-script.js`</li>
	<li>Run the build command `eleventy --serve` if you have installed eleventy globally to convert the files into a `dist` folder</li>
</ol>