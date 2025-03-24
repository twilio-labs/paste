const esbuild = require("esbuild");
const buildIconList = require("./build.icon-list");
const fs = require("fs");
const path = require("path");
const addJsExtensionPlugin = require("./tools/build/addJsExtensionPlugin");
const { EsmExternalsPlugin } = require("../../tools/build/plugins/EsmExternals");
const packageJson = require("./package.json");
const EXTRA_ENTRY_POINTS = ["./src/helpers/IconWrapper"];

const getWildcardExternalPeers = (peerDeps = {}) => {
  const externalDeps = Object.keys(peerDeps);
  const wildcardedExternalDeps = externalDeps.map((dep) => `${dep}/*`);
  return [...externalDeps, ...wildcardedExternalDeps];
};

const external = getWildcardExternalPeers(packageJson.peerDependencies);

// ESbuild config
const config = {
  entryPoints: [...buildIconList, ...EXTRA_ENTRY_POINTS],
  minify: process.env.NODE_ENV === "production",
  target: ["chrome66", "firefox58", "safari11", "edge79", "node12.19.0"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
  },
  bundle: true,
  external,
};

esbuild
  .build({
    ...config,
    format: "cjs",
    outdir: "cjs",
    banner: {
      js: `"use client";`,
    },
    plugins: [addJsExtensionPlugin],
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...config,
    format: "esm",
    outdir: "esm",
    banner: {
      js: `"use client";`,
    },
    plugins: [addJsExtensionPlugin],
  })
  .then(() => {
    const esmPackageJson = {
      name: `${packageJson.name}-module`,
      type: "module",
    };

    const esmPackageJsonPath = path.join("esm", "package.json");
    fs.writeFileSync(esmPackageJsonPath, JSON.stringify(esmPackageJson, null, 2), "utf8");
  })
  .catch(() => process.exit(1));
