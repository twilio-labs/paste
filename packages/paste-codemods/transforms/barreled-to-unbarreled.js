const ComponentLookup = require("../tools/.cache/mappings.json");

module.exports = function barreledToUnbarreled(fileInfo, api, options) {
  const j = api.jscodeshift;
  const printOptions = options.printOptions || { quote: "single", tabWidth: 2, trailingComma: true };
  const root = j(fileInfo.source);
  const importLookups = {};

  const update = (path) => {
    const importSource = path.value.source.value;

    // If it isn't exactly from the package (i.e.: core/esm or core/dist etc) then skip it.
    if (importSource !== "@twilio-paste/core") {
      return;
    }

    const untransformedSpecifiers = [];
    const transformedSpecifiers = [];

    path.value.specifiers.forEach((s) => {
      if (ComponentLookup[s.imported.name]) {
        transformedSpecifiers.push(s);
      } else {
        untransformedSpecifiers.push(s);
      }
    });

    if (untransformedSpecifiers.length === 0) {
      path.prune();
    } else {
      path.value.specifiers = untransformedSpecifiers;
    }

    transformedSpecifiers.forEach((s) => {
      // This may need to check the value but the original lookup should provide that
      const properImport = ComponentLookup[s.imported.name];

      const lookedUpImport = importLookups[properImport];

      // Check if this exact import has been used previously. If it has push the specifier
      // into the import instead of generating a new one
      if (lookedUpImport) {
        lookedUpImport.specifiers.push(s);
      } else {
        const newImport = j.importDeclaration([s], j.literal(properImport));

        importLookups[properImport] = newImport;
        j(path).insertAfter(newImport);
      }
    });
  };

  return root.find(j.ImportDeclaration).forEach(update).toSource(printOptions);
};
