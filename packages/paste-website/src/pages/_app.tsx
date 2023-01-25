import * as React from 'react';
import type {AppProps} from 'next/app';
import Script from 'next/script';
import {useRouter} from 'next/router';

import * as gtag from '../lib/gtag';

const isProd = process.env.NODE_ENV === 'production';

const App = ({Component, pageProps}: AppProps): React.ReactElement => {
  const router = useRouter();
  React.useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {isProd && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true
            });
          `,
            }}
          />
        </>
      )}
      <Component {...pageProps} />
    </>
  );
};

export default App;
