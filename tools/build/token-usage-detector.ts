/* eslint-disable import/no-mutable-exports */
import path from 'path';

import { getMinimalPackageList } from '../utils/token-usage/getMinimalPackageList';
import { getTokenPackageMapping } from '../utils/token-usage/getTokenPackageMapping';
import { getUnusedTokenList } from '../utils/token-usage/getUnusedTokenList';
import type { TokenPackageMap } from '../utils/token-usage/types';
import { writeToFile } from '../utils/writeToFile';

const CACHE_FILE_PATH = path.join(__dirname, '../.cache/token-usage.json');

let tokenPackageMap: TokenPackageMap = {};
let unusedTokenList = [''];
let minimalUsedPackageList = [''];

(async () => {
  try {
    tokenPackageMap = await getTokenPackageMapping();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('[token-usage-detector]:', error);
  }
  unusedTokenList = getUnusedTokenList(tokenPackageMap);
  minimalUsedPackageList = getMinimalPackageList(tokenPackageMap);

  writeToFile(
    CACHE_FILE_PATH,
    {
      unusedTokenList,
      minimalUsedPackageList,
      tokenPackageMap,
    },
    {
      formatJson: true,
      successMessage: `[Token Usage] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
      errorMessage: `[Token Usage] Couldn't generate the cache to ${CACHE_FILE_PATH}.`,
    },
  );
})();

export { tokenPackageMap, unusedTokenList, minimalUsedPackageList };
/* eslint-enable import/no-mutable-exports */
