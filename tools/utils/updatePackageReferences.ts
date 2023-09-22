/**
 * Updates tsconfig.build.json with paste peerDependencies
 * Updates devDependencies with paste peerDependencies
 */

import { existsSync } from 'fs';
import { resolve, relative } from 'path';

import chalk from 'chalk';
import difference from 'lodash/difference';

import { getRepoPackages } from './getRepoPackages';
import type { PackageShape } from './getRepoPackages';
import { sortObjectByKey } from './sortObjectByKey';
import { writeToFile } from './writeToFile';

interface PackageJsonShape {
  name: string;
  peerDependencies: Record<string, string>;
  devDependencies: Record<string, string>;
}

const isPasteDependency = (packageName: string): boolean => packageName.includes('@twilio-paste/');
const getPasteDependencyList = (dependencyObject: Record<string, string>): string[] =>
  Object.keys(dependencyObject).filter(isPasteDependency);

async function updateTsconfigFile(
  path: string,
  referencesList: string[] = [],
  packagesList: PackageShape[],
): Promise<void> {
  const TSCONFIG_FILE_PATH = resolve(path, 'tsconfig.build.json');
  if (!existsSync(TSCONFIG_FILE_PATH)) return;
  // eslint-disable-next-line import/no-dynamic-require, global-require
  const tsconfigData = require(TSCONFIG_FILE_PATH);

  const references = referencesList.map((referenceName) => {
    const dep = packagesList.find(({ name }) => name === referenceName);
    if (dep == null) return null;
    return { path: relative(path, dep.location) };
  });
  // eslint-disable-next-line no-console
  console.log(`Generated References: ${JSON.stringify(references)}`);

  // write it back to the file
  tsconfigData.references = references;
  writeToFile(TSCONFIG_FILE_PATH, tsconfigData, {
    formatJson: true,
    errorMessage: '[TSConfig] Writing Tsconfig file failed',
  });
}

async function updatePackageDevDependencies(
  packageJsonPath: string,
  pastePeerDeps: string[] = [],
  packageJson: PackageJsonShape,
): Promise<void> {
  // Let's start by assuming we need to put all pastePeerDeps into devDeps
  let missingDevDeps = pastePeerDeps;

  // To avoid needless writes, check if any pastePeerDeps are already in devDeps
  if (packageJson.devDependencies != null) {
    const pasteDevDependencies = getPasteDependencyList(packageJson.devDependencies);

    missingDevDeps = difference(pastePeerDeps, pasteDevDependencies);

    if (missingDevDeps.length === 0) {
      // Do nothing, all pastePeerDeps are in devDeps
      return;
    }
  }

  // Move all packages from 'difference' into devDeps.
  const newDevDeps = packageJson.devDependencies || {};
  missingDevDeps.forEach((dep) => {
    newDevDeps[dep] = packageJson.peerDependencies[dep];
  });

  const newPackageJson = {
    ...packageJson,
    devDependencies: sortObjectByKey(newDevDeps),
  };

  writeToFile(packageJsonPath, newPackageJson, {
    formatJson: true,
    successMessage: `[${packageJson.name}] Successfully added ${missingDevDeps}`,
  });
}

async function updatePackageReferences(): Promise<PackageShape[] | null> {
  const packagesList = await getRepoPackages();

  packagesList?.forEach(async (pkg) => {
    const PACKAGE_JSON_PATH = resolve(pkg.location, 'package.json');
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const packageJsonData = require(PACKAGE_JSON_PATH);

    // paste repos shouldnt be dependencies
    if (packageJsonData.dependencies != null) {
      const pasteDependencies = getPasteDependencyList(packageJsonData.dependencies);
      if (pasteDependencies.length > 0) {
        // eslint-disable-next-line no-console
        console.log(
          chalk.red.bold.underline(
            `[Error] ${packageJsonData.name}: do not declare @twilio-paste packages as dependencies!`,
          ),
        );
      }
    }

    if (packageJsonData.peerDependencies != null) {
      const pastePeerDependencies = getPasteDependencyList(packageJsonData.peerDependencies);

      // eslint-disable-next-line no-console
      console.log(chalk.yellow.underline(`Package ${pkg.name}`));
      if (pastePeerDependencies.length === 0) {
        // eslint-disable-next-line no-console
        console.log(`Does not contain paste peerDependencies.`);
      } else {
        // eslint-disable-next-line no-console
        console.log(`Contains the following paste peerDependencies: ${pastePeerDependencies}`);

        // NOTE: Core doesn't use the tsconfig.build.json file
        if (pkg.name !== '@twilio-paste/core') {
          await updateTsconfigFile(pkg.location, pastePeerDependencies, packagesList);
        }
        await updatePackageDevDependencies(PACKAGE_JSON_PATH, pastePeerDependencies, packageJsonData);
      }
    }
  });

  return packagesList;
}

module.exports = { updatePackageReferences };
