/**
 * Update all internal references to use the workspace protocol.
 */
import {resolve} from 'path';

import chalk from 'chalk';

import {getRepoPackages} from './getRepoPackages';
import {getPasteDependencyList} from './getPasteDeps';
import {writeToFile} from './writeToFile';

const getUpdatedDependencyList = (depList: string[]): Record<string, string> => {
  const updatedDeps: Record<string, string> = {};
  depList.forEach((depName) => {
    updatedDeps[depName] = 'workspace:^';
  });
  return updatedDeps;
};

export async function convertAllToWorkspaceProtocol(): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(chalk.green.bold(`Converting internal packages to workspace protocol...`));

  // Use lerna to get all packages and their version info
  const packagesList = await getRepoPackages();
  const filteredPackageList = packagesList?.filter((pkg) => {
    return !pkg.name.includes('@twilio-paste-core');
  });

  filteredPackageList?.forEach(async (item) => {
    const PACKAGE_JSON_PATH = resolve(item.location, 'package.json');
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const packageJsonData = require(PACKAGE_JSON_PATH);
    let convertedDependencies = {};
    let convertedPeerDependencies = {};
    let convertedDevDependencies = {};

    if (packageJsonData.peerDependencies != null) {
      const peerDepsList = getPasteDependencyList(packageJsonData.peerDependencies);
      if (peerDepsList.length > 0) {
        convertedPeerDependencies = getUpdatedDependencyList(peerDepsList);
      }
    }
    if (packageJsonData.devDependencies != null) {
      const devDepsList = getPasteDependencyList(packageJsonData.devDependencies);
      if (devDepsList.length > 0) {
        convertedDevDependencies = getUpdatedDependencyList(devDepsList);
      }
    }
    if (packageJsonData.dependencies != null) {
      const depsList = getPasteDependencyList(packageJsonData.dependencies);
      if (depsList.length > 0) {
        convertedDependencies = getUpdatedDependencyList(depsList);
      }
    }

    const newPackageJson = {
      ...packageJsonData,
      ...(packageJsonData.dependencies != null && {
        dependencies: {...packageJsonData.dependencies, ...convertedDependencies},
      }),
      ...(packageJsonData.peerDependencies != null && {
        peerDependencies: {...packageJsonData.peerDependencies, ...convertedPeerDependencies},
      }),
      ...(packageJsonData.devDependencies != null && {
        devDependencies: {...packageJsonData.devDependencies, ...convertedDevDependencies},
      }),
    };

    // Formatted and with a new line at the end for prettier
    const newPackageJsonString = `${JSON.stringify(newPackageJson, null, 2)}\n`;

    // Write it to file
    writeToFile(PACKAGE_JSON_PATH, newPackageJsonString, {
      successMessage: `[${packageJsonData.name}] Successfully updated package.json`,
    });
  });
}
