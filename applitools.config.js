module.exports = {
  serverUrl: 'https://twilioeyesapi.applitools.com',
  batchId: process.env.CIRCLE_SHA1,
  batchName: `Paste ${process.env.CIRCLE_BRANCH}`,
  branchName: `${process.env.CIRCLE_BRANCH}`,
  baselineBranchName: 'master',
  parentBranchName: 'master',
  showLogs: true,
};
