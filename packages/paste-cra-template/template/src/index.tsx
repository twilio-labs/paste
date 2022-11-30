import React from 'react';
import ReactDOM from 'react-dom/client';
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

export const Index = (): JSX.Element => {
  return (
    <App>
      <React.Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Stack orientation="horizontal" spacing="space20">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/">Home</Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/page1">page 1</Link>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to="/page2">page 2</Link>
          </Stack>
          <Routes>
            <Route path="" element={<IndexPage />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </BrowserRouter>
      </React.Suspense>
    </App>
  );
};

Index.displayName = 'Index';

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

/**
 * If you want to start measuring performance in your app, pass a function
 * to log results (for example: reportWebVitals(console.log))
 * or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 */
// eslint-disable-next-line no-console
reportWebVitals(console.log);
