import type { JSX } from "react";
/*
 * Patch to help run react-dom tests in jest for versions 16, 17 and 18
 * As of react 18 there are new rendering API's - using react-dom/clients createRoot method to render to the dom
 * https://reactjs.org/blog/2022/03/29/react-v18.html#new-client-and-server-rendering-apis
 * This patch checks the react-dom version and will render the appropriate api accordingly
 */
import ReactDOM from "react-dom";

type createRootReturnType = { render: (elem: JSX.Element) => void };

let ReactDOMClient;
try {
  // eslint-disable-next-line global-require
  ReactDOMClient = require("react-dom/client");
} catch {
  // ignore.
}

function attachRootToDom(domNode: HTMLElement): createRootReturnType {
  if (ReactDOMClient) {
    const { createRoot } = ReactDOMClient;
    return createRoot(domNode);
  }

  // fallback for React verions 17 and under
  return {
    render: (elem: JSX.Element) => {
      ReactDOM.render(elem, domNode);
    },
  };
}

export { attachRootToDom as createRoot };
