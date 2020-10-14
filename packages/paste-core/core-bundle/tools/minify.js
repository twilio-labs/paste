const fs = require('fs');
const Terser = require('terser');
const {CORE_BUNDLE_OUTPUT_PATH} = require('./constants');
const {getAllJsFiles} = require('./utils');
const {writeToFile} = require('../../../../tools/utils/writeToFile');

const files = getAllJsFiles(CORE_BUNDLE_OUTPUT_PATH);

// Applied terserJS to provided file paths
function minifyFiles(filePaths) {
  filePaths.forEach(async filePath => {
    const result = await Terser.minify(fs.readFileSync(filePath, 'utf8'), {});
    writeToFile(filePath, result.code, {});
  });
}

minifyFiles(files);
