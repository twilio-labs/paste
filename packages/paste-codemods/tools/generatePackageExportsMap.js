const {getRepoPackages} = require('../../../tools/utils/getRepoPackages');

// We don't want to use the 'form' or 'typography' packages because they are deprecated
const DEPRECATED_PACKAGES = new Set(['@twilio-paste/form']);
// We don't want to unbarrel these non-component packages
const IGNORED_PACKAGES = new Set([
  '@twilio-paste/codemods',
  '@twilio-paste/core',
  '@twilio-paste/cra-template',
  '@twilio-paste/nextjs-template',
  '@twilio-paste/icons',
  '@twilio-paste/theme-designer',
  '@twilio-paste/website',
]);

async function generatePackageExportsMap(getPackages = getRepoPackages) {
  // Object to store all the generated mappings for our codemod
  const mapping = {};

  // Get all Paste packages
  const allPastePackages = await getPackages();

  // Remove irrelevant packages
  const filteredPastePackages = allPastePackages.filter((pkg) => {
    if (pkg.private) return false;
    if (DEPRECATED_PACKAGES.has(pkg.name)) return false;
    if (IGNORED_PACKAGES.has(pkg.name)) return false;
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
    } catch (error) {
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

module.exports = {generatePackageExportsMap};
