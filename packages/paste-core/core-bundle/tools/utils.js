const fs = require('fs');
const path = require('path');
const {
  getPackageName,
  getUnbarreledFileFullPath,
  BLOCKLIST,
  BASE_CODESANDBOX_CI,
  PACKAGES_ROOT_PATH,
  CODESANDBOX_CI_JSON_PATH,
} = require('./constants');
const {getRepoPackages} = require('../../../../tools/utils/getRepoPackages');
const {writeToFile} = require('../../../../tools/utils/writeToFile');
const {mkdir} = require('../../../../tools/utils/mkdir');

// Given a list of packages, output the index.tsx exports string
function generateIndexFromPackageList(packageList) {
  let output = '';
  packageList.forEach((package) => {
    output = `${output}export * from '${package.name}';\n`;
  });
  return output;
}

// See: https://stackoverflow.com/questions/58527907/barrel-file-and-tree-shaking
function generateUnbarreledExports(packageList) {
  packageList.forEach((package) => {
    writeToFile(getUnbarreledFileFullPath(package), `export * from '${package.name}';\n`, {
      errorMessage: `[@twilio-paste/core] ${package.name} export file was not generated.`,
    });
  });
}

// Given a list of packages, output the package.json dependencies field
function generateVersionedDependencyList(packageList) {
  const dependencies = {};
  packageList.forEach((package) => {
    dependencies[package.name] = `^${package.version}`;
  });
  return dependencies;
}

// Given a list of all repo packages, return only public and not blocked packages.
function getCoreRelevantPackages(packageList) {
  return packageList.filter((item) => {
    const isReleased = !item.private;
    const isNotBlocked = !BLOCKLIST.includes(item.name);
    return isReleased && isNotBlocked;
  });
}

function getAllJsFiles(dirPath) {
  const files = fs.readdirSync(dirPath);
  const arrayOfFiles = [];

  files.forEach((file) => {
    arrayOfFiles.push(path.join(dirPath, '/', file));
  });
  return arrayOfFiles.filter((file) => file.match(/\.js$/));
}

function createRelativePackageFolders(packageList) {
  packageList.forEach((package) => {
    const packageName = getPackageName(package);
    const relativePackagePath = path.join(__dirname, '../', packageName);

    // Make the folder
    mkdir(relativePackagePath, {
      callback: () => {
        // Make its package.json file
        const packageJsonPath = path.join(relativePackagePath, 'package.json');
        const packageJsonContents = {
          // This name really doesn't matter, it just can't match an existing package
          // or Lerna and TS gets confused as there are multiple references.
          // Package names must be globally unique
          name: package.name.replace('@twilio-paste/', '@twilio-paste-core/'),
          version: '0.0.0',
          private: true,
          sideEffects: false,
          main: `../dist/${packageName}.js`,
          types: `../dist/${packageName}.d.ts`,
        };

        writeToFile(packageJsonPath, packageJsonContents, {
          formatJson: true,
        });
      },
    });
  });
}

function createGitIgnore(packageList) {
  const ignoreList = packageList.map((package) => `/${getPackageName(package)}`);

  const output = `# Automatically generated from "yarn generate-packages"
/dist
${ignoreList.join('\n')}`;

  writeToFile(path.join(__dirname, '../.gitignore'), output, {
    successMessage: 'Successfully generated core-bundle .gitignore file',
    errorMessage: 'Failed to generate code-bundle .gitignore file',
  });
}

function createCodeSandboxCIjson(packageList) {
  // create a list of package locations based on the repo root, not including machine file structure
  const packageLocationList = packageList.map((package) => package.location.replace(PACKAGES_ROOT_PATH, ''));
  const newCodeSandboxConfig = {
    ...BASE_CODESANDBOX_CI,
    packages: [...BASE_CODESANDBOX_CI.packages, ...packageLocationList],
  };
  writeToFile(CODESANDBOX_CI_JSON_PATH, newCodeSandboxConfig, {
    formatJson: true,
    successMessage: 'Successfully generated codesandbox ci.json file',
    errorMessage: 'Failed to generate codesandbox ci.json file',
  });
}

module.exports = {
  getRepoPackages,
  writeToFile,
  generateIndexFromPackageList,
  generateUnbarreledExports,
  generateVersionedDependencyList,
  getCoreRelevantPackages,
  getAllJsFiles,
  createRelativePackageFolders,
  createGitIgnore,
  createCodeSandboxCIjson,
};
