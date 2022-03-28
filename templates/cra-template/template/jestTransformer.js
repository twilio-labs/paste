import babel from '@babel/core';

module.exports = {
  process(fileContent) {
    return babel.transform(fileContent, {
      plugins: ['transform-es2015-modules-commonjs'],
      babelrc: false,
    }).code;
  },
};
