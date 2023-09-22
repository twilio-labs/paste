import fs from 'fs';

import { minify } from 'terser';

import { writeToFile } from '../../../../tools/utils/writeToFile';
import { CORE_BUNDLE_OUTPUT_PATH } from './constants';
import { getAllJsFiles } from './utils';

const files = getAllJsFiles(CORE_BUNDLE_OUTPUT_PATH);

// Applied terserJS to provided file paths
function minifyFiles(filePaths: string[]): void {
  filePaths.forEach(async (filePath) => {
    const result = await minify(fs.readFileSync(filePath, 'utf8'), {});
    if (result.code) writeToFile(filePath, result.code, {});
  });
}

minifyFiles(files);
