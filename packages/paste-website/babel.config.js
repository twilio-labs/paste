const getPresets = (isDev) => [
  'babel-preset-gatsby',
  [
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: isDev,
      autoLabel: isDev,
      labelFormat: '[local]',
      cssPropOptimization: !isDev,
    },
  ],
];

const BASE_PLUGINS = [
  'macros',
  ['@babel/proposal-class-properties', {loose: true}],
  '@babel/proposal-object-rest-spread',
  ['@babel/proposal-private-methods', {loose: true}],
  ['@babel/proposal-private-property-in-object', {loose: true}],
  '@babel/plugin-transform-runtime',
  '@babel/plugin-proposal-optional-chaining',
];

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
