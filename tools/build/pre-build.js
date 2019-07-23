const {updatePackageReferences} = require('../utils/updatePackageReferences');
const {removeTsconfigBuildFiles} = require('../utils/removeTsconfigBuildFiles');

(async () => {
  await Promise.all([removeTsconfigBuildFiles(), updatePackageReferences()]);
})();
