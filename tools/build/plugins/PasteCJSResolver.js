/**
 * ESBuild plugin to fix CJS builds in Paste
 * - Replaces icon imports from /esm/IconName in src to /cjs/IconName in dist.
 * - Replaces design-tokens' theme src code from tokens.es6 to tokens.common in dist.
 */
const PasteCJSResolverPlugin = {
  name: "PasteCJSResolver",
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setup(build) {
    // Change all ESM icon imports to CJS
    build.onResolve({ filter: /@twilio-paste\/icons\/esm\// }, ({ path }) => {
      return { path: path.replace("/esm/", "/cjs/"), external: true };
    });

    // Change all .es6 design-token imports to .common
    build.onResolve({ filter: /\/tokens.es6$/ }, ({ path }) => {
      return { path: path.replace(".es6", ".common"), external: true };
    });
  },
};

module.exports = { PasteCJSResolverPlugin };
