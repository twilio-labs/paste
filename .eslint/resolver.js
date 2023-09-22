const resolve = require('resolve');
const cachedPackages = require('../tools/.cache/packages.json');

exports.interfaceVersion = 2;

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

  // If there's no main entrypoint, don't update the location path.
  // Note: the icons package doesn't have a main entrypoint
  if (packageJson['main:dev'] == null && packageJson.main == null) {
    acc[currentPackage.name] = currentPackage;
  } else {
    const mainEntrypoint = packageJson['main:dev'] || packageJson.main;
    // Make sure to set the location to the dist/main entrypoint.
    acc[currentPackage.name] = {
      ...currentPackage,
      location: `${currentPackage.location}/${mainEntrypoint}`,
    };
  }
  return acc;
}, {});

/**
 * We're creating our own module resolver for eslint because it is having a
 * very hard time finding our monorepo packages.  When we import a `@twilio-paste`
 * package we use our own module resolution, otherwise we use the default
 * node one.
 *
 * https://github.com/benmosher/eslint-plugin-import/blob/master/resolvers/README.md
 */
exports.resolve = function customResolver(source, file, config) {
  if (source.includes('@twilio-paste/') && keyedPackages[source] != null) {
    return { found: true, path: keyedPackages[source].location };
  }

  if (resolve.isCore(source)) {
    return { found: true, path: null };
  }

  try {
    return { found: true, path: resolve.sync(source, opts(file, config)) };
  } catch (err) {
    return { found: false };
  }
};
