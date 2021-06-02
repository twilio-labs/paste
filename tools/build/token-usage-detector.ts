import path from 'path';
import {getTokenPackageMapping} from '../utils/token-usage/getTokenPackageMapping';
import {getUnusedTokenList} from '../utils/token-usage/getUnusedTokenList';
import {getMinimalPackageList} from '../utils/token-usage/getMinimalPackageList';
import {writeToFile} from '../utils/writeToFile';
import type {TokenPackageMap} from '../utils/token-usage/types';

const CACHE_FILE_PATH = path.join(__dirname, '../.cache/token-usage.json');

let tokenPackageMap: TokenPackageMap = {};
let unusedTokenList;
let minimalUsedPackageList;

(async () => {
  try {
    tokenPackageMap = await getTokenPackageMapping();
  } catch (e) {
    console.error('[token-usage-detector]: ', e);
  }
  unusedTokenList = getUnusedTokenList(tokenPackageMap);
  minimalUsedPackageList = getMinimalPackageList(tokenPackageMap);

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
      errorMessage: `[Token Usage] Couldn't generate the cache to ${CACHE_FILE_PATH}.`,
    }
  );
})();

export {tokenPackageMap, unusedTokenList, minimalUsedPackageList};
