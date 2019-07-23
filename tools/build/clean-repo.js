const {removeYarnLockfile} = require('../utils/removeYarnLockfile');
const {removeTsconfigBuildFiles} = require('../utils/removeTsconfigBuildFiles');

(async () => {
  await Promise.all([removeYarnLockfile(), removeTsconfigBuildFiles()]);
})();
