import shell from 'shelljs';
import {resolve} from 'path';
import chalk from 'chalk';

export async function removeYarnLockfile() {
  // eslint-disable-next-line no-console
  console.log(chalk.red('[Monorepo] Removing yarn.lock file.'));
  shell.rm(resolve(__dirname, '../../yarn.lock'));
}
