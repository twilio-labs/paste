/**
 * Updates tsconfig.build.json with paste peerDependencies
 * Updates devDependencies with paste peerDependencies
 */
const fs = require('fs');
const chalk = require('chalk');
const lodash = require('lodash');
const {resolve, relative} = require('path');
const {getRepoPackages} = require('./getRepoPackages');
const {sortObjectByKey} = require('./sortObjectByKey');

const isPasteDependency = packageName => packageName.includes('@paste/');
const getPasteDependencyList = dependencyObject => Object.keys(dependencyObject).filter(isPasteDependency);

async function updateTsconfigFile(path, referencesList = [], packagesList) {
  const TSCONFIG_FILE_PATH = resolve(path, 'tsconfig.build.json');
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const tsconfigData = require(TSCONFIG_FILE_PATH);

  const references = referencesList.map(referenceName => {
    const dep = packagesList.find(({name}) => name === referenceName);
    if (dep == null) return null;
    return {path: relative(path, dep.location)};
  });
  // eslint-disable-next-line no-console
  console.log(`Generated References: ${JSON.stringify(references)}`);

  // write it back to the file
  tsconfigData.references = references;
  fs.writeFile(TSCONFIG_FILE_PATH, JSON.stringify(tsconfigData, null, 2), error => {
    if (error != null) {
      // eslint-disable-next-line no-console
      console.log(chalk.red('[TSConfig] Writing Tsconfig file failed'));
      throw error;
    }
  });
}

// TODO
async function updatePackageDevDependencies(packageJsonPath, pastePeerDeps = [], packageJson) {
  // Let's start by assuming we need to put all pastePeerDeps into devDeps
  let missingDevDeps = pastePeerDeps;

  // To avoid needless writes, check if any pastePeerDeps are already in devDeps
  if (packageJson.devDependencies != null) {
    const pasteDevDependencies = getPasteDependencyList(packageJson.devDependencies);

    missingDevDeps = lodash.difference(pastePeerDeps, pasteDevDependencies);

    if (missingDevDeps.length === 0) {
      // Do nothing, all pastePeerDeps are in devDeps
      return;
    }
  }

  // Move all packages from 'difference' into devDeps.
  const newDevDeps = packageJson.devDependencies || {};
  missingDevDeps.forEach(dep => {
    newDevDeps[dep] = packageJson.peerDependencies[dep];
  });

  const newPackageJson = {
    ...packageJson,
    devDependencies: sortObjectByKey(newDevDeps),
  };

  fs.writeFile(packageJsonPath, JSON.stringify(newPackageJson, null, 2), error => {
    if (error) {
      // eslint-disable-next-line no-console
      console.log(error);
      return false;
    }
    // eslint-disable-next-line no-console
    console.log(chalk.green(`[${packageJson.name}] Successfully added ${missingDevDeps}`));
  });
}

async function updatePackageReferences() {
  const packagesList = await getRepoPackages();

  packagesList.forEach(async package => {
    const PACKAGE_JSON_PATH = resolve(package.location, 'package.json');
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const packageJsonData = require(PACKAGE_JSON_PATH);

    // paste repos shouldnt be dependencies
    if (packageJsonData.dependencies != null) {
      const pasteDependencies = getPasteDependencyList(packageJsonData.dependencies);
      if (pasteDependencies > 0) {
        // eslint-disable-next-line no-console
        console.log(
          chalk.red.bold.underline(`[Error] ${packageJsonData.name}: do not declare @paste packages as dependencies!`)
        );
      }
    }

    if (packageJsonData.peerDependencies != null) {
      const pastePeerDependencies = getPasteDependencyList(packageJsonData.peerDependencies);

      // eslint-disable-next-line no-console
      console.log(chalk.yellow.underline(`Package ${package.name}`));
      if (pastePeerDependencies.length === 0) {
        // eslint-disable-next-line no-console
        console.log(`Does not contain paste peerDependencies.`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Contains the following paste peerDependencies: ${pastePeerDependencies}`);

        await updateTsconfigFile(package.location, pastePeerDependencies, packagesList);
        await updatePackageDevDependencies(PACKAGE_JSON_PATH, pastePeerDependencies, packageJsonData);
      }
    }
  });

  return packagesList;
}

module.exports = {updatePackageReferences};
