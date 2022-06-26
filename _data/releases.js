const { browsers } = require('../_data/config');

module.exports = async function releases() {
  const browserData = await Promise.all(
    browsers.map((browser) =>
      fetch(
        `https://raw.githubusercontent.com/mdn/browser-compat-data/main/browsers/${browser}.json`,
        {}
      )
        .then((res) => res.json())
        .then((json) => ({ key: browser, ...json.browsers[browser] }))
    )
  );

  const releases = browserData
    .reduce((acc, cur) => {
      Object.entries(cur.releases).forEach(([version, release]) => {
        acc.push({
          key: cur.key,
          name: cur.name,
          version,
          date: new Date(release.release_date),
          ...release,
        });
      });
      return acc;
    }, [])
    .filter((release) => !!release.release_notes && !!release.release_date)
    .sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
  console.log(releases);
  return releases;
};
