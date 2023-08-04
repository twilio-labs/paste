import * as React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import {useRouter} from 'next/router';
import {datadogRum} from '@datadog/browser-rum';
import {Theme} from '@twilio-paste/theme';

import packageJSON from '../../../paste-core/core-bundle/package.json';
import {CookieConsent} from '../components/CookieConsent';
import {useDarkMode} from '../hooks/useDarkMode';
import * as gtag from '../lib/gtag';
import {DarkModeContext} from '../context/DarkModeContext';
import {inCypress} from '../utils/inCypress';
import {PreviewThemeContext} from '../context/PreviewThemeContext';
import {SimpleStorage} from '../utils/SimpleStorage';
import {SITE_BREAKPOINTS, DATADOG_APPLICATION_ID, DATADOG_CLIENT_TOKEN, ENVIRONMENT_CONTEXT} from '../constants';

const isProd = ENVIRONMENT_CONTEXT === 'production';

const App = ({Component, pageProps}: AppProps): React.ReactElement => {
  const localStorageKey = 'cookie-consent-accepted';
  const [theme, toggleMode, componentMounted] = useDarkMode();
  const [previewTheme, setPreviewTheme] = React.useState('twilio');
  const [cookiesAccepted, setCookiesAccepted] = React.useState<null | string>();

  React.useEffect(() => {
    const cookiesAcceptedLocalStorage = SimpleStorage.get(localStorageKey);
    setCookiesAccepted(cookiesAcceptedLocalStorage);
    if (cookiesAcceptedLocalStorage === 'true') {
      datadogRum.init({
        applicationId: DATADOG_APPLICATION_ID,
        clientToken: DATADOG_CLIENT_TOKEN,
        site: 'datadoghq.com',
        env: ENVIRONMENT_CONTEXT,
        // enable filtering by cypress or human page views in DD
        service: inCypress() ? 'cypress' : 'paste',
        // paste core version
        version: packageJSON.version,
        // controls the percentage of overall sessions being tracked. It defaults to 100%
        sessionSampleRate: 100,
        // applied after the overall sample rate, and controls the percentage of sessions tracked as Browser RUM & Session Replay
        sessionReplaySampleRate: 20,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: 'mask-user-input',
      });
      datadogRum.startSessionReplayRecording();
    }
  }, []);

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

  const handleCookieAccept = (): void => {
    setCookiesAccepted('true');
    SimpleStorage.set(localStorageKey, 'true');
  };
  const handleCookieReject = (): void => {
    setCookiesAccepted('false');
    SimpleStorage.set(localStorageKey, 'false');
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {cookiesAccepted === 'true' && isProd && (
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
            {cookiesAccepted === null && <CookieConsent onAccept={handleCookieAccept} onReject={handleCookieReject} />}
          </PreviewThemeContext.Provider>
        </DarkModeContext.Provider>
      </Theme.Provider>
    </>
  );
};

export default App;
