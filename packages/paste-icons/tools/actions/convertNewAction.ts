import fs from 'fs';

import difference from 'lodash/difference';

import { writeToFile } from '../../../../tools/utils/writeToFile';
import { BLOCKLIST_FILES, REACT_PATH, SVG_PATH } from '../constants';
import { reactIconTemplate } from '../templates/reactIconTemplate';
import {
  getInputPath,
  getOutputComponentName,
  getReactOutputPath,
  maybeHandleError,
  normalizeFileName,
  readdirAsync,
} from '../utils';

const { convertSvgToReact } = require('@twilio-labs/svg-to-react');

// Converts raw svg to react component
export async function performFileConversion(
  fileName: string,
  outputPath: string,
  options: Record<string, unknown>,
): Promise<void> {
  // eslint-disable-next-line no-console
  console.log(`Converting ${fileName}.`);
  // Read the SVG file
  fs.readFile(getInputPath(fileName), 'utf8', async (readFileError, fileContents) => {
    maybeHandleError('Invalid fileName provided', readFileError);
    const cleanedFileName = getOutputComponentName(fileName);
    // Convert the SVG into our ideal format
    let generatedComponent;
    try {
      generatedComponent = await convertSvgToReact(cleanedFileName, fileContents, options);
    } catch (error) {
      maybeHandleError('Error occured while generating the component!', error);
    }

    writeToFile(outputPath, generatedComponent, {
      errorMessage: `Couldn't write formatted SVG to disk`,
    });
  });
}

export function normalizeSourceFiles(sourceFiles: string[]): string[] {
  // Normalize file names so we can run a diff
  return (
    sourceFiles
      // If it isn't in the source files list, it won't generate
      .filter((fileName) => !BLOCKLIST_FILES.includes(fileName))
      .map(normalizeFileName)
  );
}

export async function convertNewAction(): Promise<void> {
  const sourceFiles = await readdirAsync(SVG_PATH);
  const destinationFiles = await readdirAsync(REACT_PATH);

  // Normalize file names so we can run a diff
  const normalizedSourceFiles = normalizeSourceFiles(sourceFiles);
  const normalizedDestinationFiles = destinationFiles.map(normalizeFileName);

  // Run the diff to get a list of files we need to convert to react components
  const newReactSvgs = difference(normalizedSourceFiles, normalizedDestinationFiles);

  // Generate a component for each new SVG in source
  newReactSvgs.forEach(async (normalizedFileName) => {
    // Since we normalized the filename, we need to get the original filename again.
    const fileName = sourceFiles[normalizedSourceFiles.indexOf(normalizedFileName)];
    await performFileConversion(fileName, getReactOutputPath(fileName), {
      useHooks: false,
      template: reactIconTemplate,
    });
  });
}
