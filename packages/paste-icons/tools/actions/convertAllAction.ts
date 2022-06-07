import fs from 'fs';
import path from 'path';

import {convertNewAction} from './convertNewAction';
import {listIconsAction} from './listIconsAction';
import {REACT_PATH} from '../constants';

function clearBuiltFiles(): void {
  fs.readdir(REACT_PATH, (readErr, files) => {
    if (readErr) throw readErr;

    files
      .filter((fileName) => fileName.includes('.tsx')) // skips the helpers folder
      .forEach((fileName) => {
        fs.unlink(path.join(REACT_PATH, fileName), (unlinkErr) => {
          if (unlinkErr) {
            throw unlinkErr;
          }
        });
      });
  });
}

export async function convertAllAction(): Promise<void> {
  clearBuiltFiles();
  await convertNewAction();
  // FIXME: avoid needing a setTimeout here if possible
  setTimeout(listIconsAction, 3000);
}
