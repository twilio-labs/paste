import * as fs from 'fs';
import {getChangesetsFromFiles} from './utils';
// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import {DangerDSLType} from 'danger/distribution/dsl/DangerDSL';
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

/** location in the repo where the upgrade guide lives */
export const UPGRADE_GUIDE_PAGE_FILE = 'packages/paste-website/src/pages/core/upgrade-guide.mdx';

/**
 * Check if the changeset file contents include a mention of core major
 *
 * @param {string} filePath
 * @return {*}
 */
export const hasMajorCoreUpgrade = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath).toString();
  return !!fileContent.match("'@twilio-paste/core': major");
};

/**
 * Utility to return a list of changeset files that have listed Paste Core as needing a Major release
 *
 * @param {string[]} touchedChangesets
 * @return {*}  {string[]}
 */
export const getChangesetsWithMajorCoreUpgrade = (touchedChangesets: string[]): string[] => {
  const changesetsWithCoreMajor: string[] = [];
  touchedChangesets.forEach((filePath) => {
    if (hasMajorCoreUpgrade(filePath)) {
      changesetsWithCoreMajor.push(filePath);
    }
  });
  return changesetsWithCoreMajor;
};

/**
 * This is a Danger plugin that will fail if you have a changeset that sets a major version bump of @twilio-paste/core
 * but does not modify the Upgrade Guide in the website.
 */
export default () => {
  /** Modified Changeset files */
  const modifiedChangeSetModified = getChangesetsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);
  /** Was the upgrade guide included in the changelist? */
  const upgradeGuideChanged = danger.git.modified_files.includes(UPGRADE_GUIDE_PAGE_FILE);

  /*
   * Fail when user does not update the upgrade guide, but sets a major core version update
   */
  if (modifiedChangeSetModified.length > 0) {
    const changesetsWithMajorCoreUpgrade = getChangesetsWithMajorCoreUpgrade(modifiedChangeSetModified);

    if (changesetsWithMajorCoreUpgrade.length > 0 && !upgradeGuideChanged) {
      fail(
        'You have marked Paste Core as a MAJOR upgrade, but have no provided an upgrade guide. Please update https://paste.twilio.design/core/upgrade-guide to inform our users what to do about this Major update to Paste.'
      );
    }
  }
};
