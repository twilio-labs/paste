import * as fs from 'fs';
// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import { DangerDSLType } from 'danger/distribution/dsl/DangerDSL';
import type { PackageShape } from '../tools/utils/getRepoPackages';
import {
  getChangesetsFromFiles,
  getPackagePaths,
  getPublicPackageFilesFromFiles,
  getPublicPackages,
  getUnpublishedPackageNames,
} from './utils';
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

const difference = require('lodash/difference');

/**
 * Utility to return the difference between the packages we know were changed in the PR based on files, and the packages
 * that are listed in the accompanying changesets in the PRs.
 *
 * @param {string[]} changesets
 * @param {string[]} packagesWithChanges
 * @return {*}
 */
export const getMissingPackagesFromChangesets = (changesets: string[], packagesWithChanges: string[]) => {
  const packagesInChangesets: string[] = [];
  changesets.forEach((filePath) => {
    const fileContent = fs.readFileSync(filePath).toString();
    packagesWithChanges.forEach((packageName) => {
      if (fileContent.match(packageName)) {
        packagesInChangesets.push(packageName);
      }
    });
  });
  return difference(packagesWithChanges, packagesInChangesets);
};

/**
 * This is a Danger JS plugin that will fail the build if there are any missing changesets
 * for a modified package.
 */
export default (packageList: PackageShape[]) => {
  const publicPackages = getPublicPackages(packageList);
  const publicPackagePaths = getPackagePaths(publicPackages);

  const changeList = [...danger.git.modified_files, ...danger.git.created_files];

  /** Modified files that belong to public packages */
  const modifiedPublicPackageFiles = getPublicPackageFilesFromFiles(changeList, publicPackagePaths);
  /** List of public packages that have changes in src files, that will need to be published */
  const publicPackagesWithUnpublishedSourceChanges = getUnpublishedPackageNames(
    modifiedPublicPackageFiles,
    publicPackages,
  );

  /** Modified Changeset files */
  const modifiedChangeSetFiles = getChangesetsFromFiles(changeList);

  /**
   * Fail when a published package is changed with no changeset
   */
  if (modifiedPublicPackageFiles.length > 0) {
    const missingPackages = getMissingPackagesFromChangesets(
      modifiedChangeSetFiles,
      publicPackagesWithUnpublishedSourceChanges,
    );
    const idea = 'edit an existing changeset or run `yarn changeset` to create one';
    if (missingPackages.length > 0) {
      missingPackages.forEach((packageName: string) => {
        fail(`Looks like ${packageName} was not included in a changeset - *${idea}*`);
      });
    }
  }
};
