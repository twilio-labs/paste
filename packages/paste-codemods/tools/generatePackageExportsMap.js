const {getRepoPackages} = require('../../../tools/utils/getRepoPackages');

// If we deprecate pacjkages, add them here. Previously typography and form packages.
// const DEPRECATED_PACKAGES = [];

async function generatePackageExportsMap(getPackages = getRepoPackages) {
  // Object to store all the generated mappings for our codemod
  const mapping = {};

  // Get all Paste packages
  const allPastePackages = await getPackages();

  // Remove irrelevant packages
  const filteredPastePackages = allPastePackages.filter((pkg) => {
    if (pkg.private) return false;
    // if (DEPRECATED_PACKAGES.includes(pkg.name)) return false;
    // Only include Paste core packages (except core-bundle!)
    if (!pkg.location.includes('/paste-core/') || pkg.location.includes('/paste-core/core-bundle')) return false;
    return true;
  });

  filteredPastePackages.forEach(({name}) => {
    // convert package name to core name
    const corePackageName = `@twilio-paste/core/${name.split('/')[1]}`;

    // Get the package's exported values to be mapped
    let packageExports = {};
    try {
      // eslint-disable-next-line global-require, import/no-dynamic-require
      packageExports = require(name);
    } catch (err) {
      console.log(`Failed to dynamically require package: ${name}`, err);
      throw err;
    }

    // Now we create a mapping for every export to the core-bundle unbarreled package
    Object.keys(packageExports).forEach((packageExportName) => {
      mapping[packageExportName] = corePackageName;
    });
  });

  return mapping;
}

module.exports = {generatePackageExportsMap};
