const {updatePackageCache} = require('../utils/updatePackageCache');

(async () => {
  await updatePackageCache();
})();
