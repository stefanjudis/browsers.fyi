const pluginRss = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('isDesktop', (collection) =>
    collection.filter((item) => item.type === 'desktop')
  );
  eleventyConfig.addFilter('isMobile', (collection) =>
    collection.filter((item) => item.type === 'mobile')
  );
  eleventyConfig.addFilter('mapToCurrent', (collection) =>
    collection.reduce((acc, cur) => {
      acc[cur.key] = { name: cur.name, ...cur.current };
      return acc;
    }, {})
  );

  eleventyConfig.addPassthroughCopy({ static: '.' });

  eleventyConfig.addPlugin(pluginRss);

  eleventyConfig.addShortcode('browserEntry', (browser) => {
    return `
      <div class="entry">
        <img src="/logos/${browser.key}.svg" alt="${browser.name} logo" width="10" height="10">
        <div class="entry__version"><span>${browser.current.version}</span></div>
        <a href="${browser.current.release_notes}" aria-label="${browser.name} ${browser.current.version} release notes">${browser.name} ${browser.current.version} was released ${browser.current.release_date}</a>.
      </div>
    `;
  });

  return {
    dir: {
      input: '.',
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
  };
};
