import { datadogRum } from "@datadog/browser-rum";
import "@twilio-paste/design-tokens/dist/themes/twilio-dark/tokens.data-theme.css";
import "@twilio-paste/design-tokens/dist/themes/twilio/tokens.custom-properties.css";
import { Theme } from "@twilio-paste/theme";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from "next/script";
import * as React from "react";

import packageJSON from "../../../paste-core/core-bundle/package.json";
import { CookieConsent } from "../components/CookieConsent";
import { DATADOG_APPLICATION_ID, DATADOG_CLIENT_TOKEN, ENVIRONMENT_CONTEXT, SITE_BREAKPOINTS } from "../constants";
import { DarkModeContext } from "../context/DarkModeContext";
import { PreviewThemeContext } from "../context/PreviewThemeContext";
import { useDarkMode } from "../hooks/useDarkMode";
import * as gtag from "../lib/gtag";
import { SimpleStorage } from "../utils/SimpleStorage";
import { inCypress } from "../utils/inCypress";

const isProd = ENVIRONMENT_CONTEXT === "production";

const App = ({ Component, pageProps }: AppProps): React.ReactElement<HTMLElement> => {
  const router = useRouter();
  const localStorageKey = "cookie-consent-accepted";
  const [theme, toggleMode, componentMounted] = useDarkMode();
  const [previewTheme, setPreviewTheme] = React.useState<string | undefined>();
  const [cookiesAccepted, setCookiesAccepted] = React.useState<null | string>();

  React.useEffect(() => {
    const cookiesAcceptedLocalStorage = SimpleStorage.get(localStorageKey);
    // was there a previous acceptance
    let cookiesAcceptedMount = cookiesAcceptedLocalStorage;
    // if in cypress or on the opengraph share image generator, always say we rejected the cookies to not show the banner
    if (inCypress() || router.pathname === "/opengraph") {
      cookiesAcceptedMount = "false";
    }
    setCookiesAccepted(cookiesAcceptedMount);
    if (cookiesAcceptedLocalStorage === "true") {
      datadogRum.init({
        applicationId: DATADOG_APPLICATION_ID,
        clientToken: DATADOG_CLIENT_TOKEN,
        site: "datadoghq.com",
        env: ENVIRONMENT_CONTEXT,
        // enable filtering by cypress or human page views in DD
        service: inCypress() ? "cypress" : "paste",
        // paste core version
        version: packageJSON.version,
        // controls the percentage of overall sessions being tracked. It defaults to 100%
        sessionSampleRate: 100,
        // applied after the overall sample rate, and controls the percentage of sessions tracked as Browser RUM & Session Replay
        sessionReplaySampleRate: 20,
        trackUserInteractions: true,
        trackResources: true,
        trackLongTasks: true,
        defaultPrivacyLevel: "mask",
      });
      datadogRum.startSessionReplayRecording();
    }
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  React.useEffect(() => {
    setPreviewTheme(theme);
  }, [theme]);

  const handleCookieAccept = (): void => {
    setCookiesAccepted("true");
    SimpleStorage.set(localStorageKey, "true");
  };
  const handleCookieReject = (): void => {
    setCookiesAccepted("false");
    SimpleStorage.set(localStorageKey, "false");
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {cookiesAccepted === "true" && isProd && (
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
        useCSSVariables={true}
        customBreakpoints={SITE_BREAKPOINTS}
        disableAnimations={inCypress()}
        cacheProviderProps={{ key: "next" }}
      >
        <DarkModeContext.Provider value={{ theme, toggleMode, componentMounted }}>
          <PreviewThemeContext.Provider value={{ theme: previewTheme, selectTheme: setPreviewTheme }}>
            <Component {...pageProps} />
            {cookiesAccepted === null && <CookieConsent onAccept={handleCookieAccept} onReject={handleCookieReject} />}
          </PreviewThemeContext.Provider>
        </DarkModeContext.Provider>
      </Theme.Provider>
    </>
  );
};

export default App;
