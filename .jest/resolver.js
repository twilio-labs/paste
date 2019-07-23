const cachedPackages = require('../tools/.cache/packages.json');

/**
 * Holds information about every @paste package in our repo
 * Our cache doesn't include the entry points in the location, so
 * we loop over the packages, get the entry point from the 'main' field,
 * and update the location property.
 * 
 * Shape:
 * {
 *   '@paste/button': {
 *     name: '@paste/button',
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
  if (package.includes('@paste/')) {
    return keyedPackages[package].location;
  }

  return details.defaultResolver(package, details);
}

module.exports = customResolver;
