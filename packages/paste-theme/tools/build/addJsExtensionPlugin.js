const path = require("path");

const addJsExtensionPlugin = {
  name: "add-js-extension-to-tokens",
  setup(build) {
    build.onLoad({ filter: /.ts$/ }, async (args) => {
      console.log("Running extension on file name: ", args.path);

      const fs = require("fs").promises;
      let contents = await fs.readFile(args.path, "utf8");

      // Replace occurrences of tokens.es6 with tokens.es6.js
      contents = contents.replace(/tokens\.es6\b/g, "tokens.es6.js");
      return {
        contents,
        loader: path.extname(args.path).slice(1), // Use appropriate loader based on file extension
      };
    });
  },
};

module.exports = { addJsExtensionPlugin };
