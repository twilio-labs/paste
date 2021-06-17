const chalk = require('chalk');
const {writeFile} = require('fs');

function writeToFile(filePath, content, {successMessage, errorMessage, formatJson = false}) {
  const output = formatJson ? JSON.stringify(content, null, 2) + '\n' : content;

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

module.exports = {writeToFile};
