const {join} = require('path');
const {runCmdJson} = require('./runCmd');

const CLI_PATH = join(__dirname, '../../node_modules/lerna/cli.js');

let repoPackages = null;

/* 
 * Returned Shape
 [{ 
    name: '@twilio-paste/icons',
    version: '0.2.0',
    private: false,
    location: '/.../paste/packages/paste-icons' 
 }, ...]
*/
async function getRepoPackages() {
  // Return cached value if available
  if (repoPackages != null) {
    return repoPackages;
  }

  repoPackages = await runCmdJson(CLI_PATH, ['la', '--json']);
  return repoPackages;
}

module.exports = {
  getRepoPackages,
};
