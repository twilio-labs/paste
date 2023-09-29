module.exports = {
  printWidth: 120,
  trailingComma: "es5",
  bracketSpacing: true,
  singleQuote: false,
  tabWidth: 2,
  overrides: [
    {
      files: "*.yml",
      options: {
        parser: "yaml",
        singleQuote: false,
      },
    },
  ],
};
