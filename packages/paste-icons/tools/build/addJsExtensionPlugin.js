const path = require("path");

const addJsExtensionPlugin = {
  name: "add-js-extension",
  setup(build) {
    build.onLoad({ filter: /\.tsx?$/ }, async (args) => {
      const fs = require("fs").promises;
      let contents = await fs.readFile(args.path, "utf8");

      // Replace the specific import statement
      contents = contents.replace(
        /import\s+\{\s*IconWrapper\s*\}\s+from\s+"\.\/helpers\/IconWrapper";/g,
        'import { IconWrapper } from "./helpers/IconWrapper.js";',
      );

      return {
        contents,
        loader: path.extname(args.path).slice(1), // Use appropriate loader based on file extension
      };
    });
  },
};

module.exports = addJsExtensionPlugin;
