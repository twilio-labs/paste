import fs from "fs";
import { join } from "path";

import startcase from "lodash/startCase";

import { REACT_PATH, SVG_PATH } from "./constants";

// Ramda-like general purpose functional pipe method
const pipe =
  <T>(...fns: Array<(arg: T) => T>) =>
  (x: T) =>
    fns.reduce((y, f) => f(y), x);

/*
 * Split ComponentName (PascalCase) to multi word regex
 * Used for icon title text for a11y
 */
const pascalCaseWordSplitter = (str: string): string => str.replace(/([A-Z]+)/g, " $1").trim();

const addTsxExtension = (str: string): string => `${str}.tsx`;
const addIconSuffix = (str: string): string => `${str}Icon`;
const removeIconSuffix = (str: string): string => str.replace("Icon", "");
const removeSvgExtension = (str: string): string => str.replace(".svg", "");
const removeTsxExtension = (str: string): string => str.replace(".tsx", "");
const cleanFileName = (str: string): string => startcase(str).replace(/ /g, "");
const removeDashes = (str: string): string => str.replace(/[_-]/g, "");
const lowerCase = (str: string): string => str.toLowerCase();

const getOutputComponentName = pipe(removeSvgExtension, removeIconSuffix, addIconSuffix, cleanFileName);

const getOutputFileName = pipe(getOutputComponentName, addTsxExtension);

const normalizeFileName = pipe(
  removeSvgExtension,
  removeTsxExtension,
  removeIconSuffix,
  removeDashes,
  cleanFileName,
  lowerCase,
);

const getBuildFileName = pipe((str: string) => `src/${str}`, addTsxExtension);

// Helper to handle promise/async errors
function maybeHandleError(msg: string, error: unknown): void {
  // eslint-disable-next-line eqeqeq
  if (error != null) {
    // eslint-disable-next-line no-console
    console.error(msg);
    throw error;
  }
}

function getInputPath(fileName: string): string {
  return join(SVG_PATH, fileName);
}

function getReactOutputPath(fileName: string): string {
  return join(REACT_PATH, getOutputFileName(fileName));
}

// To use await, until fs.promises is no longer experimental
const readdirAsync = async (path: string): Promise<string[]> =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

export {
  getOutputComponentName,
  pascalCaseWordSplitter,
  cleanFileName,
  normalizeFileName,
  removeTsxExtension,
  getInputPath,
  getReactOutputPath,
  getBuildFileName,
  readdirAsync,
  maybeHandleError,
};
