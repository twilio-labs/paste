import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Theme} from '@twilio-paste/theme';
import {SiteBody} from './SiteBody';
import {NavigationContext} from '../context/NavigationContext';
import {SkipLinkContainer} from '../SkipLinkContainer';
import {PASTE_DOCS_CONTENT_AREA, PASTE_DOCS_SEARCH_INPUT, SITE_BREAKPOINTS} from '../../constants';
import type {NavigationQuery} from '../context/NavigationContext';

interface SiteWrapperProps {
  pathname: string;
}

const SiteWrapper: React.FC<SiteWrapperProps> = ({pathname, children}) => {
  // const navigationQueryData: NavigationQuery = useStaticQuery(pageQuery);

  return (
    <Theme.Provider theme="default" customBreakpoints={SITE_BREAKPOINTS}>
      <NavigationContext.Provider value={{pathname}}>
        <SkipLinkContainer>
          <Stack orientation="horizontal" spacing="space60">
            <Anchor href={`#${PASTE_DOCS_CONTENT_AREA}`}>Skip to content</Anchor>
            <Anchor href={`#${PASTE_DOCS_SEARCH_INPUT}`}>Skip to search</Anchor>
          </Stack>
        </SkipLinkContainer>
        <SiteBody>{children}</SiteBody>
      </NavigationContext.Provider>
    </Theme.Provider>
  );
};

export {SiteWrapper};
