import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { Theme } from '@twilio-paste/core/theme';

const MyApp: React.FC<React.PropsWithChildren<AppProps>> = ({ Component, pageProps }) => {
  return (
    <Theme.Provider theme="default">
      <Component {...pageProps} />
    </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // eslint-disable-next-line no-console
  console.log(metric);
}

export default MyApp;
