//  Solution from https://github.com/evanw/esbuild/issues/566
const PasteExternalCjsToEsmPlugin = (external) => ({
  name: "external",
  setup(build) {
    const escaped = (text) => `^${text.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}$`;
    const filter = new RegExp(external.map(escaped).join("|"));
    build.onResolve({ filter: /.*/, namespace: "external" }, (args) => ({
      path: args.path,
      external: true,
    }));
    build.onResolve({ filter }, (args) => ({
      path: args.path,
      namespace: "external",
    }));
    build.onLoad({ filter: /.*/, namespace: "external" }, (args) => ({
      contents: `export * from ${JSON.stringify(args.path)}`,
    }));
  },
});

module.exports = { PasteExternalCjsToEsmPlugin };
