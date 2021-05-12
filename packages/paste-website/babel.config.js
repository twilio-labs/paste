const getPresets = (isDev) => ['babel-preset-gatsby'];

const BASE_PLUGINS = ['@emotion', '@babel/proposal-object-rest-spread'];

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
