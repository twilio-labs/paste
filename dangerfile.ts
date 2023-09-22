import changesetsThatNeedCoreCheck from './.danger/changesets-that-need-core-check';
import missingChangesetsCheck from './.danger/missing-changesets-check';
import missingUpgradeGuide from './.danger/missing-upgrade-guide-check';
// https://danger.systems/js/reference.html
import packageJsonCheck from './.danger/package-json-check';
import pinExternalDeps from './.danger/pin-external-deps';
import websitePageVrtCheck from './.danger/website-page-vrt-check';
import { getRepoPackages } from './tools/utils/getRepoPackages';
import type { PackageShape } from './tools/utils/getRepoPackages';

// eslint-disable-next-line import/no-default-export
export default async (): Promise<void> => {
  // Get all the repo packages here and share it all around as it's async
  const packageList: PackageShape[] | null = await getRepoPackages();

  // Check package json file
  packageJsonCheck();

  // Check for packages that have missing changeset
  if (packageList) missingChangesetsCheck(packageList);

  // Check changesets that need core
  changesetsThatNeedCoreCheck();

  // Check that new external deps are pinned
  pinExternalDeps();

  missingUpgradeGuide();

  websitePageVrtCheck();
};
