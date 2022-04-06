const path = require('path');
const cachedPackages = require('./tools/.cache/packages.json');

// Based on https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'eslint-comments', 'jest', 'promise', 'unicorn', 'emotion', 'import', 'jsx-a11y'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:cypress/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:paste-internal/all',
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
    // Doesnt really work in our use-cases: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.md
    'react/require-default-props': 'off',
    // Clashes with @typescript-eslint/parser
    'no-use-before-define': 0,
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'only-multiline'],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-shadow': ['error', {ignoreFunctionTypeParameterNameValueShadow: true}],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // We don't really have a style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-reduce': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',
    // weirdly specific
    'unicorn/import-style': 'off',
    // Too big of a change
    'unicorn/numeric-separators-style': 'off',
    // Mixed ts and node code base
    'unicorn/prefer-module': 'warn',
    // This rule tells people to do something (import foo = require('foo')) which doesn't work
    // with babel compiled typescript.
    '@typescript-eslint/no-var-requires': 'off',
    // Warn about incorrect type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': 'warn',
    // PropTypes are useless with typescript
    'react/prop-types': 'off',
    // ignore dev deps by default, point eslint to all package.json files in the monorepo
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [path.join(__dirname, './'), ...cachedPackages.map((package) => package.location)],
      },
    ],
    'react/jsx-curly-brace-presence': 0,
    'react/jsx-props-no-spreading': 0,
    'react/display-name': 2,
    'no-useless-constructor': 'off',
    eqeqeq: ['error', 'smart'],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'array-callback-return': ['error', {allowImplicit: true}],
    // deprecated rule
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
        depth: 3,
      },
    ],
    // We don't use jasmine and this clashes with danger js
    'jest/no-jasmine-globals': 'off',
    // New rules
    'unicorn/no-array-reduce': 'warn',
    'unicorn/no-array-for-each': 'warn',
    'unicorn/prefer-dom-node-dataset': 'warn',
    'unicorn/no-lonely-if': 'warn',
    'unicorn/prefer-export-from': 'warn',
    'unicorn/no-array-callback-reference': 'warn',
    'unicorn/consistent-destructuring': 'warn',
    'unicorn/prefer-number-properties': 'warn',
    'unicorn/prefer-node-protocol': 'warn',
    'unicorn/prefer-spread': 'warn',
    'unicorn/prefer-regexp-test': 'warn',
    'unicorn/no-new-array': 'warn',
    'unicorn/prefer-object-from-entries': 'warn',
    'react/jsx-key': 'warn',
    'jest/no-conditional-expect': 'warn',
  },
  settings: {
    react: {
      version: '17.0.2',
    },
  },
};
