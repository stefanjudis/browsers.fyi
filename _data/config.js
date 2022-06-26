// config.js
module.exports = {
  builtAt() {
    let now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
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
