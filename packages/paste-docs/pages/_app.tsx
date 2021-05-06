import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/theme';
import {SITE_BREAKPOINTS} from '../src/constants';
import '../src/assets/scss/search.scss';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Theme.Provider theme="default" customBreakpoints={SITE_BREAKPOINTS}>
      <Component {...pageProps} />
    </Theme.Provider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
