const {join} = require('path');

// Adding the website package for redundancy only, because
// it's a private package and won't be included anyways
const BLOCKLIST = [
  '@twilio-paste/core',
  '@twilio-paste/icons',
  '@twilio-paste/website',
  '@twilio-paste/codemods',
  '@twilio-paste/cra-template',
];

const BASE_CODESANDBOX_CI = {
  buildCommand: 'build',
  node: '12',
  packages: ['/packages/paste-icons', '/packages/paste-core/core-bundle'],
  sandboxes: ['/packages/paste-nextjs-template'],
};

const PACKAGES_ROOT_PATH = join(__dirname, '../../../..');
const CODESANDBOX_CI_JSON_PATH = join(__dirname, '../../../../.codesandbox/ci.json');
const CORE_BUNDLE_PATH = join(__dirname, '../');
const CORE_BUNDLE_INDEX_PATH = join(CORE_BUNDLE_PATH, 'src/index.tsx');
const CORE_BUNDLE_PACKAGE_PATH = join(CORE_BUNDLE_PATH, 'package.json');
const CORE_BUNDLE_OUTPUT_PATH = join(CORE_BUNDLE_PATH, 'dist/');

const getPackageName = (package) => package.name.replace('@twilio-paste/', '');
const getUnbarreledFilePath = (package) => `src/${getPackageName(package)}.tsx`;
const getUnbarreledFileFullPath = (package) => join(CORE_BUNDLE_PATH, getUnbarreledFilePath(package));

module.exports = {
  BLOCKLIST,
  BASE_CODESANDBOX_CI,
  PACKAGES_ROOT_PATH,
  CODESANDBOX_CI_JSON_PATH,
  CORE_BUNDLE_PATH,
  CORE_BUNDLE_INDEX_PATH,
  CORE_BUNDLE_PACKAGE_PATH,
  CORE_BUNDLE_OUTPUT_PATH,

  getPackageName,
  getUnbarreledFilePath,
  getUnbarreledFileFullPath,
};
