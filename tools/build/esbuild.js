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
      return {path: path.replace('/esm/', '/cjs/'), external: true};
    });

    // Change all .es6 design-token imports to .common
    build.onResolve({filter: /\/tokens.es6$/}, ({path}) => {
      return {path: path.replace('.es6', '.common'), external: true};
    });
  },
};

/**
 * ESBuild handles externals literally so that `@twilio-paste/design-tokens` won't
 * get bundled, but `@twilio-paste/design-tokens/dist/theme/sengrid/tokens` will.
 * This function adds a wildcard lookup for all externals.
 *
 * Note: adding `/*` breaks external-ing the normal `@twilio-paste/design-tokens` because
 * of the forward slash, and simply adding `*` to the end seems error prone, which
 * is why we duplicate to add `/*`.
 *
 * @param {JSON} peerDeps
 * @returns {Array<string>} externals
 */
const getWildcardExternalPeers = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

function build(packageJson) {
  // Entry and Output file paths
  const entryPoints = [packageJson['main:dev']];
  const outFileCJS = packageJson['main'];
  const outFileESM = packageJson['module'];
  // Things we don't want to bundle
  const external = getWildcardExternalPeers(packageJson.peerDependencies);

  // ESbuild config
  const config = {
    color: true,
    entryPoints,
    /** From docs:
     * The main fields setting is set to main,module. This means tree shaking
     * will likely not happen for packages that provide both module and main
     * since tree shaking works with ECMAScript modules but not with CommonJS
     * modules.
     * Unfortunately some packages incorrectly treat module as meaning
     * "browser code" instead of "ECMAScript module code" so this default
     * behavior is required for compatibility. You can manually configure the
     * main fields setting to module,main if you want to enable tree shaking
     * and know it is safe to do so.
     */
    mainFields: ['module', 'main'],
    // Fixes issues related to SSR (website builds)
    platform: 'node',
    bundle: true,
    // Sets the target environment so the code is changed into a format that
    // works  with node12 and the listed browsers
    target: ['chrome58', 'firefox57', 'safari11', 'edge16', 'node12.19.0'],
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    external,
  };

  // Minified
  esbuild
    .build({
      ...config,
      minify: true,
      format: 'cjs',
      outfile: outFileCJS,
      // outdir: 'dist',
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin],
    })
    .catch((error) => {
      console.log(error);
      process.exit(1);
    });

  esbuild
    .build({
      ...config,
      minify: true,
      format: 'esm',
      outfile: outFileESM,
    })
    .catch(() => process.exit(1));

  // Debug
  esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileCJS.replace('.js', '.debug.js'),
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin],
    })
    .catch(() => process.exit(1));

  esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileESM.replace('.es.js', '.debug.es.js'),
    })
    .catch(() => process.exit(1));
}

module.exports = {build};
