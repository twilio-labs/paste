const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: ['../packages/**/*.stories.mdx', '../packages/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    'storybook-addon-gatsby',
    'storybook-addon-performance',
    './addons/google-analytics/register',
  ],
  typescript: {
    // enable type checking
    check: true,
    checkOptions: {
      // check all ts and tsx files, but not fixtures as they include errors on purpose
      reportFiles: [
        'packages/**/*.{ts,tsx}',
        '!**/__testfixtures__/**/*',
        '!**/__fixtures__/**/*',
        // This has it's own type check
        '!packages/paste-nextjs-template/**/*',
        '!packages/paste-website/**/*',
        // ignore the template files as they don't have dependencies to reference, hence the errors
        '!packages/paste-cra-template/template/**/*',
      ],
    },
    // choose react-docgen-typescript to generate the prop tables
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // don't include node_module props as you'll cause the machine to run out of memory on our repo
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  webpackFinal: async (config) => {
    const customPlugins = [
      new DirectoryNamedWebpackPlugin({honorPackage: ['main:dev', 'main'], exclude: /node_modules/}),
    ];

    config.resolve.plugins =
      config.resolve.plugins == null ? customPlugins : [...config.resolve.plugins, ...customPlugins];

    return config;
  },
};
