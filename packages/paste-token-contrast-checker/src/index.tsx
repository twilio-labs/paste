import * as React from "react";
import * as ReactDOM from "react-dom";

import App from "./App";
import { IndexPage } from "./pages/IndexPage";
import reportWebVitals from "./reportWebVitals";

export const Index = (): JSX.Element => {
  return (
    <App>
      <IndexPage />
    </App>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
