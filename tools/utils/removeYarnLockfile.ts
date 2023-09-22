import { resolve } from 'path';

import chalk from 'chalk';
import shell from 'shelljs';

export async function removeYarnLockfile(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(chalk.red('[Monorepo] Removing yarn.lock file.'));
  shell.rm(resolve(__dirname, '../../yarn.lock'));
}
