// Based on https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["eslint-comments", "jest", "unicorn", "promise", "@emotion/eslint-plugin", "paste-internal"],
  extends: [
    "twilio-react",
    "twilio-ts",
    "plugin:jest/recommended",
    "plugin:eslint-comments/recommended",
    "plugin:cypress/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "plugin:paste-internal/all",
    "plugin:storybook/recommended",
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  rules: {
    // Makes no sense to allow type inference for expression parameters, but require typing the response
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    eqeqeq: ["error", "smart"],
    // Doesnt really work in our use-cases: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-default-props.m
    "react/require-default-props": "off",
    /**
     * Disbled this rule because the current failures are stories, test files, and index files.
     * - story files need to export stories even tho no other module uses them for storybook to render
     * - test files don't need to export anything
     * - for some reason, index files that just say "export * from '../blah'" fail saying they don't export anything, even tho they do
     * This rule is designed for a product, not a series of libraries.
     */
    "import/no-unused-modules": [0],
    // There are times when we have to use require, so maybe this should stay a warning
    "@typescript-eslint/no-require-imports": "warn",
    // There are times when we have to use var requires, so maybe this should stay a warning (example: importing token files on the website)
    "@typescript-eslint/no-var-requires": "warn",
    // We spread props a lot, for example for combobox hooks
    "react/jsx-props-no-spreading": "off",
    // This rule doesn't work with typescript, disabled in favor of the typescript version
    "no-duplicate-imports": "off",
    "@typescript-eslint/no-duplicate-imports": "error",
    // We have our own prettier config that runs in its own CI check, so we don't need ESLint to do it too
    "prettier/prettier": "off",
    // This extends twilio-style's camelcase rule and adds an allow list
    camelcase: [
      "error",
      {
        properties: "always",
        ignoreDestructuring: true,
        allow: [
          // Box pseudoselectors are allowed
          "_focus_hover",
          "_focus_placeholder",
          "_checked_hover",
          "_disabled_focus",
          "_selected_hover",
          "_selected_focus",
          "_selected_focusVisible",
          "_pressed_focus",
          "_pressed_hover",
          "_pressed_disabled",
          "_pressed_active",
          "__moz_focus_inner",
          "__webkit_datetime_edit",
          "__webkit_calendar_picker_indicator_hover",
          "__webkit_inner_spin_button",
          "__webkit_outer_spin_button",
          // these are variant names we use as keys in style objects
          "destructive_link",
          "destructive_secondary",
          "circle_small",
          "rounded_small",
          "icon_small",
          "error_counter",
          "neutral_counter",
          // unstable props are allowed
          "^unstable_",
          // this is a temporary prop, if the console patch is removed from components this can be removed too
          "__console_patch",
          // token types relating to color contrast aren't camelcase, but they should probably be refactored
          "text_contrast_pairing",
          "uicontrol_contrast_pairing",
          "data_visualization_contrast_pairing",
          // These are from the website and are keys returned from airtable, they should be refactored
          "Design_committee_review",
          "Engineer_committee_review",
          "external_link",
          "Product_suitability",
          "Public_Description__from_System_",
          "Release_Description",
          "Release_feature_name",
          "page_path",
          "event_category",
          "event_label",
        ],
      },
    ],
    /**
     * TEMPORARY TWILIO STYLE OVERRIDES
     * There are PRs open to update these rules in twilio-style
     */
    "react/no-multi-comp": [
      "error",
      {
        ignoreStateless: true,
      },
    ],
    "jsx-a11y/label-has-associated-control": [
      2,
      {
        assert: "either",
        depth: 3,
      },
    ],
    /**
     * FIXES FOR ANOTHER TICKET
     * these take a little more work to fix (there are 535 errors)
     */
    "@typescript-eslint/no-floating-promises": "off",
    "react-hooks/rules-of-hooks": "off",
    "react/jsx-no-bind": "off",
    "react/no-unused-prop-types": "off",
    "no-negated-condition": "off",
    "no-eq-null": "off",
    "no-unneeded-ternary": "off",
    "no-nested-ternary": "off",
    "no-process-exit": "off",
    "no-new": "off",
    "default-case": "off",
    "guard-for-in": "off",
    "callback-return": "off",
    "sonarjs/cognitive-complexity": "off",
    "sonarjs/no-nested-template-literals": "off",
    "sonarjs/no-identical-functions": "off",
    complexity: "off",
    // this rule should be kept warning once it is fixed
    "sonarjs/no-duplicate-string": "warn",
    /** MISC OVERRIDES */

    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    "@typescript-eslint/comma-dangle": ["error", "only-multiline"],
    "@typescript-eslint/no-shadow": [
      "error",
      {
        ignoreFunctionTypeParameterNameValueShadow: true,
      },
    ],
    // This rule tells people to do something (import foo = require('foo')) which doesn't work
    // with babel compiled typescript.
    "@typescript-eslint/no-var-requires": "off",
    // Warn about incorrect type imports
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    "@typescript-eslint/consistent-type-imports": "warn",
    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",
    // We don't really have a style yet.  To be discussed
    // https://github.com/sindresorhus/eslint-plugin-unicorn/blob/master/docs/rules/filename-case.md
    "unicorn/filename-case": "off",
    "unicorn/no-null": "off",
    "unicorn/no-reduce": "off",
    "unicorn/no-fn-reference-in-iterator": "off",
    // weirdly specific
    "unicorn/import-style": "off",
    "unicorn/prefer-ternary": "off",
    // Too big of a change
    "unicorn/numeric-separators-style": "off",
    // Mixed ts and node code base
    "unicorn/prefer-module": "warn",
    // This conflicts with consistent-return
    "unicorn/no-useless-undefined": "off",
    // New rules
    "unicorn/no-array-reduce": "off",
    "unicorn/no-array-for-each": "off",
    "unicorn/prefer-dom-node-dataset": "off",
    "unicorn/no-lonely-if": "off",
    "unicorn/prefer-export-from": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/consistent-destructuring": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/prefer-regexp-test": "off",
    "unicorn/no-new-array": "off",
    "unicorn/prefer-object-from-entries": "off",
    // We don't use jasmine and this clashes with danger js
    "jest/no-jasmine-globals": "off",
    "jest/no-conditional-expect": "off",
  },
  overrides: [
    {
      files: [
        "**/stories/**/*.tsx",
        "**/__tests__/*.spec.{ts,tsx}",
        "**/__tests__/*.test.{ts,tsx}",
        "**/__fixtures__/*.tsx",
        "**/__test__/*.spec.{ts,tsx}",
        "performance-benchmarks/**/*.tsx",
      ],
      rules: {
        // stories and tests aren't public, they don't need display names
        "react/display-name": "off",
        // we use empty functions in stories and tests to mock components
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
};
