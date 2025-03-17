const { build } = require("../../../tools/build/esbuild.cjs");

build(require("./package.json"));
