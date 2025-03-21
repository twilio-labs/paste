const esbuild = require("esbuild");
const buildIconList = require("./build.icon-list");

const EXTRA_ENTRY_POINTS = ["src/helpers/IconWrapper.tsx"];

// ESbuild config
const config = {
  entryPoints: [...buildIconList, ...EXTRA_ENTRY_POINTS],
  bundle: false,
  minify: process.env.NODE_ENV === "production",
  target: ["chrome66", "firefox58", "safari11", "edge79", "node12.19.0"],
  define: {
    "process.env.NODE_ENV": `"${process.env.NODE_ENV}"`,
  },
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
  .catch(() => process.exit(1));
