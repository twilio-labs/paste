import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IndexPage} from './pages/IndexPage';

export const Index: React.FC = () => {
  return (
    <App>
      <IndexPage />
    </App>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
  document.querySelector('#root')
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
