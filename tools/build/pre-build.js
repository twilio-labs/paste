// We no longer need this in the migration to ESbuild
// If we ever need to mark tsconfig references again, re-add the script
// const {updatePackageReferences} = require('../utils/updatePackageReferences');
const {removeTsconfigBuildFiles} = require('../utils/removeTsconfigBuildFiles');

(async () => {
  await Promise.all([removeTsconfigBuildFiles() /* , updatePackageReferences() */]);
})();
