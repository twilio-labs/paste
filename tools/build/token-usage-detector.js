const path = require('path');
const lodash = require('lodash');
const {fileSearch} = require('search-in-file');
const tokenJson = require('@twilio-paste/design-tokens/dist/tokens.json');
const {writeToFile} = require('../utils/writeToFile');

const CACHE_FILE_PATH = path.join(__dirname, '../.cache/token-usage.json');
const CORE_PACKAGES_PATH = path.join(__dirname, '../../packages/paste-core');
const tokenNames = Object.keys(tokenJson).map(lodash.camelCase);

/**
 * Finds a given full word in all of paste's core packages (minus core-bundle)
 * Shell CLI version:
 * grep -rnw --include=\*.{ts,tsx} --exclude-dir={dist,core-bundle,stories,__tests__} 'packages/paste-core/' -e 'colorBackgroundBody'
 */
async function findFilesWithWord(word) {
  return fileSearch([CORE_PACKAGES_PATH], word, {
    recursive: true,
    ignoreDir: ['dist', 'core-bundle', '__tests__', 'stories', '.md', '.txt', '.json', '.js', 'types.ts'],
    words: true,
  });
}

/**
 * Takes a list of file paths and converts them to a list of deduped package names
 * @param {string[]} filePaths - Files found to have contained tokens
 * @returns {string[]} packageNames - The package names of the files passed in, deduped.
 */
function convertFilePathsToPackageNames(filePaths) {
  const packageNames = filePaths.map((filePath) => {
    const componentPath = filePath.slice(filePath.indexOf('/paste-core/'));
    const componentName = componentPath.split('/')[3];
    return `@twilio-paste/${componentName}`;
  });
  return [...new Set(packageNames)];
}

/**
 * Returns an object that maps token name keys to a list of package names where that token is used in paste-core.
 * @returns {string[]} tokenPackageMap - {[tokenName]: packageNames[]}
 */
async function getTokenPackageMapping() {
  const tokenPackageMap = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const tokenName of tokenNames) {
    // eslint-disable-next-line no-await-in-loop
    const filesPathsThatContainToken = await findFilesWithWord(tokenName);
    tokenPackageMap[tokenName] = convertFilePathsToPackageNames(filesPathsThatContainToken);
  }

  return tokenPackageMap;
}

/**
 * Returns a list of our unused tokens from within paste-core.
 * @param {Object} tokenPackageMap - A token to package mapping
 * @returns {string[]} unusedTokenList - a list of all the unused token names in paste-core.
 */
function getUnusedTokenList(tokenPackageMap) {
  const unusedTokenList = [];
  for (const [key, value] of Object.entries(tokenPackageMap)) {
    if (value.length === 0) {
      unusedTokenList.push(key);
    }
  }
  return unusedTokenList;
}

/**
 * Get minimal components using all tokens
 * Algorithm:
 *
 * 1- Split up the resultMap into two lists, one with 1 item in the array and another for >1 items
 * 2- loop through the one item list, adding it to a set of package names.
 * 3- loop through the multiple item list and check if any are on the set. Remember, this mapping is
 *    from 1 tokenName to n packages, so we just need 1 of the packages to be listed.
 *  3.1- if one packageName is already on the set, skip this token. It's covered.
 *  3.2- if none of the packageNames are on the set already, add it to a _BEST GUESS MAP_
 *    shape: {
 *     pkg: count,
 *     pkg2: count2,
 *     ...
 *   }
 * 4- Lastly use this best guess map to add the top used package to the set
 * 5- Repeat step 3 to 4 until best guess map is empty
 */
function getMinimalPackageList(tokenPackageMap) {
  const minimalUsedPackageSet = new Set();

  // Step 1
  const ONE_ITEM_RESULT_MAP = lodash.omitBy(tokenPackageMap, (value) => value.length === 0 || value.length > 1);
  const MULTI_ITEM_RESULT_MAP = lodash.omitBy(tokenPackageMap, (value) => value.length < 2);

  // Step 2
  Object.values(ONE_ITEM_RESULT_MAP).forEach((packageList) => {
    minimalUsedPackageSet.add(packageList[0]);
  });

  let bestGuessMapper = {};
  do {
    bestGuessMapper = {};
    // Step 3
    Object.values(MULTI_ITEM_RESULT_MAP).forEach((packageList) => {
      const isAnyInSet = packageList.some((packageName) => {
        return minimalUsedPackageSet.has(packageName);
      });
      // If the token has a packageList with none in the set
      // Add or increment the count in bestGuessMapper
      // Step 3.1 and 3.2
      if (!isAnyInSet) {
        packageList.forEach((packageName) => {
          if (!bestGuessMapper[packageName]) {
            bestGuessMapper[packageName] = 1;
          } else {
            bestGuessMapper[packageName] += 1;
          }
        });
      }
    });

    // Step 4
    if (!lodash.isEmpty(bestGuessMapper)) {
      const sortedEntriesByVal = Object.entries(bestGuessMapper).sort(([, v1], [, v2]) => v2 - v1);
      // first zero for first array entry which is sorted to the largest value
      // second zero for the array index of the key (i.e.: ["@twilio-core/button", 5]), which is the package name
      const mostUsedPackage = sortedEntriesByVal[0][0];
      minimalUsedPackageSet.add(mostUsedPackage);
    }
    // Step 5
  } while (!lodash.isEmpty(bestGuessMapper));

  return [...minimalUsedPackageSet];
}

(async () => {
  const tokenPackageMap = await getTokenPackageMapping();
  const unusedTokenList = getUnusedTokenList(tokenPackageMap);
  const minimalUsedPackageList = getMinimalPackageList(tokenPackageMap);

  writeToFile(
    CACHE_FILE_PATH,
    {
      unusedTokenList,
      minimalUsedPackageList,
      tokenPackageMap: tokenPackageMap,
    },
    {
      formatJson: true,
      successMessage: `[Token Usage] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
    }
  );
})();
