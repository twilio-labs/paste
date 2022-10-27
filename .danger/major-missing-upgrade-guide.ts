import * as fs from 'fs';
import {getChangesetsFromFiles} from './utils';
// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import {DangerDSLType} from 'danger/distribution/dsl/DangerDSL';
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

/** location in the repo where the upgrade guide lives */
export const UPGRADE_GUIDE_PAGE_FILE = 'packages/paste-website/src/pages/core/upgrade-guide.mdx';

export const FAIL_MESSAGE = `You have marked a Paste package as a MAJOR update via changeset, but have not provided a corresponding [upgrade guide](https://paste.twilio.design/core/upgrade-guide) entry.
Please update the guide to inform our users what to do in response to this major update to Paste.`;

/**
 * Check if the changeset file contents include a mention of a package major update
 *
 * @param {string} filePath
 * @return {*}
 */
export const hasMajorUpdate = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath).toString();
  return /\@twilio-paste\/\S+: major/.test(fileContent);
};

/**
 * Utility to return a list of changeset files that have listed a package as needing a major update
 *
 * @param {string[]} touchedChangesets
 * @return {*}  {string[]}
 */
export const getChangesetsWithMajorUpdate = (touchedChangesets: string[]): string[] => {
  return touchedChangesets.filter(hasMajorUpdate);
};

/**
 * This is a Danger plugin that will fail if you have a changeset that sets a major version
 * update of a @twilio-paste/* package but do not also modify the Update Guide in the website.
 */
export default () => {
  const modifiedChangeSets = getChangesetsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);
  if (modifiedChangeSets.length === 0) return;

  const changesetsWithMajorUpdate = getChangesetsWithMajorUpdate(modifiedChangeSets);
  if (changesetsWithMajorUpdate.length === 0) return;

  const upgradeGuideChanged = danger.git.modified_files.includes(UPGRADE_GUIDE_PAGE_FILE);
  if (upgradeGuideChanged) return;

  fail(FAIL_MESSAGE);
};
