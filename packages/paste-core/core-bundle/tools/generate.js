const path = require('path');
const {join} = require('path');
const {sortBy} = require('lodash');
const {getRepoPackages} = require('../../../../tools/utils/getRepoPackages');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

const BLOCKLIST = ['@twilio-paste/core', '@twilio-paste/typography'];

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
function generateVersionedDependencyList(packageList) {
  const dependencies = {};
  packageList.forEach(package => {
    dependencies[package.name] = `^${package.version}`;
  });
  return dependencies;
}

// Given a list of packages, output the package.json dev dependencies field
function generatelinkedDependencyList(packageList) {
  const dependencies = {};
  packageList.forEach(package => {
    dependencies[package.name] = `link:${path.relative(process.cwd(), package.location)}`;
  });
  return dependencies;
}

// Given a list of all repo packages, return only public and not blocked packages.
function getAllPackages(packageList) {
  return packageList.filter(item => {
    const isReleased = !item.private;
    const isNotBlocked = !BLOCKLIST.includes(item.name);
    return isReleased && isNotBlocked;
  });
}

// Main
(async () => {
  // Use lerna to get all packages and their version info
  const packageList = await getRepoPackages();

  // Filter to all production ready packages
  const filteredPublicPackages = getAllPackages(packageList);
  // Sort the list so we don't get inconsistent ordering each rebuild
  const sortedPackageList = sortBy(filteredPublicPackages, ['name']);

  // Filter to all production ready core packages
  const filteredCorePackageList = sortedPackageList.filter(item => item.location.includes('/paste-core/'));

  // Write into core's index file
  const indexOutput = generateIndexFromPackageList(filteredCorePackageList);
  writeToFile(CORE_BUNDLE_INDEX_PATH, indexOutput, {
    successMessage: `[@twilio-paste/core] Exports have been successfully updated within: ${CORE_BUNDLE_INDEX_PATH}`,
  });

  // Update package dependencies
  // eslint-disable-next-line global-require, import/no-dynamic-require
  const packageJson = require(CORE_BUNDLE_PACKAGE_PATH);
  const newPackageJson = {
    ...packageJson,
    dependencies: generateVersionedDependencyList(filteredCorePackageList),
    devDependencies: generatelinkedDependencyList(sortedPackageList),
  };
  // formatted with a new ending line for prettier
  const newPackageJsonString = `${JSON.stringify(newPackageJson, null, 2)}\n`;
  writeToFile(CORE_BUNDLE_PACKAGE_PATH, newPackageJsonString, {
    successMessage: `[@twilio-paste/core] Successfully updated dependencies.`,
  });
})();
