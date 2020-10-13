import typescript from 'rollup-plugin-typescript2';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import pkg from './package.json';
import {rollupIconList} from './rollup.icon-list';

export default {
  input: rollupIconList,
  output: [
    {
      dir: 'cjs',
      format: 'cjs',
    },
    {
      dir: 'esm',
      format: 'esm',
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      clean: true,
      typescript: require('typescript'),
      tsconfig: './tsconfig.build.json',
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    process.env.NODE_ENV === 'production' ? terser({output: {comments: false}}) : null,
  ],
};
