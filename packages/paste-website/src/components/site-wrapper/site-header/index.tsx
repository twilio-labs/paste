import {useWindowSize} from '@twilio-paste/utils';

import {SiteHeaderDesktop} from './SiteHeaderDesktop';
import {SiteHeaderMobile} from './SiteHeaderMobile';

export const SiteHeader = (): JSX.Element => {
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
