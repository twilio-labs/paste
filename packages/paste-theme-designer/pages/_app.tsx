import * as React from 'react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {datadogRum} from '@datadog/browser-rum';
import {Theme} from '@twilio-paste/core/theme';
import * as Tokens from '@twilio-paste/core/design-tokens';
import type {GenericTokensShape} from '@twilio-paste/design-tokens/types/GenericTokensShape';
import {TokenContext} from '../context/TokenContext';

datadogRum.init({
  applicationId: process.env.NEXT_PUBLIC_DATADOG_APPLICATION_ID || '',
  clientToken: process.env.NEXT_PUBLIC_DATADOG_CLIENT_TOKEN || '',
  site: 'datadoghq.com',
  service: 'paste-remix',
  env: process.env.NEXT_PUBLIC_ENVIRONMENT_CONTEXT,
  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true,
});

function MyApp({Component, pageProps}: AppProps): JSX.Element {
  const [tokens, setTokens] = React.useState<GenericTokensShape>(Tokens);

  const updateToken = React.useCallback((bucket: keyof GenericTokensShape, key, value) => {
    setTokens((currentTokens) => ({
      ...currentTokens,
      [key]: value, // update the root key
      [bucket]: {...currentTokens[bucket], [key]: value}, // update the bucketed key
    }));
  }, []);

  const loadTokens = React.useCallback((newTokens) => {
    setTokens(newTokens);
  }, []);

  return (
    <TokenContext.Provider value={{tokens, updateToken, loadTokens}}>
      <Theme.Provider theme="default">
        <Head>
          <title>Paste Remix</title>
          <link rel="icon" href="/logo.svg" />

          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="TwilioPaste" key="twhandle" />
          <meta property="og:url" content="https://remix.twilio.design" key="ogurl" />
          <meta property="og:image" content="/og-card.png" key="ogimage" />
          <meta property="og:site_name" content="Paste Remix" key="ogsitename" />
          <meta property="og:title" content="Home: Paste Remix" key="ogtitle" />

          <meta
            property="og:description"
            content="Paste Remix is an interactive design tool aimed at creating custom themes for applications built using Paste."
            key="ogdesc"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FL02YG9W9H" />
          <script>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-FL02YG9W9H');
            `}
          </script>
        </Head>
        <Component {...pageProps} />
      </Theme.Provider>
    </TokenContext.Provider>
  );
}

export default MyApp;
