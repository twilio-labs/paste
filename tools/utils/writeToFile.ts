import chalk from 'chalk';
import {writeFile} from 'fs';

export function writeToFile(
  filePath: string,
  content: string | object,
  {
    successMessage,
    errorMessage,
    formatJson = false,
  }: {successMessage?: string; errorMessage?: string; formatJson?: boolean}
): void {
  const output: string | NodeJS.ArrayBufferView = formatJson
    ? JSON.stringify(content, null, 2)
    : (content as NodeJS.ArrayBufferView);

  writeFile(filePath, output, 'utf8', (error) => {
    if (error) {
      if (errorMessage != null) {
        // eslint-disable-next-line no-console
        console.log(chalk.red(errorMessage));
      }
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    if (successMessage != null) {
      // eslint-disable-next-line no-console
      console.log(chalk.green(successMessage));
    }
  });
}
