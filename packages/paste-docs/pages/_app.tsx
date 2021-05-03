import type {AppProps, NextWebVitalsMetric} from 'next/app';
import {Theme} from '@twilio-paste/theme';
import {SITE_BREAKPOINTS} from '../constants';
import '../assets/scss/search.scss';

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
