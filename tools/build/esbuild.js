const esbuild = require('esbuild');

function build(packageJson) {
  // Entry and Output file paths
  const entryPoints = [packageJson['main:dev']];
  const outFileCJS = packageJson['main'];
  const outFileESM = packageJson['module'];
  // Things we don't want to bundle
  const external = [...Object.keys(packageJson.peerDependencies || {})];

  // ESbuild config
  const config = {
    entryPoints,
    mainFields: ['module', 'main'],
    bundle: true,
    //minify: process.env.NODE_ENV === 'production',
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    external,
  };

  esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileCJS,
    })
    .catch(() => process.exit(1));

  esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileESM,
    })
    .catch(() => process.exit(1));
}

module.exports = {build};
