const path = require('path');
const {readdirAsync, removeTsxExtension, maybeHandleError} = require('../utils');
const {REACT_PATH, BLOCKLIST_FILES} = require('../constants');
const {rollupListTemplate} = require('../templates/rollupListTemplate');
const {jsonTemplate} = require('../templates/jsonTemplate');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

async function listIconsAction() {
  let destinationFiles;
  try {
    destinationFiles = await readdirAsync(REACT_PATH);
    destinationFiles = destinationFiles.filter(fileName => !BLOCKLIST_FILES.includes(fileName)).map(removeTsxExtension);
  } catch (error) {
    maybeHandleError('Error occured while generating icon list!', error);
  }

  // Write the icons list to JSON
  writeToFile(path.join(__dirname, './../../json/icons.json'), jsonTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update raw JSON file!`,
  });

  // Write the cache file that rollup uses to generate bundles
  writeToFile(path.join(__dirname, './../../rollup.icon-list.js'), rollupListTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update 'rollupIconList' cache file!`,
  });
}

module.exports = {
  listIconsAction,
};
