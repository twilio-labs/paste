const {join} = require('path');

const SVG_PATH = join(__dirname, '../svg');
const REACT_PATH = join(__dirname, '../src');

const BLACKLIST_FILES = ['.DS_Store', 'helpers'];

module.exports = {
  SVG_PATH,
  REACT_PATH,

  BLACKLIST_FILES,
};
