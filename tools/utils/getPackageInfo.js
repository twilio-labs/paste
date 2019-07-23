const {runCmdJson} = require('./runCmd');

const packagesInfo = {};

async function getPackageInfo(packageName) {
  // Return cached value if available
  if (packagesInfo[packageName] != null) {
    return packagesInfo[packageName];
  }

  // Set to cache and return
  packagesInfo[packageName] = await runCmdJson('yarn', ['info', packageName, '--json']);
  return packagesInfo[packageName];
}

module.exports = {
  getPackageInfo,
};
