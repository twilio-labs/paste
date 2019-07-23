const {runCmdJson} = require('./runCmd');

let repoPackages = null;

/* 
 * Returned Shape
 [{ 
    name: '@paste/icons',
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

  repoPackages = await runCmdJson('./node_modules/lerna/cli.js', ['la', '--json']);
  return repoPackages;
}

module.exports = {
  getRepoPackages,
};
