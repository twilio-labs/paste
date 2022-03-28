const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const path = require('path');

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
        '!templates/nextjs-template/**/*',
        '!apps/website/**/*',
        // ignore the template files as they don't have dependencies to reference, hence the errors
        '!templates/cra-template/template/**/*',
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

    // Need to custom alias react-dom and scheduler for component profiling in production
    // mode. Without doing so, no React profiling data can be extracted from stories
    // When they are deployed.
    const customAlias = {
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom/profiling'),
      'scheduler/tracing': 'scheduler/tracing-profiling',
    };
    config.resolve.alias = config.resolve.alias == null ? customAlias : {...config.resolve.alias, ...customAlias};

    return config;
  },
};
