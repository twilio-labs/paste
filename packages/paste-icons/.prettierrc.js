// svg-to-react needs this config to prettify the generated react files. Do not delete.

module.exports = {
  parser: "babel-ts",
  printWidth: 120,
  trailingComma: "es5",
  bracketSpacing: false,
  singleQuote: true,
  tabWidth: 2,
  overrides: [
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
  ],
};
