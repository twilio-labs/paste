import * as fs from "fs";
// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import { DangerDSLType } from "danger/distribution/dsl/DangerDSL";
import { getChangesetsFromFiles } from "./utils";
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

const IGNORE_LIST = [
  "@twilio-paste/core",
  "@twilio-paste/icons",
  "@twilio-paste/website",
  "@twilio-paste/codemods",
  "@twilio-paste/nextjs-template",
  "@twilio-paste/theme-designer",
  "@twilio-paste/color-contrast-utils",
  "@twilio-paste/token-contrast-checker",
];

/**
 * Utility to check the contents of a changeset file for core and icons package and determine whether that changeset
 * should be flagged as missing core
 *
 * @param {string} filePath
 * @return {*}
 */
export const shouldFlagChangeset = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath).toString();

  return !IGNORE_LIST.some((ignorePath) => fileContent.match(ignorePath));
};

/**
 * Utility that returns a list of Changeset files that incorrectly not list core as being affected
 *
 * @param {string[]} touchedChangesets
 * @return {*}  {string[]}
 */
export const getChangesetsNotTaggingCore = (touchedChangesets: string[]): string[] => {
  const changesetsNotTaggingCore: string[] = [];
  touchedChangesets.forEach((filePath) => {
    if (shouldFlagChangeset(filePath)) {
      changesetsNotTaggingCore.push(filePath);
    }
  });
  return changesetsNotTaggingCore;
};

/**
 * This is a Danger plugin that will fail if you have not tagged your changeset with @twilio-paste/core
 */
export default () => {
  /** Modified Changeset files */
  const modifiedChangeSetModified = getChangesetsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);

  /*
   * Fail when user forgets to add core to changeset
   */
  if (modifiedChangeSetModified.length > 0) {
    const changesetsNotTaggingCore = getChangesetsNotTaggingCore(modifiedChangeSetModified);

    if (changesetsNotTaggingCore.length > 0) {
      changesetsNotTaggingCore.forEach((filePath: string) => {
        fail(`Changeset ${filePath} does not mention a change to Paste Core. Please include core with this changeset.`);
      });
    }
  }
};
