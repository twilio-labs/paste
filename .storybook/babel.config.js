const getPresets = isDev => [
  '@babel/preset-env',
  '@babel/preset-react',
  '@babel/preset-typescript',
  [
    // Automatically includes the 'emotion' preset.
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: isDev,
      autoLabel: isDev,
      labelFormat: '[local]',
      cssPropOptimization: !isDev,
    },
  ],
];

const BASE_PLUGINS = ['macros', '@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'];

module.exports = {
  env: {
    production: {
      presets: getPresets(false),
      plugins: BASE_PLUGINS,
    },
    development: {
      presets: getPresets(true),
      plugins: BASE_PLUGINS,
    },
  },
};
