const path = require('path');
const {writeToFile} = require('../../../tools/utils/writeToFile');
const {generatePackageExportsMap} = require('./generatePackageExportsMap');

(async () => {
  const mapping = await generatePackageExportsMap();

  // Write to disk
  writeToFile(path.join(__dirname, '.cache/mappings.json'), mapping, {
    successMessage: 'Wrote core packages export mapping to .cache/mappings.json file!',
    errorMessage: 'Could not generate mappings!',
    formatJson: true,
  });
})();
