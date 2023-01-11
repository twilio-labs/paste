import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Theme} from '@twilio-paste/theme';

import {SiteBody} from './SiteBody';
import {NavigationContext} from '../../context/NavigationContext';
import {useDarkMode} from '../../hooks/useDarkMode';
import {SkipLinkContainer} from '../SkipLinkContainer';
import {PASTE_DOCS_CONTENT_AREA, PASTE_DOCS_SEARCH_INPUT, SITE_BREAKPOINTS} from '../../constants';
import type {NavigationQuery} from '../../context/NavigationContext';
import {DarkModeContext} from '../../context/DarkModeContext';
import {inCypress} from '../../utils/inCypress';

const pageQuery = `
  {
    allSitePage(filter: {path: {ne: "/dev-404-page/"}}) {
      edges {
        node {
          path
          componentChunkName
          id
          component
          internalComponentName
        }
      }
    }
    allPasteComponent(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          version
          status
        }
      }
    }
    allPastePrimitive(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          version
          status
        }
      }
    }
    allPasteLayout(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          version
          status
        }
      }
    }
    allPastePattern: allAirtable(
      sort: {fields: [data___Feature]}
      filter: {
        data: {status: {nin: [null, "in development"]}, Component_Category: {eq: "pattern"}, Documentation: {eq: true}}
      }
    ) {
      edges {
        node {
          data {
            Feature
            status
          }
        }
      }
    }
  }
`;

const SiteWrapper: React.FC = ({children}) => {
  const navigationQueryData: NavigationQuery = {
    allSitePages: {edges: [{node: {}}]},
    allPasteComponent: {edges: [{node: {}}]},
    allPasteLayout: {edges: [{node: {}}]},
  };
  const [theme, toggleMode, componentMounted] = useDarkMode();

  return (
    <Theme.Provider theme={theme} customBreakpoints={SITE_BREAKPOINTS} disableAnimations={inCypress()}>
      <NavigationContext.Provider value={{...navigationQueryData}}>
        <DarkModeContext.Provider value={{theme, toggleMode, componentMounted}}>
          <SkipLinkContainer>
            <Stack orientation="horizontal" spacing="space60">
              <Anchor href={`#${PASTE_DOCS_CONTENT_AREA}`}>Skip to content</Anchor>
              <Anchor href={`#${PASTE_DOCS_SEARCH_INPUT}`}>Skip to search</Anchor>
            </Stack>
          </SkipLinkContainer>
          <SiteBody>{children}</SiteBody>
        </DarkModeContext.Provider>
      </NavigationContext.Provider>
    </Theme.Provider>
  );
};

export {SiteWrapper};
