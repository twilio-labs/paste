import prettier from 'prettier';

import {
  type ComponentTypeProperties,
  formatValue,
  sortByRequiredProperties,
  tryPrettier,
  extractTypeExports,
} from '../generate-type-docs/utils';

describe('formatValue', () => {
  it('should return null for undefined input', () => {
    expect(formatValue(undefined)).toBeNull();
  });

  it('should return the value without quotes', () => {
    expect(formatValue('"hello"')).toBe('hello');
  });

  it('should return true for the string "true"', () => {
    expect(formatValue('true')).toBe(true);
  });

  it('should return false for the string "false"', () => {
    expect(formatValue('false')).toBe(false);
  });
});

describe('tryPrettier', () => {
  it('should format a valid type', () => {
    const typeName =
      '{ foo: string; bar: number; baz: boolean; bop: null; plip: undefined; obj: { a: string; b: number; }; a: string; b: number; c: boolean}';
    const expected =
      '{\n  foo: string\n  bar: number\n  baz: boolean\n  bop: null\n  plip: undefined\n  obj: { a: string; b: number }\n  a: string\n  b: number\n  c: boolean\n}';
    expect(tryPrettier(typeName)).toEqual(expected);
  });

  it('should return the original type if prettier fails', () => {
    const typeName = 'type MyType = { foo: string; bar: number }';
    jest.spyOn(prettier, 'format').mockImplementation(() => {
      throw new Error('prettier failed');
    });
    expect(tryPrettier(typeName)).toEqual(typeName);
  });
});

describe('sortByRequiredProperties', () => {
  it('should sort properties by name', () => {
    const properties: ComponentTypeProperties = {
      b: {type: 'string', required: true, externalProp: false},
      a: {type: 'string', required: true, externalProp: false},
      c: {type: 'string', required: true, externalProp: false},
    };
    const sortedProperties = sortByRequiredProperties(properties);
    expect(Object.keys(sortedProperties)).toEqual(['a', 'b', 'c']);
  });

  it('should sort required properties first', () => {
    const properties: ComponentTypeProperties = {
      b: {type: 'string', required: true, externalProp: false},
      a: {type: 'string', required: false, externalProp: false},
      c: {type: 'string', required: true, externalProp: false},
    };
    const sortedProperties = sortByRequiredProperties(properties);
    expect(Object.keys(sortedProperties)).toEqual(['b', 'c', 'a']);
  });

  it('should preserve property information', () => {
    const properties: ComponentTypeProperties = {
      b: {type: 'string', required: true, externalProp: false},
      a: {type: 'number', required: false, externalProp: false},
      c: {type: 'boolean', required: true, externalProp: false},
    };
    const sortedProperties = sortByRequiredProperties(properties);
    expect(sortedProperties).toEqual(properties);
  });
});

describe('extractTypeExports', () => {
  it('should extract type exports from code', () => {
    const code = `
      export type { ButtonProps } from './Button';
      export type { InputProps } from './Input';
    `;

    const expected = ['ButtonProps', 'InputProps'];
    const result = extractTypeExports(code);

    expect(result).toEqual(expected);
  });

  it('should handle multiple type exports in a single line', () => {
    const code = `
      export type { ButtonProps, InputProps } from './types';
    `;

    const expected = ['ButtonProps', 'InputProps'];
    const result = extractTypeExports(code);

    expect(result).toEqual(expected);
  });

  it('should handle no type exports', () => {
    const code = `
      import React from 'react';

      const MyComponent = () => {
        return <div>Hello World</div>;
      }

      export default MyComponent;
    `;

    const expected: string[] = [];
    const result = extractTypeExports(code);

    expect(result).toEqual(expected);
  });
});
