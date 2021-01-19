const path = require('path');
const {readdirAsync, removeTsxExtension, maybeHandleError} = require('../utils');
const {REACT_PATH, BLOCKLIST_FILES} = require('../constants');
const {buildListTemplate} = require('../templates/buildListTemplate');
const {jsonTemplate} = require('../templates/jsonTemplate');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

async function listIconsAction() {
  let destinationFiles;
  try {
    destinationFiles = await readdirAsync(REACT_PATH);
    destinationFiles = destinationFiles
      .filter((fileName) => !BLOCKLIST_FILES.includes(fileName))
      .map(removeTsxExtension);
  } catch (error) {
    maybeHandleError('Error occured while generating icon list!', error);
  }

  // Write the icons list to JSON
  writeToFile(path.join(__dirname, './../../json/icons.json'), jsonTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update raw JSON file!`,
  });

  // Write the cache file that esbuild uses to generate bundles
  writeToFile(path.join(__dirname, './../../build.icon-list.js'), buildListTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update 'buildIconList' cache file!`,
  });
}

module.exports = {
  listIconsAction,
};
