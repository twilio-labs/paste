import fs from "fs";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { getRepoPackages } from "../../../../tools/utils/getRepoPackages";
import { mkdir } from "../../../../tools/utils/mkdir";
import { writeToFile } from "../../../../tools/utils/writeToFile";
import {
  BASE_CODESANDBOX_CI,
  BLOCKLIST,
  CODESANDBOX_CI_JSON_PATH,
  PACKAGES_ROOT_PATH,
  getPackageName,
  getUnbarreledFileFullPath,
} from "./constants";
import type { PackageList, PackageShape } from "./types";

// Given a list of packages, output the index.tsx exports string
function generateIndexFromPackageList(packageList: PackageList): string {
  let output = "";
  packageList.forEach((item) => {
    output = `${output}export * from "${item.name}";\n`;
  });
  return output;
}

// See: https://stackoverflow.com/questions/58527907/barrel-file-and-tree-shaking
function generateUnbarreledExports(packageList: PackageList): void {
  packageList.forEach((item) => {
    writeToFile(getUnbarreledFileFullPath(item), `export * from "${item.name}";\n`, {
      errorMessage: `[@twilio-paste/core] ${item.name} export file was not generated.`,
    });
  });
}

// Given a list of packages, output the package.json dependencies field
function generateVersionedDependencyList(packageList: PackageList): Record<string, string> {
  const dependencies: Record<string, string> = {};
  packageList.forEach((item) => {
    dependencies[item.name] = `^${item.version}`;
  });
  return dependencies;
}

// Given a list of all repo packages, return only public and not blocked packages.
function getCoreRelevantPackages(packageList: PackageList): PackageList {
  return packageList.filter((item) => {
    const isReleased = !item.private;
    const isNotBlocked = !BLOCKLIST.includes(item.name);
    return isReleased && isNotBlocked;
  });
}

function getAllJsFiles(dirPath: string): string[] {
  const files = fs.readdirSync(dirPath);
  const arrayOfFiles: string[] = [];

  files.forEach((file) => {
    arrayOfFiles.push(path.join(dirPath, "/", file));
  });
  return arrayOfFiles.filter((file) => file.match(/\.js$/));
}

function createRelativePackageFolders(packageList: PackageList): void {
  packageList.forEach((item: PackageShape) => {
    const packageName = getPackageName(item);
    const relativePackagePath = path.join(__dirname, "../", packageName);

    // Make the folder
    mkdir(relativePackagePath, {
      callback: () => {
        // Make its package.json file
        const packageJsonPath = path.join(relativePackagePath, "package.json");
        const packageJsonContents = {
          /*
           * This name really doesn't matter, it just can't match an existing package
           * or Lerna and TS gets confused as there are multiple references.
           * Package names must be globally unique
           */
          name: item.name.replace("@twilio-paste/", "@twilio-paste-core/"),
          version: "0.0.0",
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

function createGitIgnore(packageList: PackageList): void {
  const ignoreList = packageList.map((item) => `/${getPackageName(item)}`);

  const output = `# Automatically generated from "yarn generate-packages"
/dist
${ignoreList.join("\n")}`;

  writeToFile(path.join(__dirname, "../.gitignore"), output, {
    successMessage: "Successfully generated core-bundle .gitignore file",
    errorMessage: "Failed to generate code-bundle .gitignore file",
  });
}

function createCodeSandboxCIjson(packageList: PackageList): void {
  // create a list of package locations based on the repo root, not including machine file structure
  const packageLocationList = packageList.map((item) => item.location.replace(PACKAGES_ROOT_PATH, ""));
  const newCodeSandboxConfig = {
    ...BASE_CODESANDBOX_CI,
    packages: [...BASE_CODESANDBOX_CI.packages, ...packageLocationList],
  };
  writeToFile(CODESANDBOX_CI_JSON_PATH, newCodeSandboxConfig, {
    formatJson: true,
    successMessage: "Successfully generated codesandbox ci.json file",
    errorMessage: "Failed to generate codesandbox ci.json file",
  });
}

export {
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
