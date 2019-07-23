const shell = require('shelljs');
const {resolve} = require('path');
const chalk = require('chalk');

async function removeYarnLockfile() {
  // eslint-disable-next-line no-console
  console.log(chalk.red('[Monorepo] Removing yarn.lock file.'));
  shell.rm(resolve(__dirname, '../../yarn.lock'));
}

module.exports = {
  removeYarnLockfile,
};
