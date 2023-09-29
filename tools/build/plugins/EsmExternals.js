// https://github.com/sindresorhus/escape-string-regexp but it's esm and our node scripts
// can't handle importing them, so copy pasta'd here as it doesn't seem like a big deal.
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function escapeStringRegexp(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a string");
  }

  // Escape characters with special meaning either inside or outside character sets.
  // Use a simple backslash escape when it’s always valid, and a `\xnn` escape when the simpler form would be disallowed by Unicode patterns’ stricter grammar.
  // eslint-disable-next-line unicorn/better-regex
  return string.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function makeFilter(externals) {
  return new RegExp(
    // eslint-disable-next-line prefer-template
    "^(" + externals.map(escapeStringRegexp).join("|") + ")(\\/.*)?$", // TODO support for query strings?
  );
}

const NAME = "esm-externals";
const NAMESPACE = NAME;

// this is a modified version of https://github.com/remorses/esbuild-plugins/tree/master/esm-externals
// this plugin worked, but was a little over the top in that it tried to convert existing import
// statements too, not just require calls. That would lead to correct import statements like
// import JSON from '@twilio-paste/package/jsonfile.json'
// to be converted incorrectly to
// import * as JSON from '@twilio-paste/pacakge/jsonfile.json'
// which would then blow up webpack 5. By targeting only require statements, we solve this
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function EsmExternalsPlugin({ externals }) {
  return {
    name: NAME,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    setup(build) {
      const filter = makeFilter(externals);
      build.onResolve({ filter: /.*/, namespace: NAMESPACE }, (args) => {
        return {
          path: args.path,
          external: true,
        };
      });
      build.onResolve({ filter }, (args) => {
        if (args.kind !== "import-statement") {
          return {
            path: args.path,
            namespace: NAMESPACE,
          };
        }
      });
      build.onLoad({ filter: /.*/, namespace: NAMESPACE }, (args) => {
        return {
          contents: `export * as default from ${JSON.stringify(args.path)}; export * from ${JSON.stringify(
            args.path,
          )};`,
        };
      });
    },
  };
}

module.exports = { EsmExternalsPlugin };
