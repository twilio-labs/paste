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
    '@babel/typescript',
    '@babel/react',
    [
      '@emotion/babel-preset-css-prop',
      {
        sourceMap: false,
        autoLabel: true,
        labelFormat: '[local]',
        cssPropOptimization: false,
      },
    ],
  ],
  plugins: ['macros', '@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
};
module.exports = require('babel-jest').createTransformer(babelOptions);
