const fs = require('fs');
const chalk = require('chalk');

function mkdir(folderPath, {callback, successMessage, errorMessage}) {
  fs.mkdir(folderPath, {recursive: true}, error => {
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
    callback && callback();
  });
}

module.exports = {mkdir};
