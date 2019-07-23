#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const program = require('commander');
const {convertSvgToReact} = require('@twilio-labs/svg-to-react');
const difference = require('lodash.difference');
const {
  SVG_PATH,
  REACT_PATH,
  getInputPath,
  getReactOutputPath,
  getInputFileName,
  readdirAsync,
  getOutputComponentName,
} = require('./utils');
const {iconTemplate} = require('./iconTemplate');
const {listTemplate} = require('./listTemplate');

const BLACKLIST_FILES = ['.DS_Store'];

// Helper to handle promise/async errors
function maybeHandleError(msg, error) {
  // eslint-disable-next-line eqeqeq
  if (error != null) {
    // eslint-disable-next-line no-console
    console.error(msg);
    throw error;
  }
}

// Converts raw svg to react component
function performFileConversion(fileName, outputPath, options) {
  // eslint-disable-next-line no-console
  console.log(`Converting ${fileName}.`);
  // Read the SVG file
  fs.readFile(getInputPath(fileName), 'utf8', async (readFileError, fileContents) => {
    maybeHandleError('Invalid fileName provided', readFileError);
    const cleanedFileName = getOutputComponentName(fileName);
    // Convert the SVG into our ideal format
    const generatedComponent = await convertSvgToReact(cleanedFileName, fileContents, options);
    fs.writeFile(outputPath, generatedComponent, 'utf8', writeFileError => {
      maybeHandleError(`Couldn't write formatted SVG to disk`, writeFileError);
    });
  });
}

const Actions = {
  listIcons: async () => {
    let reactDestinationFiles;
    try {
      reactDestinationFiles = await readdirAsync(REACT_PATH);
    } catch (error) {
      maybeHandleError('Error occured while reading directory!', error);
    }

    const iconList = reactDestinationFiles.filter(name => name !== '.DS_Store').map(name => name.replace('.tsx', ''));

    fs.writeFile(path.join(__dirname, './../__IconList.tsx'), listTemplate(iconList), 'utf8', error => {
      maybeHandleError(`Couldn't write formatted SVG to disk`, error);
    });
  },
  convertNew: async () => {
    let sourceFiles;
    let reactDestinationFiles;
    try {
      sourceFiles = await readdirAsync(SVG_PATH);
      reactDestinationFiles = await readdirAsync(REACT_PATH);
    } catch (error) {
      maybeHandleError('Error occured while reading directory!', error);
    }
    // Map the generated component filename back to the input filename so we can run a diff
    reactDestinationFiles = reactDestinationFiles.map(getInputFileName);

    const newReactSvgs = difference(sourceFiles, reactDestinationFiles).filter(
      fileName => !BLACKLIST_FILES.includes(fileName)
    );

    newReactSvgs.forEach(fileName =>
      performFileConversion(fileName, getReactOutputPath(fileName), {
        useHooks: false,
        template: iconTemplate,
      })
    );
  },
};

program.version('0.1.0');
program
  .command('list-icons')
  .description(`Generates a list of all our icon components and builds the story`)
  .action(Actions.listIcons);

program
  .command('convert-new')
  .description(`Converts any svg file in './svg' that isn't in the '/react' folder`)
  .action(Actions.convertNew);

// Assert that a VALID command is provided
if (process.argv.slice(2).length <= 0 || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv);
