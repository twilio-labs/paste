import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {SiteBody} from './SiteBody';
import {ActiveSiteThemeProvider} from '../../context/ActiveSiteThemeContext';
import {NavigationContext, NavigationQuery} from '../../context/NavigationContext';
import {SiteThemeProvider} from './SiteThemeProvider';
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
          status
        }
      }
    }
    allPastePrimitive(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          status
        }
      }
    }
    allPasteLayout(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          status
        }
      }
    }
  }
`;

const SiteWrapper: React.FC = ({children}) => {
  const navigationQueryData: NavigationQuery = useStaticQuery(pageQuery);

  return (
    <ActiveSiteThemeProvider>
      <SiteThemeProvider>
        <NavigationContext.Provider value={{...navigationQueryData}}>
          <SiteBody>{children}</SiteBody>
        </NavigationContext.Provider>
      </SiteThemeProvider>
    </ActiveSiteThemeProvider>
  );
};

export {SiteWrapper};
