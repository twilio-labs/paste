const {resolve} = require('path');
const {getRepoPackages} = require('./getRepoPackages');
const {writeToFile} = require('./writeToFile');

const CACHE_FILE_PATH = resolve(__dirname, '../.cache/packages.json');

/* This generates a list of all paste packages in the monorepo and saves the information
 * into ../.cache/packages.json.  This file is a cache for other commands to not
 * repeatedly run this.
 */
async function updatePackageCache() {
  const packagesList = await getRepoPackages();

  writeToFile(CACHE_FILE_PATH, packagesList, {
    formatJson: true,
    successMessage: `[Monorepo cache] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
  });

  return packagesList;
}

module.exports = {updatePackageCache};
