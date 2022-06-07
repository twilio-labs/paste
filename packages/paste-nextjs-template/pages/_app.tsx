import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/core/theme';

const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Theme.Provider theme="default">
      <Component {...pageProps} />
    </Theme.Provider>
  );
};

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  console.log(metric);
}

export default MyApp;
