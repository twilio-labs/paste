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

  // Get not-in-use tokens
  const unusedTokenList = [];
  Object.keys(resultMap).forEach(tokenName => {
    if (resultMap[tokenName].length === 0) {
      unusedTokenList.push(tokenName);
    }
  });
  // console.log("These tokens aren't used: ", unusedTokenList);

  // Get minimal components using all tokens
  // Process:
  /*
   * First split up the resultMap into two lists, one with 1 value and another for >1 value
   * loop through the one item list first adding it to the set
   * loop through the multiple item value second and check if any are on the set
   * if something is on the set, skip
   * if none are on the set, add to _BEST GUESS MAP_
   * shape: {
   *   pkg: count,
   *   pkg2: count2,
   *   ...
   * }
   * Lastly use this best guess map to add the top used package to the set
   * then regen the best guess map
   * loop until best guess is empty
   */
  const minimalUsedPackageSet = new Set();

  const ONE_ITEM_RESULT_MAP = lodash.omitBy(resultMap, value => value.length === 0 || value.length > 1);
  const MULTI_ITEM_RESULT_MAP = lodash.omitBy(resultMap, value => value.length < 2);
  // console.log('one', ONE_ITEM_RESULT_MAP);
  // console.log('multi', MULTI_ITEM_RESULT_MAP);

  Object.values(ONE_ITEM_RESULT_MAP).forEach(packageList => {
    minimalUsedPackageSet.add(packageList[0]);
  });
  // console.log('pkglist at 1', minimalUsedPackageSet);

  const bestGuessMapper = {};
  Object.values(MULTI_ITEM_RESULT_MAP).forEach(packageList => {
    let isAnyInSet = false;
    packageList.forEach(packageName => {
      if (minimalUsedPackageSet.has(packageName)) {
        isAnyInSet = true;
      }
    });
    if (!isAnyInSet) {
      packageList.forEach(packageName => {
        if (!bestGuessMapper[packageName]) {
          bestGuessMapper[packageName] = 1;
        } else {
          bestGuessMapper[packageName] += 1;
        }
      });
    }
  });

  // TODO this edge case hasnt happened yet so i stopped coding here
  // console.log('bestguess', bestGuessMapper);
  if (Object.keys(bestGuessMapper).length > 0) {
    console.log(
      "[ERROR]: BestGuessMapper isn't empty anymore. Finish coding this function to find the real minimum package list!"
    );
  }
  // console.log('minimal set of packages: ', [...usedPackageSet]);

  writeToFile(
    CACHE_FILE_PATH,
    {
      unusedTokenList,
      minimalUsedPackageSet: [...minimalUsedPackageSet],
      tokenPackageMap: resultMap,
    },
    {
      formatJson: true,
      successMessage: `[Token Usage] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
    }
  );
})();
