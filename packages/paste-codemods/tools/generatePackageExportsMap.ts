import { getRepoPackages } from "../../../tools/utils/getRepoPackages";

export async function generatePackageExportsMap(getPackages = getRepoPackages): Promise<Record<string, string>> {
  // Object to store all the generated mappings for our codemod
  const mapping: Record<string, string> = {};

  // Get all Paste packages
  const allPastePackages = await getPackages();

  // Remove irrelevant packages
  const filteredPastePackages = allPastePackages?.filter((pkg) => {
    if (pkg.private) return false;
    // Only include Paste core packages (except core-bundle!)
    if (!pkg.location.includes("/paste-core/") || pkg.location.includes("/paste-core/core-bundle")) return false;
    return true;
  });

  filteredPastePackages?.forEach(({ name }) => {
    // convert package name to core name
    const corePackageName = `@twilio-paste/core/${name.split("/")[1]}`;

    // Get the package's exported values to be mapped
    let packageExports = {};
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      packageExports = require(name);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(`Failed to dynamically require package: ${name}`, error);
      throw error;
    }

    // Now we create a mapping for every export to the core-bundle unbarreled package
    Object.keys(packageExports).forEach((packageExportName) => {
      mapping[packageExportName] = corePackageName;
    });
  });

  return mapping;
}
