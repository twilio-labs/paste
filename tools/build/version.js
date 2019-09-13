const {calibratePackagePeerDepsVersions} = require('../utils/calibratePackagePeerDepsVersions');

(async () => {
  await Promise.all([calibratePackagePeerDepsVersions()]);
})();
