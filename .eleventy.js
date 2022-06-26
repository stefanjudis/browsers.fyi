module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter('isDesktop', (collection) =>
    collection.filter((item) => item.type === 'desktop')
  );
  eleventyConfig.addFilter('isMobile', (collection) =>
    collection.filter((item) => item.type === 'mobile')
  );

  eleventyConfig.addPassthroughCopy({ static: '.' });

  eleventyConfig.addShortcode('browserEntry', (browser) => {
    return `
      <div class="entry">
        <div class="entry__version"><span>${
          browser.current.version
        }</span></div>
        <img src="/logos/${browser.name.toLowerCase()}.svg" alt="${
      browser.name
    } logo" width="10" height="10">
        <a href="${browser.current.release_notes}" aria-label="${
      browser.name
    } ${browser.current.version} release notes">${browser.name} ${
      browser.current.version
    } was released ${browser.current.release_date}</a>.
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
