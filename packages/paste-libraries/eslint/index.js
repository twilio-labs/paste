module.exports = {
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Throws an error when use CustomizationProvider
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: '@twilio-paste/customization',
            importNames: ['CustomizationProvider'],
            message: "Please don't",
          },
        ],
      },
    ],
  },
};
