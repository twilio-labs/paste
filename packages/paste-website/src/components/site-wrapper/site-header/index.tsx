import * as React from 'react';
import {SiteHeaderDesktop} from './SiteHeaderDesktop';
import {SiteHeaderMobile} from './SiteHeaderMobile';
import {useWindowSize} from '../../../hooks/useWindowSize';

export const SiteHeader: React.FC = () => {
  const [value, setValue] = React.useState('');
  const {breakpointIndex} = useWindowSize();

  return (
    <>
      {breakpointIndex !== undefined && breakpointIndex <= 1 ? (
        <SiteHeaderMobile searchValue={value} onSearchChange={setValue} />
      ) : (
        <SiteHeaderDesktop searchValue={value} onSearchChange={setValue} />
      )}
    </>
  );
};
