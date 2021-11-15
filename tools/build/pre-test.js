const chalk = require('chalk');
const {updatePackageCache} = require('../utils/updatePackageCache');

(async () => {
  console.log('THIS IS RUNNING');
  await updatePackageCache();
})();
