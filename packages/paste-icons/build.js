const esbuild = require('esbuild');
const buildIconList = require('./build.icon-list');

const EXTRA_ENTRY_POINTS = ['./src/helpers/IconWrapper'];

// ESbuild config
const config = {
  entryPoints: [...buildIconList, ...EXTRA_ENTRY_POINTS],
  bundle: false,
  minify: process.env.NODE_ENV === 'production',
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
  },
};

esbuild
  .build({
    ...config,
    format: 'cjs',
    outdir: 'cjs',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...config,
    format: 'esm',
    outdir: 'esm',
  })
  .catch(() => process.exit(1));
