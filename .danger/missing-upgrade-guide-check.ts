import * as fs from "fs";
// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import { DangerDSLType } from "danger/distribution/dsl/DangerDSL";
import { getChangesetsFromFiles } from "./utils";
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

/** location in the repo where the upgrade guide lives */
export const UPGRADE_GUIDE_PAGE_FILE = "packages/paste-website/src/pages/core/upgrade-guide.mdx";

export const FAIL_MESSAGE = `You have marked a Paste package as a MAJOR update via changeset, but have not provided a corresponding [upgrade guide](https://paste.twilio.design/core/upgrade-guide) entry.
Please update the guide to inform our users what to do in response to this major update to Paste.`;

/**
 * Predicate method to determine if changeset file content contains qualifying major update change
 *
 * @param {string} fileContent
 * @return {boolean}
 */
export const qualifyingMajorUpdate = (fileContent: string) => {
  const matches = Array.from(fileContent.matchAll(/'\@twilio-paste\/(\S+)': major/g), (m) => m[1]);

  // check if core has a major bump
  if (matches.includes("core")) return true;
  // check if other packages have major bump alongside a patch/minor core bump
  if (matches.length && fileContent.includes("@twilio-paste/core")) return false;
  // check if other packages have a major bump without any core bump
  if (matches.length) return true;

  return false;
};

/**
 * Utility to return a list of changeset files that have listed a package as needing a major update
 *
 * @param {string[]} touchedChangesets
 * @return {string[]}
 */
export const getChangesetsWithMajorQualifyingUpdate = (touchedChangesets: string[]): string[] => {
  return touchedChangesets.map((filePath) => fs.readFileSync(filePath).toString()).filter(qualifyingMajorUpdate);
};

/**
 * This is a Danger plugin that will fail if you have a changeset that sets a major version
 * update of a @twilio-paste/* package but do not also modify the Update Guide in the website.
 */
export default () => {
  const modifiedChangeSets = getChangesetsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);
  if (modifiedChangeSets.length === 0) return;

  const changesetsWithQualifyingMajorUpdate = getChangesetsWithMajorQualifyingUpdate(modifiedChangeSets);
  if (changesetsWithQualifyingMajorUpdate.length === 0) return;

  const upgradeGuideChanged = danger.git.modified_files.includes(UPGRADE_GUIDE_PAGE_FILE);
  if (upgradeGuideChanged) return;

  fail(FAIL_MESSAGE);
};
