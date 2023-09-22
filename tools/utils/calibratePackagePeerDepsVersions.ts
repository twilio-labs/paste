/**
 * Updates package.json files for each package in monorepo to properly sync
 * the version numbers accross peerDeps and devDeps since lerna does not do it.
 * See: https://github.com/lerna/lerna/pull/1187
 *
 * Until this bites us, we should automate this because not bumping peers has bit us.
 */

import { resolve } from "path";

import chalk from "chalk";

import { getRepoPackages } from "./getRepoPackages";
import type { PackageShape } from "./getRepoPackages";
import { writeToFile } from "./writeToFile";

const isPasteDependency = (packageName: string): boolean => packageName.includes("@twilio-paste/");
const getPasteDependencyList = (dependencyObject: Record<string, string>): string[] =>
  Object.keys(dependencyObject).filter(isPasteDependency);

async function updatePackagePeerDependencies(
  packageJsonPath: string,
  peerDepsList: string[],
  packageJsonData: {
    peerDependencies: Record<string, string>;
    name: string;
  },
  packagesList: PackageShape[],
): Promise<void> {
  const calibratedPeerDeps: Record<string, string> = {};
  peerDepsList.forEach((peerDepName) => {
    const latestVersion = `^${packagesList.find(({ name }) => name === peerDepName)?.version}`;
    const currentVersion = packageJsonData.peerDependencies[peerDepName];
    if (latestVersion !== currentVersion) {
      calibratedPeerDeps[peerDepName] = latestVersion;
    }
  });

  if (Object.keys(calibratedPeerDeps).length === 0) {
    return;
  }

  const newPackageJson = {
    ...packageJsonData,
    peerDependencies: { ...packageJsonData.peerDependencies, ...calibratedPeerDeps },
  };

  // Formatted and with a new line at the end for prettier
  const newPackageJsonString = `${JSON.stringify(newPackageJson, null, 2)}\n`;

  // Write it to file
  writeToFile(packageJsonPath, newPackageJsonString, {
    successMessage: `[${packageJsonData.name}] Successfully updated ${JSON.stringify(calibratedPeerDeps)}`,
  });
}

export async function calibratePackagePeerDepsVersions(): Promise<PackageShape[] | null> {
  // eslint-disable-next-line no-console
  console.log(chalk.green.bold("Calibrating package peerDependencies..."));

  // Use lerna to get all packages and their version info
  const packagesList = await getRepoPackages();

  packagesList?.forEach(async (item) => {
    const PACKAGE_JSON_PATH = resolve(item.location, "package.json");
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const packageJsonData = require(PACKAGE_JSON_PATH);

    // paste repos shouldnt be dependencies
    if (packageJsonData.dependencies != null) {
      const depsList = getPasteDependencyList(packageJsonData.dependencies);
      if (depsList.length > 0) {
        // eslint-disable-next-line no-console
        console.log(
          chalk.red.bold.underline(
            `[Error] ${packageJsonData.name}: do not declare @twilio-paste packages as dependencies!`,
          ),
        );
        throw new Error("Move deps to peerDeps and devDeps");
      }
    }

    if (packageJsonData.peerDependencies != null) {
      const peerDepsList = getPasteDependencyList(packageJsonData.peerDependencies);

      if (peerDepsList.length > 0) {
        await updatePackagePeerDependencies(PACKAGE_JSON_PATH, peerDepsList, packageJsonData, packagesList);
      }
    }
  });

  return packagesList;
}
