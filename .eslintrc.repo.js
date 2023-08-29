const path = require('path');
const cachedPackages = require('./tools/.cache/packages.json');

module.exports = {
  extends: ['./.eslintrc.js'],
  root: true,
  // lint everything but:
  // - src files in packages as they need to be linted with the context of their local package.json file to make no-extraneous-dependencies work
  // - standalone apps or websites
  // - vs-code extensions
  // - cypress
  ignorePatterns: [
    'packages/**/src',
    'packages/paste-theme-designer',
    'packages/paste-token-contrast-checker',
    'packages/paste-website',
    'templates/paste-nextjs-template',
    'apps/vs-code-intellisense',
    'cypress',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        // when linting the repo globally, local packages are not installed, so we need to
        // manually tell eslint where to look for them
        packageDir: [path.join(__dirname, './'), ...cachedPackages.map((package) => package.location)],
      },
    ],
  },
};
