const {removeTsconfigBuildFiles} = require('../utils/removeTsconfigBuildFiles');

(async () => {
  await Promise.all([removeTsconfigBuildFiles()]);
})();
