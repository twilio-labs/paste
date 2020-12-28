import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import {Stack} from '@twilio-paste/core/stack';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {IndexPage} from './pages/IndexPage';
import {Loading} from './components/Loading';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Page1 = React.lazy(async () => import('./pages/Page1'));
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Page2 = React.lazy(async () => import('./pages/Page2'));

export const Index: React.FC = () => {
  return (
    <App>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Stack orientation="horizontal" spacing="space20">
            <Link to="/">Home</Link>
            <Link to="/page1">page 1</Link>
            <Link to="/page2">page 2</Link>
          </Stack>
          <Routes>
            <Route path="">
              <IndexPage />
            </Route>
            <Route path="page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
          </Routes>
        </BrowserRouter>
      </React.Suspense>
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
