import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: pkg['main:dev'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'prop-types': [
          'array',
          'bool',
          'func',
          'number',
          'object',
          'string',
          'symbol',
          'any',
          'node',
          'element',
          'elementType',
          'instanceOf',
          'oneOf',
          'oneOfType',
          'arrayOf',
          'objectOf',
          'shape',
          'exact',
        ],
      },
    }),
    typescript({
      clean: true,
      typescript: require('typescript'),
      tsconfig: './tsconfig.build.json',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    process.env.NODE_ENV === 'production' ? terser() : null,
  ],
};
