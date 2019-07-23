const {join} = require('path');
const fs = require('fs');
const startcase = require('lodash.startcase');
const kebabcase = require('lodash.kebabcase');

// Ramda-like general purpose functional pipe method
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

// Split ComponentName (PascalCase) to multi word regex
const pascalCaseWordSplitter = str => str.replace(/([A-Z]+)/g, ' $1').trim();

const addSvgExtension = str => `${str}.svg`;
const addTsxExtension = str => `${str}.tsx`;
const addIconSuffix = str => `${str}Icon`;
const removeIconSuffix = str => str.replace('Icon', '');
const removeSvgExtension = str => str.replace('.svg', '');
const removeTsxExtension = str => str.replace('.tsx', '');
const cleanFileName = str => startcase(str).replace(/ /g, '');

const getOutputComponentName = pipe(
  removeSvgExtension,
  removeIconSuffix,
  addIconSuffix,
  cleanFileName
);

const getOutputFileName = pipe(
  getOutputComponentName,
  addTsxExtension
);

const getInputFileName = pipe(
  removeTsxExtension,
  removeIconSuffix,
  kebabcase,
  addSvgExtension
);

const SVG_PATH = join(__dirname, '../src/svg');
const REACT_PATH = join(__dirname, '../src/react');

function getInputPath(fileName) {
  return join(SVG_PATH, fileName);
}

function getReactOutputPath(fileName) {
  return join(REACT_PATH, getOutputFileName(fileName));
}

// To use await, until fs.promises is no longer experimental
const readdirAsync = path =>
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
  getInputFileName,
  getOutputComponentName,
  pascalCaseWordSplitter,
  cleanFileName,

  SVG_PATH,
  REACT_PATH,

  getInputPath,
  getReactOutputPath,

  readdirAsync,
};
