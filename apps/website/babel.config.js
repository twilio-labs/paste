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

const BASE_PLUGINS = ['@babel/proposal-object-rest-spread'];

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
