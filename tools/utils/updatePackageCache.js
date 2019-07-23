const fs = require('fs');
const chalk = require('chalk');
const {resolve} = require('path');
const {getRepoPackages} = require('./getRepoPackages');

const CACHE_FILE_PATH = resolve(__dirname, '../.cache/packages.json');

/* This generates a list of all paste packages in the monorepo and saves the information
 * into ../.cache/packages.json.  This file is a cache for other commands to not
 * repeatedly run this.
 */
async function updatePackageCache() {
  const packagesList = await getRepoPackages();

  fs.writeFile(CACHE_FILE_PATH, JSON.stringify(packagesList, null, 2), error => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    // eslint-disable-next-line no-console
    console.log(chalk.green(`[Monorepo cache] Cache was successfully saved to: ${CACHE_FILE_PATH}`));
  });

  return packagesList;
}

module.exports = {updatePackageCache};
