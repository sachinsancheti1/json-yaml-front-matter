const eleventyNavigationPlugin = require('@11ty/eleventy-navigation')
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const readingTime = require('eleventy-plugin-reading-time');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(readingTime);
  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy('./_site/images');
  eleventyConfig.addPassthroughCopy('./_site/css');
  eleventyConfig.addPassthroughCopy('./_site/js');
  eleventyConfig.addPassthroughCopy('./_site/fonts');
  eleventyConfig.addPassthroughCopy('./_site/slick');
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('page', 'page.njk');
  eleventyConfig.addLayoutAlias('properties', 'properties.njk');
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addFilter('propAddress', ojbAddress => {
    return ojbAddress.join(', ');
  })

  eleventyConfig.addCollection('tagList', require("./_site/utils/filters/getTagList.js"));

  eleventyConfig.addCollection('articles', function(collection){
    return collection.getFilteredByGlob('_site/posts/*.md').reverse();
  })

  eleventyConfig.addFilter('limit', (array, qty) => (qty < 0 ? array.slice(qty): array.slice(0, qty)))

  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      input: '_site',
      data: '_data',
      includes: '_includes',
      layouts: '_includes/layouts',
      output: 'dist'
    }
  }
}
