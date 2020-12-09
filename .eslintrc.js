const path = require('path');

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
    'plugin:cypress/recommended',
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
    'react/jsx-props-no-spreading': 'off',
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
    // https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        typedefs: true,
      },
    ],
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    // Typescript already handles this, and better, since they changed the rule to be v bad
    // https://github.com/typescript-eslint/typescript-eslint/issues/2585
    '@typescript-eslint/no-redeclare': 'off',
    // Strict rule for no reason + TS handles it well
    'unicorn/no-null': 'off',
    // We don't have a preference
    'arrow-body-style': 'off',
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    // We don't really have a style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    'unicorn/filename-case': 'off',
    // This rule tells people to do something (import foo = require('foo')) which doesn't work
    // with babel compiled typescript.
    '@typescript-eslint/no-var-requires': 'off',
    // PropTypes are useless with typescript
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-useless-constructor': 'off',
    eqeqeq: ['error', 'smart'],
    'no-plusplus': 'off',
    'consistent-return': 'off',
    // deprecated rule
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        assert: 'either',
        depth: 3,
      },
    ],
    'unicorn/import-style': 'off',
    // TODO these should be errors, fix these when we have bandwidth
    'jest/valid-title': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-conditional-expect': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'unicorn/prefer-ternary': 'warn',
    'unicorn/no-fn-reference-in-iterator': 'warn',
    'unicorn/prefer-string-slice': 'warn',
    'unicorn/explicit-length-check': 'warn',
    'unicorn/no-reduce': 'warn',
    '@typescript-eslint/ban-ts-comment': [
      'warn',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
        minimumDescriptionLength: 3,
      },
    ],
    // Avoid having to redefine story deps for this monorepo
    // https://github.com/benmosher/eslint-plugin-import/issues/458#issuecomment-468235671
    // FIXME: broke in eslint 7 update, check link
    'import/no-extraneous-dependencies': 'warn',
  },
  settings: {
    'import/resolver': {
      [path.resolve('./.eslint/resolver')]: {
        someConfig: '',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
  },
};
