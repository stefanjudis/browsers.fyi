// config.js
module.exports = {
  builtAt() {
    let now = new Date();
    return new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'long',
    }).format(now);
  },
};
