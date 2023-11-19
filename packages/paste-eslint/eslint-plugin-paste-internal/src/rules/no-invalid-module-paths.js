module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Forbid invalid package module paths",
      category: "Possible Problems",
    },
    fixable: null,
    schema: [], // no options
    messages: {
      src: 'Invalid module path using "src" path. Use a bare module specifier instead.',
    },
  },

  create(context) {
    const checkModulePath = (path, node) => {
      if (path.startsWith("@twilio-paste") && path.includes("src")) {
        context.report({ messageId: "src", node });
      }
    };

    return createVisitors(checkModulePath);
  },
};

const createVisitors = (checkModulePath) => {
  const checkSource = (source, node) => {
    if (source?.type !== "Literal") return;
    if (typeof source?.value !== "string") return;
    checkModulePath(source.value, node);
  };

  const visitDeclaration = (node) => {
    checkSource(node.source, node);
  };

  const visitExpression = (node) => {
    const isImportCall = node.type === "ImportExpression";
    if (isImportCall) return checkSource(node.source, node);

    const isRequireCall =
      node.type === "CallExpression" && node.callee.name === "require" && node.arguments.length === 1;
    if (isRequireCall) return checkSource(node.arguments[0], node);
  };

  return {
    ImportDeclaration: visitDeclaration,
    ExportNamedDeclaration: visitDeclaration,
    ExportAllDeclaration: visitDeclaration,
    CallExpression: visitExpression,
    ImportExpression: visitExpression,
  };
};
