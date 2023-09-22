import path from 'path';

import camelCase from 'lodash/camelCase';
import { fileSearch } from 'search-in-file';
// eslint-disable-next-line import/no-extraneous-dependencies
import tokenJson from '@twilio-paste/design-tokens/dist/tokens.json';

import { convertFilePathsToPackageNames } from './convertFilePathsToPackageNames';
import type { TokenPackageMap } from './types';

const CORE_PACKAGES_PATH = path.join(__dirname, '../../../packages/paste-core');
const tokenNames: string[] = Object.keys(tokenJson).map(camelCase);

/**
 * Finds a given full word in all of paste's core packages (minus core-bundle)
 * Shell CLI version:
 * grep -rnw --include=\*.{ts,tsx} --exclude-dir={dist,core-bundle,stories,__tests__} 'packages/paste-core/' -e 'colorBackgroundBody'
 */
async function findFilesWithWord(word: string): Promise<string[]> {
  return fileSearch([CORE_PACKAGES_PATH], word, {
    recursive: true,
    ignoreDir: ['dist', 'core-bundle', '__tests__', 'stories', '.md', '.txt', '.json', '.js', 'types.ts'],
    words: true,
  });
}

/**
 * Returns an object that maps token name keys to a list of package names where that token is used in paste-core.
 * @returns {string[]} tokenPackageMap - {[tokenName]: packageNames[]}
 */
export async function getTokenPackageMapping(): Promise<TokenPackageMap> {
  const tokenPackageMap: TokenPackageMap = {};

  // eslint-disable-next-line no-restricted-syntax
  for (const tokenName of tokenNames) {
    // eslint-disable-next-line no-await-in-loop
    let filesPathsThatContainToken: string[] = [];
    try {
      filesPathsThatContainToken = await findFilesWithWord(tokenName);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[getTokenPackageMapping]:', error);
    }
    tokenPackageMap[tokenName] = convertFilePathsToPackageNames(filesPathsThatContainToken);
  }

  return tokenPackageMap;
}
