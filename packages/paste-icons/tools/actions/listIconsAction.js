const path = require('path');
const {readdirAsync, removeTsxExtension, maybeHandleError} = require('../utils');
const {REACT_PATH, BLACKLIST_FILES} = require('../constants');
const {storybookListTemplate} = require('../templates/storybookListTemplate');
const {rollupListTemplate} = require('../templates/rollupListTemplate');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

async function listIconsAction() {
  let destinationFiles;
  try {
    destinationFiles = await readdirAsync(REACT_PATH);
    destinationFiles = destinationFiles.filter(fileName => !BLACKLIST_FILES.includes(fileName)).map(removeTsxExtension);
  } catch (error) {
    maybeHandleError('Error occured while generating icon list!', error);
  }

  // Write the icons list displayed on Storybook
  writeToFile(path.join(__dirname, './../../__IconList.tsx'), storybookListTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update '__IconList' storybook file!`,
  });

  // Write the cache file that rollup uses to generate bundles
  writeToFile(path.join(__dirname, './../.cache/rollupIconList.js'), rollupListTemplate(destinationFiles), 'utf8', {
    errorMessage: `Couldn't update 'rollupIconList' cache file!`,
  });
}

module.exports = {
  listIconsAction,
};
