import chalk from "chalk";
import shell from "shelljs";

export async function removeNodeModules(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(chalk.red("[Monorepo] Removing node_modules folders recursively:"));
  // TODO windows support
  shell.exec(`find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' +;`, { async: true });
}
