const {getRepoPackages} = require('../../../tools/utils/getRepoPackages');

const DEPRECATED_PACKAGES = ['@twilio-paste/typography', '@twilio-paste/form'];

async function generatePackageExportsMap(getPackages = getRepoPackages) {
  // Object to store all the generated mappings for our codemod
  const mapping = {};

  // Get all Paste packages
  const allPastePackages = await getPackages();

  // For each package in Paste:
  allPastePackages.forEach(({name, location}) => {
    // We don't want to use the 'form' or 'typography' packages because they are deprecated
    // Skip them for now
    if (DEPRECATED_PACKAGES.includes(name)) return;

    // Only include core packages but not the core-bundle package
    if (!location.includes('/paste-core/') || location.includes('/paste-core/core-bundle')) return;

    // convert package name to core name
    const corePackageName = `@twilio-paste/core/${name.split('/')[1]}`;

    // Get the package's exported values to be mapped
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const packageExports = require(name);

    // Now we create a mapping for every export to the core-bundle unbarreled package
    Object.keys(packageExports).forEach(packageExportName => {
      mapping[packageExportName] = corePackageName;
    });
  });

  return mapping;
}

module.exports = {generatePackageExportsMap};
