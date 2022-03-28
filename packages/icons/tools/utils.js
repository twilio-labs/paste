const {join} = require('path');
const fs = require('fs');
const startcase = require('lodash.startcase');
const {SVG_PATH, REACT_PATH} = require('./constants');

// Ramda-like general purpose functional pipe method
const pipe = (...fns) => (x) => fns.reduce((y, f) => f(y), x);

// Split ComponentName (PascalCase) to multi word regex
// Used for icon title text for a11y
const pascalCaseWordSplitter = (str) => str.replace(/([A-Z]+)/g, ' $1').trim();

const addTsxExtension = (str) => `${str}.tsx`;
const addIconSuffix = (str) => `${str}Icon`;
const removeIconSuffix = (str) => str.replace('Icon', '');
const removeSvgExtension = (str) => str.replace('.svg', '');
const removeTsxExtension = (str) => str.replace('.tsx', '');
const cleanFileName = (str) => startcase(str).replace(/ /g, '');
const removeDashes = (str) => str.replace(/[-_]/g, '');
const lowerCase = (str) => str.toLowerCase();

const getOutputComponentName = pipe(removeSvgExtension, removeIconSuffix, addIconSuffix, cleanFileName);

const getOutputFileName = pipe(getOutputComponentName, addTsxExtension);

const normalizeFileName = pipe(
  removeSvgExtension,
  removeTsxExtension,
  removeIconSuffix,
  removeDashes,
  cleanFileName,
  lowerCase
);

const getBuildFileName = pipe((str) => `src/${str}`, addTsxExtension);

// Helper to handle promise/async errors
function maybeHandleError(msg, error) {
  // eslint-disable-next-line eqeqeq
  if (error != null) {
    // eslint-disable-next-line no-console
    console.error(msg);
    throw error;
  }
}

function getInputPath(fileName) {
  return join(SVG_PATH, fileName);
}

function getReactOutputPath(fileName) {
  return join(REACT_PATH, getOutputFileName(fileName));
}

// To use await, until fs.promises is no longer experimental
const readdirAsync = (path) =>
  new Promise((resolve, reject) => {
    fs.readdir(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });

module.exports = {
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
