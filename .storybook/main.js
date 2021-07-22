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
    'storybook-addon-performance',
  ],

  webpackFinal: async (config) => {
    const customPlugins = [
      new DirectoryNamedWebpackPlugin({honorPackage: ['main:dev', 'main'], exclude: /node_modules/}),
    ];

    config.resolve.plugins =
      config.resolve.plugins == null ? customPlugins : [...config.resolve.plugins, ...customPlugins];

    return config;
  },
};
