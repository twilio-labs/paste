import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';

import {SiteBody} from './SiteBody';
import {NavigationContext} from '../../context/NavigationContext';
import {SkipLinkContainer} from '../SkipLinkContainer';
import {PASTE_DOCS_CONTENT_AREA, PASTE_DOCS_SEARCH_INPUT} from '../../constants';
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
    <NavigationContext.Provider value={{...navigationData}}>
      <SkipLinkContainer>
        <Stack orientation="horizontal" spacing="space60">
          <Anchor href={`#${PASTE_DOCS_CONTENT_AREA}`}>Skip to content</Anchor>
          <Anchor href={`#${PASTE_DOCS_SEARCH_INPUT}`}>Skip to search</Anchor>
        </Stack>
      </SkipLinkContainer>
      <SiteBody>{children}</SiteBody>
    </NavigationContext.Provider>
  );
};

export {SiteWrapper};
