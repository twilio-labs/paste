const {join} = require('path');

const SVG_PATH = join(__dirname, '../svg');
const REACT_PATH = join(__dirname, '../src');

const BLOCKLIST_FILES = ['.DS_Store', 'helpers', 'types'];

module.exports = {
  SVG_PATH,
  REACT_PATH,

  BLOCKLIST_FILES,
};
