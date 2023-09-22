import isEmpty from 'lodash/isEmpty';
import omitBy from 'lodash/omitBy';

import type { BestGuessMapper, PackageList, TokenPackageMap } from './types';

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
export function getMinimalPackageList(tokenPackageMap: TokenPackageMap): string[] {
  const minimalUsedPackageSet: Set<string> = new Set();

  // Step 1
  const ONE_ITEM_RESULT_MAP: TokenPackageMap = omitBy(
    tokenPackageMap,
    (value: PackageList) => value.length === 0 || value.length > 1,
  );
  const MULTI_ITEM_RESULT_MAP: TokenPackageMap = omitBy(tokenPackageMap, (value: PackageList) => value.length < 2);

  // Step 2
  Object.values(ONE_ITEM_RESULT_MAP).forEach((packageList: string[]) => {
    minimalUsedPackageSet.add(packageList[0]);
  });

  let bestGuessMapper: BestGuessMapper = {};
  do {
    bestGuessMapper = {};
    // Step 3
    // eslint-disable-next-line no-loop-func
    Object.values(MULTI_ITEM_RESULT_MAP).forEach((packageList) => {
      const isAnyInSet = packageList.some((packageName) => {
        return minimalUsedPackageSet.has(packageName);
      });
      /*
       * If the token has a packageList with none in the set
       * Add or increment the count in bestGuessMapper
       * Step 3.1 and 3.2
       */
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
    if (!isEmpty(bestGuessMapper)) {
      const sortedEntriesByVal = Object.entries(bestGuessMapper).sort(([, v1], [, v2]) => v2 - v1);
      /**
       * first zero for first array entry which is sorted to the largest value
       * second zero for the array index of the key (i.e.: ["@twilio-core/button", 5]), which is the package name
       */
      const mostUsedPackage = sortedEntriesByVal[0][0];
      minimalUsedPackageSet.add(mostUsedPackage);
    }
    // Step 5
  } while (!isEmpty(bestGuessMapper));

  return [...minimalUsedPackageSet];
}
