const getPresets = (isDev) => [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1',
      },
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',
  [
    // Automatically includes the 'emotion' preset.
    // @NOTE updated this to v11, configuration option schema changed slightly.
    // when we upgrade our react to use the new JSX transformations with babel, we will need to replace this with the "@emotion/babel" plugin.
    // when using this plugin, we need to reference the cssprop type in our ts configuraiton.
    '@emotion/babel-preset-css-prop',
    {
      sourceMap: isDev,
      autoLabel: 'dev-only',
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
