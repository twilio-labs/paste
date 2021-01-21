const esbuild = require('esbuild');

/**
 * ESBuild plugin to fix CJS builds in Paste
 * - Replaces icon imports from /esm/IconName in src to /cjs/IconName in dist.
 * - Replaces design-tokens' theme src code from tokens.es6 to tokens.common in dist.
 */
const PasteCJSResolverPlugin = {
  name: 'PasteCJSResolver',
  setup(build) {
    // Change all ESM icon imports to CJS
    build.onResolve({filter: /@twilio-paste\/icons\/esm\//}, ({path}) => {
      return {path: require.resolve(path).replace('/esm/', '/cjs/')};
    });

    // Change all .es6 design-token imports to .common
    build.onResolve({filter: /tokens.es6$/}, ({path}) => {
      return {path: require.resolve(path).replace('es6', 'common')};
    });
  },
};

function build(packageJson) {
  // Entry and Output file paths
  const entryPoints = [packageJson['main:dev']];
  const outFileCJS = packageJson['main'];
  const outFileESM = packageJson['module'];
  // Things we don't want to bundle
  const external = [...Object.keys(packageJson.peerDependencies || {})];

  // ESbuild config
  const config = {
    color: true,
    entryPoints,
    mainFields: ['module', 'main'],
    bundle: true,
    platform: 'node',
    target: ['chrome58', 'firefox57', 'safari11', 'edge16', 'node12.19.0'],
    minify: process.env.NODE_ENV === 'production',
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
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin],
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
