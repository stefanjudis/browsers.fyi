// config.js
module.exports = {
  builtAt() {
    let now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(now);
  },
  browsers: [
    'chrome',
    'edge',
    'safari',
    'firefox',
    'chrome_android',
    'safari_ios',
    'firefox_android',
    'samsunginternet_android',
  ],
};
