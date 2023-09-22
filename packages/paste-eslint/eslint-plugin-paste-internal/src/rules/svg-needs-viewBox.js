/**
 * @fileoverview All svgs should have a viewBox attribute
 * @author Glorilí Alejandro
 */

/*
 * This function takes in a node and recursively tries to find its JSXIdentifier node.
 * If it finds a node's JSXIdentifier node, it returns the JSXIdentifier node.
 * If it doesn't find a JSXIdentifier node, it returns undefined.
 */
const getJSXIdentifier = (node) => {
  if (node === undefined) {
    return;
  }
  if (node.type === "JSXIdentifier") {
    return node;
  }
  if (node.name !== undefined) {
    return getJSXIdentifier(node.name);
  }
  if (node.openingElement !== undefined) {
    return getJSXIdentifier(node.openingElement);
  }
  return undefined;
};

module.exports = {
  meta: {
    type: "problem",
  },

  create(context) {
    return {
      /*
       * JSXElement() is a selector that allows us to query the AST (Abstract Syntax Tree)
       * ESLint traverses and gives us all the JSXElement nodes to work with.
       * More info here: https://eslint.org/docs/developer-guide/selectors
       * Helpful AST explorer here: https://astexplorer.net/
       */
      JSXElement(node) {
        /*
         * Information about whether a JSXElement is an svg and what a JSXElement's attributes
         * are live that JSXElement's openingElement node.
         */
        const elementDetails = node.openingElement;

        /*
         *If the JSXElement is an svg, the openingElement's name will be JSXIdentifier,
         *and that JSXIdentifier node's name will be 'svg'. If there is no JSXIdentifier,
         *getting it with the helper function will return undefined. The '|| {}' snippet is added to
         *create a falsey result from this undefined return.
         */
        if (getJSXIdentifier(elementDetails)?.name === "svg") {
          /*
           * There can be multiple attributes, so we go thru each attribute
           * to see if any are viewBox
           */
          for (const attribute of elementDetails.attributes) {
            /*
             * Each attribute node is described by its own JSXIdentifier. If it's a viewBox attribute,
             * the name of this JSXIdentifer node will be 'viewBox'.
             */
            if (getJSXIdentifier(attribute).name === "viewBox") {
              // If any attribute is 'viewBox', we are done here.
              return;
            }
          }

          /*
           * If we are in a JSXElement that is an svg (which in here, we know we are)
           * and we haven't exited out already from 'viewBox' being present in the
           * attributes in the above check, then we need to report this node.
           * It is an svg that does not have a viewBox attribute. Bad node!
           */
          context.report({
            node,
            message: "An svg must have a viewbox attribute",
          });
        }
      },
    };
  },
};
