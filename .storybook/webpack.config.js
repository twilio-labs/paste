const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = ({config}) => {
  // HACK-FIX: Exclude already-compiled `/lib` folders from Storybook's babel-loader
  // Babel-loader is assumed to be always at position 0 because it historically has been.
  // #fragilehacks
  const babelLoader = config.module.rules[0];
  babelLoader.exclude.push(/\/lib\//);

  // To make working with Typescript files possible
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['react-app', {flow: false, typescript: true}]],
        },
      },
    ],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  // To make Storybook build from src files
  const customPlugins = [new DirectoryNamedWebpackPlugin({honorPackage: ['main:dev', 'main']})];
  config.resolve.plugins =
    config.resolve.plugins == null ? customPlugins : [...config.resolve.plugins, ...customPlugins];

  return config;
};
