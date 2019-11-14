#!/usr/bin/env node

const program = require('commander');
const {listIconsAction} = require('./actions/listIconsAction');
const {convertNewAction} = require('./actions/convertNewAction');

program.version('0.1.0');
program
  .command('list-icons')
  .description(`Generates a list of all our icon components and builds the story`)
  .action(listIconsAction);

program
  .command('convert-new')
  .description(`Converts any svg file in './svg' that isn't in the '/react' folder`)
  .action(convertNewAction);

// Assert that a VALID command is provided
if (process.argv.slice(2).length <= 0 || !/[arudl]/.test(process.argv.slice(2))) {
  program.outputHelp();
  process.exit();
}
program.parse(process.argv);
