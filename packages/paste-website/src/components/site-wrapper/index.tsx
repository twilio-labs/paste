import * as React from 'react';

import {SiteBody} from './SiteBody';
import {NavigationContext} from '../../context/NavigationContext';
import type {NavigationQuery} from '../../context/NavigationContext';

export interface SiteWrapperProps {
  navigationData: NavigationQuery;
}

const SiteWrapper: React.FC<React.PropsWithChildren<SiteWrapperProps>> = ({children, navigationData}) => {
  return (
    /*
     * TODO: move to server components and app directory to remove this provider.
     * Removes the need for page level getNavigationData() in getStaticProps. Do it once for the whole app, not everypage
     */
    <NavigationContext.Provider value={navigationData}>
      <SiteBody>{children}</SiteBody>
    </NavigationContext.Provider>
  );
};

export {SiteWrapper};
