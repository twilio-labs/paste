import { resolve } from 'path';

import shell from 'shelljs';
import chalk from 'chalk';

export async function removeYarnLockfile(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(chalk.red('[Monorepo] Removing yarn.lock file.'));
  shell.rm(resolve(__dirname, '../../yarn.lock'));
}
