const fs = require('fs');
const path = require('path');
const {convertNewAction} = require('./convertNewAction');
const {listIconsAction} = require('./listIconsAction');
const {REACT_PATH} = require('../constants');

function clearBuiltFiles() {
  fs.readdir(REACT_PATH, (readErr, files) => {
    if (readErr) throw readErr;

    files
      .filter(fileName => fileName.includes('.tsx')) // skips the helpers folder
      .forEach(fileName => {
        fs.unlink(path.join(REACT_PATH, fileName), unlinkErr => {
          if (unlinkErr) {
            throw unlinkErr;
          }
        });
      });
  });
}

async function convertAllAction() {
  clearBuiltFiles();
  await convertNewAction();
  // FIXME: avoid needing a setTimeout here if possible
  setTimeout(listIconsAction, 3000);
}

module.exports = {
  convertAllAction,
};
