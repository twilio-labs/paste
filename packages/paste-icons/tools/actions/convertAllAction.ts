import fs from 'fs';
import path from 'path';

import { convertNewAction } from './convertNewAction';
import { listIconsAction } from './listIconsAction';
import { REACT_PATH } from '../constants';

export function filterBuiltFiles(files: string[]): string[] {
  return files.filter((fileName) => fileName.includes('.tsx'));
}

function clearBuiltFiles(dirPath = REACT_PATH): void {
  fs.readdir(dirPath, (readErr, files) => {
    if (readErr) throw readErr;

    filterBuiltFiles(files).forEach((fileName) => {
      fs.unlink(path.join(dirPath, fileName), (unlinkErr) => {
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
