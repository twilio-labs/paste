import * as React from 'react-16';
import {SiteHeaderDesktop} from './SiteHeaderDesktop';
import {SiteHeaderMobile} from './SiteHeaderMobile';
import {useWindowSize} from '../../../hooks/useWindowSize';

export const SiteHeader: React.FC = () => {
  const [value, setValue] = React.useState('');
  const {breakpointIndex} = useWindowSize();

  // While SSR, render both and let CSS handle it (fixes FoUC)
  if (breakpointIndex === undefined) {
    return (
      <>
        <SiteHeaderMobile searchValue={value} onSearchChange={setValue} />
        <SiteHeaderDesktop searchValue={value} onSearchChange={setValue} />
      </>
    );
  }

  if (breakpointIndex <= 1) {
    return <SiteHeaderMobile searchValue={value} onSearchChange={setValue} />;
  }

  return <SiteHeaderDesktop searchValue={value} onSearchChange={setValue} />;
};
