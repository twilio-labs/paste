import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {
  SiteNav,
  SiteNavList,
  SiteNavNestList,
  SiteNavItem,
  SiteNavAnchor,
  SiteNavButton,
  SiteNavAnchorArrow,
} from './SidebarNavigation.styles';
import {PackageStatus, SidebarCategoryRoutes} from '../../../constants';
import {getCurrentPathname, getNameFromPackageName, getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';

interface SidebarNavigationProps {
  children?: React.ReactNode;
}

interface SiteWrapperPageQuery {
  allPasteComponent: {
    edges: [
      {
        node: {
          name: string;
          status: string;
        };
      }
    ];
  };
  allPasteUtility: {
    edges: [
      {
        node: {
          name: string;
          status: string;
        };
      }
    ];
  };
}

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
    allPasteUtility(sort: {order: ASC, fields: name}) {
      edges {
        node {
          name
          status
        }
      }
    }
  }
`;

const SidebarNavigation: React.FC<SidebarNavigationProps> = () => {
  const data: SiteWrapperPageQuery = useStaticQuery(pageQuery);

  const [componentsOpen, setComponentsOpen] = React.useState(
    getCurrentPathname().includes(SidebarCategoryRoutes.COMPONENTS)
  );
  const [utilitiesOpen, setutilitiesOpen] = React.useState(
    getCurrentPathname().includes(SidebarCategoryRoutes.UTILITIES)
  );
  const [gettingStartedOpen, setgettingStartedOpen] = React.useState(
    getCurrentPathname().includes(SidebarCategoryRoutes.GETTING_STARTED)
  );
  const [tokensOpen, setTokensOpen] = React.useState(getCurrentPathname().includes(SidebarCategoryRoutes.TOKENS));

  return (
    <SiteNav>
      <SiteNavList>
        <SiteNavItem>
          <SiteNavAnchor to="/">Home</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setgettingStartedOpen(!gettingStartedOpen)} isOpen={gettingStartedOpen}>
            Getting Started
            <SiteNavAnchorArrow isOpen={gettingStartedOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={gettingStartedOpen}>
            <SiteNavItem>
              <SiteNavAnchor to="/getting-started/">General Guidelines</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to="/getting-started/design">Design Guidelines</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to="/getting-started/engineering">Engineering Guidelines</SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setTokensOpen(!tokensOpen)} isOpen={tokensOpen}>
            Design Tokens
            <SiteNavAnchorArrow isOpen={tokensOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={tokensOpen}>
            <SiteNavItem>
              <SiteNavAnchor to={SidebarCategoryRoutes.TOKENS}>Token list</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.TOKENS}/how-to-compose-custom-ui-with-tokens`}>
                How to compose custom UI with tokens
              </SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
                Design Tokens package
              </SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.TOKENS}/theme-package`}>Theme package</SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setComponentsOpen(!componentsOpen)} isOpen={componentsOpen}>
            Components
            <SiteNavAnchorArrow isOpen={componentsOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={componentsOpen}>
            <SiteNavItem>
              <SiteNavAnchor to={SidebarCategoryRoutes.COMPONENTS}>Overview</SiteNavAnchor>
            </SiteNavItem>
            {data.allPasteComponent.edges
              .filter(({node}) => node.status !== PackageStatus.BACKLOG)
              .map(({node}) => {
                return (
                  <SiteNavItem key={node.name}>
                    <SiteNavAnchor to={`${SidebarCategoryRoutes.COMPONENTS}/${getNameFromPackageName(node.name)}`}>
                      {getHumanizedNameFromPackageName(node.name)}
                    </SiteNavAnchor>
                  </SiteNavItem>
                );
              })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setutilitiesOpen(!utilitiesOpen)} isOpen={utilitiesOpen}>
            Utilities
            <SiteNavAnchorArrow isOpen={utilitiesOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={utilitiesOpen}>
            <SiteNavAnchor to={SidebarCategoryRoutes.UTILITIES}>Overview</SiteNavAnchor>
            {data.allPasteUtility.edges
              .filter(({node}) => node.status !== PackageStatus.BACKLOG)
              .map(({node}) => {
                return (
                  <SiteNavItem key={node.name}>
                    <SiteNavAnchor to={`${SidebarCategoryRoutes.UTILITIES}/${getNameFromPackageName(node.name)}`}>
                      {getHumanizedNameFromPackageName(node.name)}
                    </SiteNavAnchor>
                  </SiteNavItem>
                );
              })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/migrate">Migration Guide</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/roadmap">Roadmap</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/changelog">Changelog</SiteNavAnchor>
        </SiteNavItem>
      </SiteNavList>
    </SiteNav>
  );
};

export {SidebarNavigation};
