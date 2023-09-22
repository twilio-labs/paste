import { resolve } from "path";

import { getRepoPackages } from "./getRepoPackages";
import type { PackageShape } from "./getRepoPackages";
import { writeToFile } from "./writeToFile";

const CACHE_FILE_PATH = resolve(__dirname, "../.cache/packages.json");

/*
 * This generates a list of all paste packages in the monorepo and saves the information
 * into ../.cache/packages.json.  This file is a cache for other commands to not
 * repeatedly run this.
 */
export async function updatePackageCache(): Promise<PackageShape[] | null> {
  const packagesList = await getRepoPackages();

  if (packagesList !== null) {
    writeToFile(CACHE_FILE_PATH, packagesList, {
      formatJson: true,
      successMessage: `[Monorepo cache] Cache was successfully saved to: ${CACHE_FILE_PATH}`,
    });
  }

  return packagesList;
}
