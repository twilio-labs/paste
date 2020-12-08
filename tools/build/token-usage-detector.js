const path = require('path');
const lodash = require('lodash');
const {fileSearch} = require('search-in-file');
const tokenJson = require('@twilio-paste/design-tokens/dist/tokens.json');
const PastePackages = require('../.cache/packages.json');
const {writeToFile} = require('../utils/writeToFile');

const CACHE_FILE_PATH = path.join(__dirname, '../.cache/token-usage.json');
const CORE_PACKAGES_PATH = path.join(__dirname, '../../packages/paste-core');
const tokenNames = Object.keys(tokenJson).map(lodash.camelCase);

// Finds a given full word in all of paste's core packages (minus core-bundle)
// Shell CLI version
// // grep -rnw --include=\*.{ts,tsx} --exclude-dir={dist,core-bundle,stories,__tests__} 'packages/paste-core/' -e 'colorBackgroundBody'
async function findFilesWithWord(word) {
  return fileSearch([CORE_PACKAGES_PATH], word, {
    recursive: true,
    ignoreDir: ['dist', 'core-bundle', '__tests__', 'stories', '.md', '.txt', '.json', '.js', 'types.ts'],
    words: true,
  });
}

// Takes a list of file paths and converts them to a list of package names
function convertPathsToPackageNames(fileList) {
  // Using a set for its unique item property
  const packageNames = new Set();

  // For the list of files, get the package name
  fileList.map(filePath => {
    const packageObj = PastePackages.find(({location}) => filePath.includes(location));
    packageNames.add(packageObj.name);
  });

  // Return array of package names
  return [...packageNames];
}

(async () => {
  const resultMap = {};
  // eslint-disable-next-line no-restricted-syntax
  for (const tokenName of tokenNames) {
    // eslint-disable-next-line no-await-in-loop
    const fileList = await findFilesWithWord(tokenName);
    resultMap[tokenName] = convertPathsToPackageNames(fileList);
  }

  writeToFile(CACHE_FILE_PATH, resultMap, {
    formatJson: true,
    successMessage: `[Token Usage] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
  });
})();
