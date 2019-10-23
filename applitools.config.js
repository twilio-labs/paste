module.exports = {
  serverUrl: 'https://twilioeyesapi.applitools.com',
  batchId: process.env.CIRCLE_SHA1,
  batchName: `Paste ${process.env.CIRCLE_BRANCH}`,
  exitcode: 0,
};
