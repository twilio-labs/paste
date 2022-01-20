module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  batch: {
    name: process.env.APPLITOOLS_BATCH_NAME,
    id: process.env.APPLITOOLS_BATCH_ID,
  },
  appName: '[DSYS] - Paste Website',
  browser: {
    width: 1920,
    height: 1440,
    name: 'chrome',
  },
};
