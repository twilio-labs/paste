// https://github.com/applitools/eyes.sdk.javascript1/tree/master/packages/eyes-storybook#advanced-configuration
module.exports = {
  serverUrl: 'https://twilioeyesapi.applitools.com',
  batchId: process.env.GITHUB_HEAD_SHA,
  exitcode: 0,
  concurrency: 90,
  browser: [
    {width: 1024, height: 768, name: 'firefox'},
    {width: 1024, height: 768, name: 'chrome'},
    {width: 1024, height: 768, name: 'ie11'},
  ],
};
