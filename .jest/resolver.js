const fs = require('fs');
const path = require('path');

const PACKAGES_CACHE_PATH = path.join(__dirname, '../tools/.cache/packages.json');

if (!fs.existsSync(PACKAGES_CACHE_PATH)) {
  throw new Error(
    `[Jest resolver]: The "/tools/.cache/packages.json" file does not exist.  Please run "yarn pre-test"`
  );
}

const cachedPackages = require(PACKAGES_CACHE_PATH);

/**
 * Holds information about every @paste package in our repo
 * Our cache doesn't include the entry points in the location, so
 * we loop over the packages, get the entry point from the 'main' field,
 * and update the location property.
 *
 * Shape:
 * {
 *   '@twilio-paste/button': {
 *     name: '@twilio-paste/button',
       version: '0.1.2',
       private: false,
       location: '/Users/username/paste/packages/paste-core/components/button/dist/index.js'
     }
 * }
 */
const keyedPackages = cachedPackages.reduce((acc, currentPackage) => {
  const packageJson = require(`${currentPackage.location}/package.json`);

  // If there's no main entrypoint, don't update  the location path.
  // Note: the icons package doesn't have a main entrypoint
  if (packageJson.main == null) {
    acc[currentPackage.name] = currentPackage;
  } else {
    // Make sure to set the location to the dist/main entrypoint.
    acc[currentPackage.name] = {
      ...currentPackage,
      location: `${currentPackage.location}/${packageJson.main}`,
    };
  }
  return acc;
}, {});

/**
 * We're creating our own module resolver for jest because it is having a
 * very hard time finding our monorepo packages.  When we import a `@paste`
 * package we use our own module resolution, otherwise we use the default
 * node one.
 *
 * @param {string} package
 * @param {*} details
 */
function customResolver(package, details) {
  if (package.includes('@twilio-paste/')) {
    if (package.includes('@twilio-paste/icons')) {
      return `${keyedPackages['@twilio-paste/icons'].location}/${package.replace('@twilio-paste/icons/esm', 'cjs')}.js`;
    }
    return keyedPackages[package].location;
  }

  return details.defaultResolver(package, details);
}

module.exports = customResolver;
