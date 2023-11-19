import { removeTsconfigBuildFiles } from "../utils/removeTsconfigBuildFiles";

(async () => {
  await Promise.all([removeTsconfigBuildFiles()]);
})();
