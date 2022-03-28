const {runCmdJson} = require('./runCmd');

const LERNA_INDEX_PATH = require.resolve('lerna');
const LERNA_CLI_PATH = LERNA_INDEX_PATH.replace('index.js', 'cli.js');

let repoPackages = null;

/*
 * Returned Shape
 [{
    name: '@twilio-paste/icons',
    version: '0.2.0',
    private: false,
    location: '/.../paste/packages/icons'
 }, ...]
*/
async function getRepoPackages() {
  // Return cached value if available
  if (repoPackages != null) {
    return repoPackages;
  }

  repoPackages = await runCmdJson(LERNA_CLI_PATH, ['la', '--json']);
  return repoPackages;
}

module.exports = {
  getRepoPackages,
};
