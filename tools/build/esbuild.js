const esbuild = require('esbuild');

// https://github.com/sindresorhus/escape-string-regexp but it's esm and our node scripts
// can't handle importing them, so copy pasta'd here as it doesn't seem like a big deal.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function escapeStringRegexp(string) {
  if (typeof string !== 'string') {
    throw new TypeError('Expected a string');
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  // eslint-disable-next-line unicorn/better-regex
  return string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function makeFilter(externals) {
  return new RegExp(
    // eslint-disable-next-line prefer-template
    '^(' + externals.map(escapeStringRegexp).join('|') + ')(\\/.*)?$' // TODO support for query strings?
  );
}

const NAME = 'esm-externals';
const NAMESPACE = NAME;

// this is a modified version of https://github.com/remorses/esbuild-plugins/tree/master/esm-externals
// this plugin worked, but was a little over the top in that it tried to convert existing import
// statements too, not just require calls. That would lead to correct import statements like
// import JSON from '@twilio-paste/package/jsonfile.json'
// to be converted incorrectly to
// import * as JSON from '@twilio-paste/pacakge/jsonfile.json'
// which would then blow up webpack 5. By targeting only require statements, we solve this
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function EsmExternalsPlugin({externals}) {
  return {
    name: NAME,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setup(build) {
      const filter = makeFilter(externals);
      build.onResolve({filter: /.*/, namespace: NAMESPACE}, (args) => {
        return {
          path: args.path,
          external: true,
        };
      });
      build.onResolve({filter}, (args) => {
        if (args.kind !== 'import-statement') {
          return {
            path: args.path,
            namespace: NAMESPACE,
          };
        }
      });
      build.onLoad({filter: /.*/, namespace: NAMESPACE}, (args) => {
        return {
          contents: `export * as default from ${JSON.stringify(args.path)}; export * from ${JSON.stringify(
            args.path
          )};`,
        };
      });
    },
  };
}

/**
 * ESBuild plugin to fix CJS builds in Paste
 * - Replaces icon imports from /esm/IconName in src to /cjs/IconName in dist.
 * - Replaces design-tokens' theme src code from tokens.es6 to tokens.common in dist.
 */
const PasteCJSResolverPlugin = {
  name: 'PasteCJSResolver',
  // eslint-disable-next-line @typescript-eslint/no-shadow
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
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getWildcardExternalPeers = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function build(packageJson) {
  // Entry and Output file paths
  const entryPoints = [packageJson['main:dev']];
  const outFileCJS = packageJson.main;
  const outFileESM = packageJson.module;
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
    target: ['chrome66', 'firefox58', 'safari11', 'edge79', 'node12.19.0'],
    define: {
      'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`,
    },
    external,
  };

  // Minified
  await esbuild
    .build({
      ...config,
      minify: true,
      format: 'cjs',
      outfile: outFileCJS,
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  await esbuild
    .build({
      ...config,
      minify: true,
      format: 'esm',
      outfile: outFileESM,
      // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
      plugins: [EsmExternalsPlugin({externals: external})],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  // Debug
  await esbuild
    .build({
      ...config,
      format: 'cjs',
      outfile: outFileCJS.replace('.js', '.debug.js'),
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  await esbuild
    .build({
      ...config,
      format: 'esm',
      outfile: outFileESM.replace('.es.js', '.debug.es.js'),
      // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
      plugins: [EsmExternalsPlugin({externals: external})],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });
}

module.exports = {build};
