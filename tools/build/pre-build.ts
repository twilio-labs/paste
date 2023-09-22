/*
 * We no longer need this in the migration to ESbuild
 * If we ever need to mark tsconfig references again, re-add the script
 * import {updatePackageReferences} from '../utils/updatePackageReferences';
 */

import { removeTsconfigBuildFiles } from '../utils/removeTsconfigBuildFiles';

(async () => {
  await Promise.all([removeTsconfigBuildFiles() /* , updatePackageReferences() */]);
})();
