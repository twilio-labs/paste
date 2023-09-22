import path from 'path';

import { writeToFile } from '../../../../tools/utils/writeToFile';
import { REACT_PATH, BLOCKLIST_FILES } from '../constants';
import { readdirAsync, removeTsxExtension, maybeHandleError } from '../utils';
import { jsonTemplate } from '../templates/jsonTemplate';
import { buildListTemplate } from '../templates/buildListTemplate';

export async function getIconNames(): Promise<any> {
  try {
    const allIconSourceFiles = await readdirAsync(REACT_PATH);
    return allIconSourceFiles.filter((fileName) => !BLOCKLIST_FILES.includes(fileName)).map(removeTsxExtension);
  } catch (error) {
    maybeHandleError('Error occured while generating icon list!', error);
  }

  return undefined;
}

export async function listIconsAction(): Promise<void> {
  const destinationFiles = await getIconNames();
  // Write the icons list to JSON
  writeToFile(path.join(__dirname, './../../json/icons.json'), jsonTemplate(destinationFiles), {
    errorMessage: `Couldn't update raw JSON file!`,
  });

  // Write the cache file that esbuild uses to generate bundles
  writeToFile(path.join(__dirname, './../../build.icon-list.js'), buildListTemplate(destinationFiles), {
    errorMessage: `Couldn't update 'buildIconList' cache file!`,
  });
}
