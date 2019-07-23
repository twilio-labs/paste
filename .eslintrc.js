// Based on https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn', 'emotion'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Use function hoisting to improve code readability
    'no-use-before-define': ['error', {functions: false, classes: true, variables: true}],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {allowExpressions: true, allowTypedFunctionExpressions: true},
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {functions: false, classes: true, variables: true, typedefs: true},
    ],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // We don't really have a style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',
    // This rule tells people to do something (import foo = require('foo')) which doesn't work
    // with babel compiled typescript.
    '@typescript-eslint/no-var-requires': 'off',
    // Enforce template strings for styles over objects for consistent codebase
    'emotion/syntax-preference': [2, 'string'],
    // PropTypes are useless with typescript
    'react/prop-types': 'off',
    // Avoid having to redefine story deps for this monorepo
    // https://github.com/benmosher/eslint-plugin-import/issues/458#issuecomment-468235671
    'import/no-extraneous-dependencies': context => [
      'error',
      {
        devDependencies: true,
        packageDir: [context.getFilename(), __dirname],
      },
    ],

    'no-useless-constructor': 'off',
    eqeqeq: ['error', 'smart'],
    'no-plusplus': 'off',
    'consistent-return': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
