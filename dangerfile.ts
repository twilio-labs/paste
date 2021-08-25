// https://danger.systems/js/reference.html
import type {PackageShape} from './.danger/types';
import packageJsonCheck from './.danger/package-json-check';
import missingChangesetsCheck from './.danger/missing-changesets-check';
import changesetsThatNeedCoreCheck from './.danger/changesets-that-need-core-check';

// because it's not typescript
const {getRepoPackages} = require('./tools/utils/getRepoPackages');

// eslint-disable-next-line import/no-default-export
export default async (): Promise<void> => {
  // Get all the repo packages here and share it all around as it's async
  const packageList: PackageShape[] = await getRepoPackages();

  // Check package json file
  packageJsonCheck();

  // Check for packages that have missing changeset
  missingChangesetsCheck(packageList);

  // Check changesets that need core
  changesetsThatNeedCoreCheck();
};
