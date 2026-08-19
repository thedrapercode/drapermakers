module.exports = function (eleventyConfig) {
  // Static assets copied as-is
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/admin/config.yml");

  // Build Logs: one page per costume, newest year first
  eleventyConfig.addCollection("buildLogs", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/build-logs/*.md").sort((a, b) => {
      return (b.data.year || 0) - (a.data.year || 0);
    });
  });

  // Upcoming Conventions: soonest first, not rendered as their own pages
  eleventyConfig.addCollection("conventions", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/conventions/*.md").sort((a, b) => {
      return new Date(a.data.date) - new Date(b.data.date);
    });
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
};
