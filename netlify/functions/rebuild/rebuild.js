const fetch = require('node-fetch');

const API_ENDPOINT = process.env.REBUILD_HOOK;

module.exports.handler = async (event) => {
  try {
    await fetch(API_ENDPOINT, { method: 'POST' });
    return { statusCode: 200 };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed triggering rebuild' }),
    };
  }
};
