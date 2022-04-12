/**
 * @fileoverview All svgs should have a viewBox attribute
 * @author Glorilí Alejandro
 */
'use strict';

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require('../rules/svg-needs-viewBox.js');

const RuleTester = require('eslint').RuleTester;

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
});

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester();
ruleTester.run('svg-needs-viewBox', rule, {
  valid: ['const Foo = () => (<svg viewBox="0 0 20 20"><line /></svg>);'],

  invalid: [
    {
      code: 'const Foo = () => (<svg><line /></svg>);',
      errors: [
        {
          message: 'An svg must have a viewbox attribute',
          type: 'JSXElement',
        },
      ],
    },
  ],
});
