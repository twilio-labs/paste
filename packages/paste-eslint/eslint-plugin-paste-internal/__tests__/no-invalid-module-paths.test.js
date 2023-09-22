import { RuleTester } from 'eslint';

import rule from '../src/rules/no-invalid-module-paths';

const ruleTester = new RuleTester({
  parser: require.resolve('@typescript-eslint/parser'),
});
const { src } = rule.meta.messages;

ruleTester.run('no-invalid-module-paths', rule, {
  valid: [
    // @twilio-paste *value* level module paths that *do not* contain src
    { code: 'import {ButtonToggleStyles} from "@twilio-paste/button"' },
    { code: 'import ButtonToggleStyles from "@twilio-paste/button"' },
    { code: 'export {ButtonToggleStyles} from "@twilio-paste/button"' },
    { code: 'export * from "@twilio-paste/button"' },
    { code: 'import("@twilio-paste/button")' },
    { code: 'const { ButtonToggleStyles } = require("@twilio-paste/button")' },

    // *non* @twilio-paste *value* level module paths that *do* contain src
    { code: 'import {FooBarStyles} from "@foo/bar/src/styles"' },
    { code: 'import FooBarStyles from "@foo/bar/src/styles"' },
    { code: 'export {FooBarStyles} from "@foo/bar/src/styles"' },
    { code: 'export * from "@foo/bar/src/styles"' },
    { code: 'import("@foo/bar/src/styles")' },
    { code: 'const { FooBarStyles } = require("@foo/bar/src/styles")' },

    // @twilio-paste *type* level module paths that *do not* contain src
    { code: 'import type {ButtonToggleStyleTypes} from "@twilio-paste/button"' },
    { code: 'export type {ButtonToggleStyleTypes} from "@twilio-paste/button"' },

    // *non* @twilio-paste *type* level module paths that *do* contain src
    { code: 'import type {FooBarStyles} from "@foo/bar/src/styles"' },
    { code: 'export type {FooBarStyles} from "@foo/bar/src/styles"' },
  ],

  invalid: [
    // @twilio-paste *value* level module paths that *do* contain src
    {
      code: 'import {ButtonToggleStyles} from "@twilio-paste/button/src/styles"',
      errors: [{ message: src }],
    },
    {
      code: 'import ButtonToggleStyles from "@twilio-paste/button/src/styles"',
      errors: [{ message: src }],
    },
    {
      code: 'export {ButtonToggleStyles} from "@twilio-paste/button/src/styles"',
      errors: [{ message: src }],
    },
    {
      code: 'export * from "@twilio-paste/button/src/styles"',
      errors: [{ message: src }],
    },
    {
      code: 'import("@twilio-paste/button/src/styles")',
      errors: [{ message: src }],
    },
    {
      code: 'const { ButtonToggleStyles } = require("@twilio-paste/button/src/styles")',
      errors: [{ message: src }],
    },

    // @twilio-paste *type* level module paths that *do* contain src
    {
      code: 'import type {ButtonToggleStyleTypes} from "@twilio-paste/button/src/types"',
      errors: [{ message: src }],
    },
    {
      code: 'export type {ButtonToggleStyleTypes} from "@twilio-paste/button/src/types"',
      errors: [{ message: src }],
    },
  ],
});
