const path = require("path");
const esbuild = require("esbuild");
const fs = require("fs");
const packageJson = require("./package.json");
const { esbuildPluginVersionInjector } = require("esbuild-plugin-version-injector");
const { generateESMPackageJson } = require("./tools/build/generateESMPackageJson");
const { PasteCJSResolverPlugin } = require("../../../tools/build/plugins/PasteCJSResolver");
const { EsmExternalsPlugin } = require("../../../tools/build/plugins/EsmExternals");

function getAllEntryPoints() {
  const entryPoints = [packageJson["main:dev"]];
  const files = fs.readdirSync("src/").map((file) => path.join("src/", file));

  return [entryPoints, ...files];
}

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
async function build() {
  // Entry and Output file paths
  const entryPoints = getAllEntryPoints();
  const outFileCJS = packageJson.main;
  const outFileESM = packageJson.module;
  // Things we don't want to bundle
  const external = getWildcardExternalPeers(packageJson.peerDependencies);

  // ESbuild config
  const config = {
    color: true,
    entryPoints,
    /**
     * From docs:
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
    mainFields: ["module", "main"],
    // Fixes issues related to SSR (website builds)
    platform: "browser",
    bundle: true,
    /**
     * Sets the target environment so the code is changed into a format that
     * works  with node12 and the listed browsers
     */
    target: ["chrome100", "firefox100", "safari14", "edge100", "node18.16.0"],
    define: {
      "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
    },
    external,
  };

  const versionInjectorConfig = {
    packageJsonPath: path.join(__dirname, "../../packages/paste-core/core-bundle/package.json"),
  };

  // Minified
  await esbuild
    .build({
      ...config,
      minifyWhitespace: true,
      minifyIdentifiers: false,
      minifySyntax: true,
      format: "cjs",
      outdir: "dist/",
      banner: {
        js: `"use client";`,
      },
      // Needed to fix ES6 module import paths for CJS builds
      plugins: [PasteCJSResolverPlugin, esbuildPluginVersionInjector(versionInjectorConfig)],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  await esbuild
    .build({
      ...config,
      minifyWhitespace: true,
      minifyIdentifiers: false,
      minifySyntax: true,
      platform: "neutral",
      format: "esm",
      outdir: "dist/esm",
      banner: {
        js: `"use client";`,
      },
      // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
      plugins: [EsmExternalsPlugin({ externals: external }), esbuildPluginVersionInjector(versionInjectorConfig)],
    })
    .catch((error) => {
      console.error(error);
      // eslint-disable-next-line unicorn/no-process-exit
      return process.exit(1);
    });

  // Debug
  //   await esbuild
  //     .build({
  //       ...config,
  //       format: "cjs",
  //       outfile: outFileCJS.replace(".js", ".debug.js"),
  //       // Needed to fix ES6 module import paths for CJS builds
  //       plugins: [PasteCJSResolverPlugin, esbuildPluginVersionInjector(versionInjectorConfig)],
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // eslint-disable-next-line unicorn/no-process-exit
  //       return process.exit(1);
  //     });

  //   await esbuild
  //     .build({
  //       ...config,
  //       format: "esm",
  //       outfile: outFileESM.replace(".es.js", ".debug.es.js"),
  //       // Needed to fix a bug with replacing require with import statements https://github.com/evanw/esbuild/issues/566
  //       plugins: [EsmExternalsPlugin({ externals: external }), esbuildPluginVersionInjector(versionInjectorConfig)],
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       // eslint-disable-next-line unicorn/no-process-exit
  //       return process.exit(1);
  //     });

  generateESMPackageJson(packageJson, "dist/esm");
}

build();
