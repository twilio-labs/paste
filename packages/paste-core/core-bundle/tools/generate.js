const {sortBy} = require('lodash');

const {CORE_BUNDLE_INDEX_PATH, CORE_BUNDLE_PACKAGE_PATH} = require('./constants');
const {
  getRepoPackages,
  writeToFile,
  generateIndexFromPackageList,
  generateUnbarreledExports,
  generateVersionedDependencyList,
  getCoreRelevantPackages,
  createRelativePackageFolders,
  createGitIgnore,
  createCodeSandboxCIjson,
} = require('./utils');

// Main
(async () => {
  // Use lerna to get all packages and their version info
  const packageList = await getRepoPackages();
  // Filter to all public packages
  const filteredPublicPackages = getCoreRelevantPackages(packageList);
  // Sort the list so we don't get inconsistent ordering each rebuild
  const sortedPackageList = sortBy(filteredPublicPackages, ['name']);
  // Filter to all production ready core packages
  const filteredCorePackageList = sortedPackageList.filter((item) => item.location.includes('/paste-core/'));

  /*
   * Write the index file
   */
  const indexOutput = generateIndexFromPackageList(filteredCorePackageList);
  writeToFile(CORE_BUNDLE_INDEX_PATH, indexOutput, {
    successMessage: `[@twilio-paste/core] Exports have been successfully updated within: ${CORE_BUNDLE_INDEX_PATH}`,
  });

  /*
   * Write each unbarreled file
   */
  generateUnbarreledExports(sortedPackageList);

  /*
   * Write each package folder and package.json for easier consumption
   */
  createRelativePackageFolders(sortedPackageList);

  /*
   * Generate a .gitignore file to prevent committing built files
   */
  createGitIgnore(sortedPackageList);

  /**
   * create the codesandbox config file for PR builds
   */
  createCodeSandboxCIjson(sortedPackageList);

  /*
   * Update package.json file
   */
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const packageJson = require(CORE_BUNDLE_PACKAGE_PATH);
  /**
   * Create a new Package.json file but keep existing version numbers, and only add new, not currently present packages
   */
  const newPackageJson = {
    ...packageJson,
    dependencies: {
      ...generateVersionedDependencyList(sortedPackageList),
      ...packageJson.dependencies,
    },
  };
  const newPackageJsonString = `${JSON.stringify(newPackageJson, null, 2)}\n`;
  writeToFile(CORE_BUNDLE_PACKAGE_PATH, newPackageJsonString, {
    successMessage: `[@twilio-paste/core] Successfully updated dependencies.`,
  });
})();
