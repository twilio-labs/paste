import { calibratePackagePeerDepsVersions } from '../utils/calibratePackagePeerDepsVersions';

(async () => {
  await Promise.all([calibratePackagePeerDepsVersions()]);
})();
