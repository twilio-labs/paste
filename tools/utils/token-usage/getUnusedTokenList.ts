import type { TokenPackageMap } from './types';

/**
 * Returns a list of our unused tokens from within paste-core.
 * @param {Object} tokenPackageMap - A token to package mapping
 * @returns {string[]} unusedTokenList - a list of all the unused token names in paste-core.
 */
export function getUnusedTokenList(tokenPackageMap: TokenPackageMap): string[] {
  const unusedTokenList = [];
  for (const [key, value] of Object.entries(tokenPackageMap)) {
    if (value.length === 0) {
      unusedTokenList.push(key);
    }
  }
  return unusedTokenList;
}
