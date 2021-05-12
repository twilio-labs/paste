const babelOptions = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/react',
  ],
  plugins: ['@emotion', '@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
};
module.exports = require('babel-jest').createTransformer(babelOptions);
