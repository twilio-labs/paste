/**
 * Takes a list of file paths and converts them to a list of deduped package names
 * @param {string[]} filePaths - Files found to have contained tokens
 * @returns {string[]} packageNames - The package names of the files passed in, deduped.
 */
export function convertFilePathsToPackageNames(filePaths: string[]): string[] {
  const packageNames = filePaths.map((filePath) => {
    const componentPath = filePath.slice(filePath.indexOf("/paste-core/"));
    const componentName = componentPath.split("/")[3];
    return `@twilio-paste/${componentName}`;
  });
  return [...new Set(packageNames)];
}
