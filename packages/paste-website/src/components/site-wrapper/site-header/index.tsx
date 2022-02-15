import * as React from 'react';
import {SiteHeaderDesktop} from './SiteHeaderDesktop';
import {SiteHeaderMobile} from './SiteHeaderMobile';
import {useWindowSize} from '../../../hooks/useWindowSize';

export const SiteHeader: React.FC = () => {
  const {breakpointIndex} = useWindowSize();

  // While SSR, render both and let CSS handle it (fixes FoUC)
  if (breakpointIndex === undefined) {
    return (
      <>
        <SiteHeaderMobile />
        <SiteHeaderDesktop />
      </>
    );
  }

  if (breakpointIndex <= 1) {
    return <SiteHeaderMobile />;
  }

  return <SiteHeaderDesktop />;
};
