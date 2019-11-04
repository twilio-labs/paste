const {join} = require('path');
const {sortBy} = require('lodash');
const {getRepoPackages} = require('../../../../tools/utils/getRepoPackages');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

const BLACKLIST = ['@twilio-paste/core'];

const CORE_BUNDLE_PATH = join(__dirname, '../');
const CORE_BUNDLE_INDEX_PATH = join(CORE_BUNDLE_PATH, 'src/index.tsx');
const CORE_BUNDLE_PACKAGE_PATH = join(CORE_BUNDLE_PATH, 'package.json');

// Given a list of packages, output the index.tsx exports string
function generateIndexFromPackageList(packageList) {
  let output = '';
  packageList.forEach(package => {
    output = `${output}export * from '${package.name}';\n`;
  });
  return output;
}

// Given a list of packages, output the package.json dependencies field
function generateDependenciesFromPackageList(packageList) {
  const dependencies = {};
  packageList.forEach(package => {
    dependencies[package.name] = `^${package.version}`;
  });
  return dependencies;
}

// Given a list of packages, output only the packages that belong in 'core'
function getAllCorePackages(packageList) {
  return packageList.filter(item => {
    const isCorePackage = item.location.includes('/paste-core/');
    const isReleased = !item.private && item.version !== '0.0.1' && item.version !== '0.0.0';
    const isNotBlacklisted = !BLACKLIST.includes(item.name);

    return isCorePackage && isReleased && isNotBlacklisted;
  });
}

// Main
(async () => {
  // Use lerna to get all packages and their version info
  const packageList = await getRepoPackages();

  // Filter to all production ready core packages
  const filteredPackageList = getAllCorePackages(packageList);
  // Sort the list so we don't get inconsistent ordering each rebuild
  const sortedPackageList = sortBy(filteredPackageList, ['name']);

  // Write into core's index file
  const indexOutput = generateIndexFromPackageList(sortedPackageList);
  writeToFile(CORE_BUNDLE_INDEX_PATH, indexOutput, {
    successMessage: `[@twilio-paste/core] Exports have been successfully updated within: ${CORE_BUNDLE_INDEX_PATH}`,
  });

  // Update package dependencies
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const packageJson = require(CORE_BUNDLE_PACKAGE_PATH);
  const newPackageJson = {...packageJson, dependencies: generateDependenciesFromPackageList(sortedPackageList)};
  writeToFile(CORE_BUNDLE_PACKAGE_PATH, newPackageJson, {
    formatJson: true,
    successMessage: `[@twilio-paste/core] Successfully updated dependencies.`,
  });
})();
