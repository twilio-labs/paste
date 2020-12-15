import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {SiteBody} from './SiteBody';
import {ActiveSiteThemeProvider} from '../../context/ActiveSiteThemeContext';
import {NavigationContext, NavigationQuery} from '../../context/NavigationContext';
import {SiteThemeProvider} from './SiteThemeProvider';
import {SkipLinkContainer} from '../SkipLinkContainer';
import '../../assets/css/fonts.css';
import '../../assets/scss/search.scss';

const pageQuery = graphql`
  {
    allSitePage(filter: {path: {ne: "/dev-404-page/"}}) {
      edges {
        node {
          path
          componentChunkName
          componentPath
          id
          component
          internalComponentName
          isCreatedByStatefulCreatePages
          pluginCreatorId
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
  }
`;

interface SiteWrapperProps {
  pathname: string;
}

const SiteWrapper: React.FC<SiteWrapperProps> = ({pathname, children}) => {
  const navigationQueryData: NavigationQuery = useStaticQuery(pageQuery);

  return (
    <ActiveSiteThemeProvider>
      <SiteThemeProvider>
        <NavigationContext.Provider value={{...navigationQueryData, pathname}}>
          <SkipLinkContainer>
            <Stack orientation="horizontal" spacing="space60">
              <Anchor href="#content">Skip to content</Anchor>
              <Anchor href="#search-input">Skip to search</Anchor>
            </Stack>
          </SkipLinkContainer>
          <SiteBody>{children}</SiteBody>
        </NavigationContext.Provider>
      </SiteThemeProvider>
    </ActiveSiteThemeProvider>
  );
};

export {SiteWrapper};
