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
];

const BASE_PLUGINS = [
  '@emotion',
  '@babel/proposal-class-properties',
  '@babel/proposal-object-rest-spread',
  '@babel/proposal-private-methods',
  '@babel/proposal-private-property-in-object',
  '@babel/plugin-transform-runtime',
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
