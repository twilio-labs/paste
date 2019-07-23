const shell = require('shelljs');
const {resolve} = require('path');
const chalk = require('chalk');

const TSCONFIG_BUILDINFO_REGEX = /tsconfig(\.build)?\.tsbuildinfo$/;
const PACKAGES_DIR = resolve(__dirname, '../../packages');

async function removeTsconfigBuildFiles() {
  // Make an array of all files within the 'packages/' folder
  // https://github.com/shelljs/shelljs#findpath--path-
  const allPackageFiles = shell.find(PACKAGES_DIR);

  // Get all the tsconfig build files
  const tsconfigBuildInfoFiles = allPackageFiles.filter(pathString => pathString.match(TSCONFIG_BUILDINFO_REGEX));

  if (tsconfigBuildInfoFiles.length === 0) {
    // eslint-disable-next-line no-console
    console.log(`[Typescript] No tsconfig.build.tsbuildinfo files to remove.`);
    return;
  }

  shell.rm(tsconfigBuildInfoFiles);
  // eslint-disable-next-line no-console
  console.log(chalk.red(`[Typescript] Removed ${tsconfigBuildInfoFiles.length} tsconfig.build.tsbuildinfo files.`));
}

module.exports = {
  removeTsconfigBuildFiles,
};
