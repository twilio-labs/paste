import fs from "fs";
import { DangerDSLType } from "danger/distribution/dsl/DangerDSL";
import { getPackJsonsFromFiles } from "./utils";

// you kind of have to treat Danger plugins as global?
// https://danger.systems/js/usage/extending-danger.html#writing-your-plugin
declare const danger: DangerDSLType;
export declare function fail(message: string): void;

/**
 * Finds a list of external dependencies that are unpinned, whilst filtering out internal packages.
 *
 * @param {Record<string, string>} deps
 * @return {*}  {string[]}
 */
export const getUnpinnedExternalDeps = (deps: Record<string, string>): string[] => {
  if (deps) {
    return (
      Object.keys(deps)
        // we don't want internal packages
        .filter((dep) => !dep.includes("@twilio-paste"))
        // we want anything that has a ^
        .filter((dep) => deps[dep].startsWith("^"))
    );
  } else {
    return [];
  }
};

/**
 * Return a flat list of external dependencies from a list of package.json files, that we not pinned
 *
 * @param {string[]} pkgJSONFiles
 * @return {*}  {string[]}
 */
export const getUnPinnedExternalDepsFromPackageJSONFiles = (
  pkgJSONFiles: string[],
): Array<{ dep: string; name: string }> => {
  const unPinnedExternalDeps: Array<{ dep: string; name: string }> = [];
  pkgJSONFiles.forEach((pkgJSON) => {
    const fileContent = fs.readFileSync(pkgJSON).toString();
    const { name, dependencies } = JSON.parse(fileContent);
    getUnpinnedExternalDeps(dependencies).forEach((dep) => unPinnedExternalDeps.push({ dep, name }));
  });
  return unPinnedExternalDeps;
};

/**
 * This is a Danger plugin that checks that you have pinned any external deps in packages.
 */
export default () => {
  // package.json related files
  const packageJSONsChanged = getPackJsonsFromFiles([...danger.git.modified_files, ...danger.git.created_files]);

  /**
   * Warn when user forgets to pin an external dep
   */
  if (packageJSONsChanged.length > 0) {
    const unpinnedExternalDeps = getUnPinnedExternalDepsFromPackageJSONFiles(packageJSONsChanged);

    if (unpinnedExternalDeps.length > 0) {
      let locationString = ``;
      unpinnedExternalDeps.forEach(({ dep, name }) => {
        locationString += `* ${name} - ${dep}\n`;
      });
      fail(
        `There are some package.json files in this PR that contain unpinned external package libraries. Please pin your external package libraries by removing the ^ from the beginning of the version number. See:\n\n${locationString}`,
      );
    }
  }
};
