const esbuild = require("esbuild");
const path = require("path");
const fs = require("fs");
const buildIconList = require("./build.icon-list");
const addJsExtensionPlugin = require("./tools/build/addJsExtensionPlugin");
const packageJson = require("./package.json");

const EXTRA_ENTRY_POINTS = ["src/helpers/IconWrapper.tsx"];

// Function to generate a package.json file for the ESM output
function generateESMPackageJson(packageJson, esmOutputDir) {
  if (esmOutputDir.includes("esm")) {
    const esmPackageJson = {
      name: `${packageJson.name}-module`,
      type: "module",
    };

    const esmPackageJsonPath = path.join(esmOutputDir, "package.json");
    fs.writeFileSync(esmPackageJsonPath, JSON.stringify(esmPackageJson, null, 2), "utf8");
  }
}

// ESbuild config
const config = {
  entryPoints: [...buildIconList, ...EXTRA_ENTRY_POINTS],
  bundle: false,
  minify: process.env.NODE_ENV === "production",
  target: ["chrome66", "firefox58", "safari11", "edge79", "node12.19.0"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
  },
  plugins: [addJsExtensionPlugin],
};

esbuild
  .build({
    ...config,
    format: "cjs",
    outdir: "cjs",
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...config,
    format: "esm",
    outdir: "esm",
  })
  .then(() => {
    // Generate the ESM-specific package.json
    generateESMPackageJson(packageJson, "esm");
  })
  .catch(() => process.exit(1));
