import * as React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {useRouter} from 'next/router';
import {datadogRum} from '@datadog/browser-rum';
import {Theme} from '@twilio-paste/theme';

import packageJSON from '../../../paste-core/core-bundle/package.json';
import {useDarkMode} from '../hooks/useDarkMode';
import * as gtag from '../lib/gtag';
import {DarkModeContext} from '../context/DarkModeContext';
import {inCypress} from '../utils/inCypress';
import {PreviewThemeContext} from '../context/PreviewThemeContext';
import {SITE_BREAKPOINTS, DATADOG_APPLICATION_ID, DATADOG_CLIENT_TOKEN, ENVIRONMENT_CONTEXT} from '../constants';

const isProd = process.env.NODE_ENV === 'production';

datadogRum.init({
  applicationId: DATADOG_APPLICATION_ID,
  clientToken: DATADOG_CLIENT_TOKEN,
  site: 'datadoghq.com',
  env: ENVIRONMENT_CONTEXT,
  service: 'paste',
  // paste core version
  version: packageJSON.version,
  sampleRate: 100,
  trackInteractions: true,
});

const App = ({Component, pageProps}: AppProps): React.ReactElement => {
  const [theme, toggleMode, componentMounted] = useDarkMode();
  const [previewTheme, setPreviewTheme] = React.useState('twilio');

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

  React.useEffect(() => {
    setPreviewTheme(theme);
  }, [theme]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
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
      <Theme.Provider
        theme={theme}
        customBreakpoints={SITE_BREAKPOINTS}
        disableAnimations={inCypress()}
        cacheProviderProps={{key: 'next'}}
      >
        <DarkModeContext.Provider value={{theme, toggleMode, componentMounted}}>
          <PreviewThemeContext.Provider value={{theme: previewTheme, selectTheme: setPreviewTheme}}>
            <Component {...pageProps} />
          </PreviewThemeContext.Provider>
        </DarkModeContext.Provider>
      </Theme.Provider>
    </>
  );
};

export default App;
