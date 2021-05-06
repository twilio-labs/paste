// https://danger.systems/js/reference.html
import {danger, warn} from 'danger';

// Warn when user potentially forgets to update lockfile
const packageChanged = danger.git.modified_files.includes('package.json');
const lockfileChanged = danger.git.modified_files.includes('yarn.lock');
if (packageChanged && !lockfileChanged) {
  const message = 'Changes were made to package.json, but not to yarn.lock';
  const idea = 'Perhaps you need to run `yarn install`?';
  warn(`${message} - <i>${idea}</i>`);
}

if (danger.git.modified_files.length > 0) {
  /*
   * Warn when user forgets to add core to changeset
   */
  const changesetFiles = danger.git.created_files.filter((filepath) => filepath.includes('.changeset'));
  if (changesetFiles.length > 0) {
    changesetFiles.forEach((filepath) => {
      const filecontent = danger.github.utils.fileContents(filepath);
    });
  }
}
