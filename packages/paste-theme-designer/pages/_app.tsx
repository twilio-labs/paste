import * as React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { datadogRum } from '@datadog/browser-rum';
import { Theme } from '@twilio-paste/core/theme';
import * as Tokens from '@twilio-paste/core/design-tokens';
import type { GenericTokensShape } from '@twilio-paste/design-tokens/types/GenericTokensShape';

import { TokenContext } from '../context/TokenContext';

datadogRum.init({
  applicationId: process.env.DATADOG_APPLICATION_ID || '',
  clientToken: process.env.DATADOG_CLIENT_TOKEN || '',
  site: 'datadoghq.com',
  service: 'paste-remix',
  env: process.env.ENVIRONMENT_CONTEXT,
  version: '1.0.0',
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

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [tokens, setTokens] = React.useState<GenericTokensShape>(Tokens);

  const updateToken = React.useCallback((bucket: keyof GenericTokensShape, key: any, value: any) => {
    setTokens((currentTokens) => ({
      ...currentTokens,
      [key]: value, // update the root key
      [bucket]: { ...currentTokens[bucket], [key]: value }, // update the bucketed key
    }));
  }, []);

  const loadTokens = React.useCallback((newTokens: any) => {
    setTokens(newTokens);
  }, []);

  return (
    <TokenContext.Provider value={{ tokens, updateToken, loadTokens }}>
      <Theme.Provider theme="twilio">
        <Head>
          <title>Home: Paste Remix</title>
          <link rel="icon" href="/logo.svg" />

          <meta name="twitter:card" content="summary_large_image" key="twcard" />
          <meta name="twitter:creator" content="TwilioPaste" key="twhandle" />
          <meta property="og:url" content="https://remix.twilio.design" key="ogurl" />
          <meta property="og:image" content={`${process.env.DEPLOY_URL}/og-card.png`} key="ogimage" />
          <meta property="og:site_name" content="Paste Remix" key="ogsitename" />
          <meta property="og:title" content="Home: Paste Remix" key="ogtitle" />

          <meta
            property="og:description"
            content="Paste Remix is an interactive design tool aimed at creating custom themes for applications built using Paste."
            key="ogdesc"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-FL02YG9W9H" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-FL02YG9W9H');
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </Theme.Provider>
    </TokenContext.Provider>
  );
}

export default MyApp;
