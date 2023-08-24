import type {PackageShape} from '../tools/utils/getRepoPackages';

/**
 * Returns a list of public packages by filtering out the private ones
 *
 * @param {PackageShape[]} packageList
 */
export const getPublicPackages = (packageList: PackageShape[]) => packageList.filter((p) => p.private === false);

/**
 * Returns a file path relative to the root of the project from a full machine file path
 * by only keeping the last part of the path including `packages`
 *
 * @param {string} location
 * @return {*}  {string}
 */
export const getRepoPackagePath = (location: string): string =>
  location.slice(location.indexOf('packages'), location.length);

/**
 * Returns file paths relative to the root of the project from a list of packages
 *
 * @param {PackageShape[]} packages
 * @return {*}  {string[]}
 */
export const getPackagePaths = (packages: PackageShape[]): string[] =>
  packages.map(({location}) => getRepoPackagePath(location));

/**
 *  From a list of files, return only the files that are located in
 * the folders of public packages
 *
 * @param {string[]} fileList
 * @param {string[]} publicPackagePaths
 */
export const getPublicPackageFilesFromFiles = (fileList: string[], publicPackagePaths: string[]) =>
  fileList.filter((filePath) => {
    return publicPackagePaths.filter((path) => filePath.includes(path)).length > 0;
  });

/**
 * Return the name of the package a file belongs to
 *
 * @param {string} filePath
 * @param {PackageShape[]} publicPackages
 * @return {*}  {string}
 */
export const getPackageNameFromPath = (filePath: string, publicPackages: PackageShape[]): string => {
  const packageNames: string[] = [];
  publicPackages.forEach((p) => {
    if (filePath.includes(`${getRepoPackagePath(p.location)}/`)) {
      packageNames.push(p.name);
    }
  });
  return packageNames[0];
};

/**
 * From a list of files return the names of the packages that would need to be published
 * to npm based on what those files were.
 *
 * @param {string[]} touchedFiles
 * @param {PackageShape[]} publicPackages
 * @return {*}  {string[]}
 */
export const getUnpublishedPackageNames = (touchedFiles: string[], publicPackages: PackageShape[]): string[] => {
  const uniquePackages: Set<string> = new Set();
  touchedFiles.forEach((filePath) => {
    const packageName = getPackageNameFromPath(filePath, publicPackages);

    // all packages are uniform, except for design tokens. Source files are in the src directory.
    // any changes to tokens, formatters or types in design tokens also need to be released
    if (
      filePath.includes('/src/') ||
      filePath.includes('/paste-design-tokens/tokens/') ||
      filePath.includes('/paste-design-tokens/formatters/') ||
      filePath.includes('/paste-design-tokens/types/')
    ) {
      uniquePackages.add(packageName);
    }
  });
  return [...uniquePackages];
};

/**
 * Return a list of changeset files from a changelist
 *
 * @param {string[]} fileList
 */
export const getChangesetsFromFiles = (fileList: string[]) =>
  fileList.filter((filePath) => filePath.includes('changeset') && filePath.includes('.md'));

export const IGNORE_LIST = [
  'paste-website',
  'paste-nextjs-template',
  'paste-theme-designer',
  'paste-color-contrast-utils',
  'paste-token-contrast-checker',
];

/**
 * Return a list of package json files from a changelist
 *
 * @param {string[]} fileList
 */
export const getPackJsonsFromFiles = (fileList: string[]) =>
  fileList.filter((filePath) => {
    return (
      filePath !== 'package.json' && // Ignore root package.json
      filePath.includes('package.json') && // Only include package.json files
      !IGNORE_LIST.some((ignorePath) => filePath.includes(ignorePath)) // Unless they are in the ignore list
    );
  });
