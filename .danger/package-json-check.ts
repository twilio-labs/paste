// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
import { DangerDSLType } from "danger/distribution/dsl/DangerDSL";
import { getPackJsonsFromFiles } from "./utils";
declare const danger: DangerDSLType;
export declare function warn(message: string): void;

/**
 * This is a Danger plugin that checks that you have updated the lockfile if you have
 * made changes to a package.json file.
 */
export default () => {
  // package.json related files
  const packageJSONsChanged = getPackJsonsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);
  const lockfileChanged = danger.git.modified_files.includes("yarn.lock");

  /**
   * Warn when user potentially forgets to update lockfile
   */
  if (packageJSONsChanged.length > 0 && !lockfileChanged) {
    const message = "Changes were made to package.json, but not to yarn.lock";
    const idea = "Perhaps you need to run `yarn install`?";
    warn(`${message} - <i>${idea}</i>`);
  }
};
