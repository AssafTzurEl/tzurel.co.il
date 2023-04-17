const Image = require("@11ty/eleventy-img");

// ToDo: Continue using this tutorial:
// https://www.aleksandrhovhannisyan.com/blog/eleventy-image-plugin/
// The Image plugin page: https://www.11ty.dev/docs/plugins/image/

module.exports = function(eleventyConfig) {
    // Output directory: _site
  
    // Copy `images/` to `_site/images`
    eleventyConfig.addPassthroughCopy("images");
};