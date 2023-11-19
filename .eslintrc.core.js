module.exports = {
  extends: ["./.eslintrc.js"],
  root: true,
  rules: {
    // when linting a package we want eslint to look at the package json file to
    // correctly detect a missing dependency
    "import/no-extraneous-dependencies": ["error"],
  },
};
