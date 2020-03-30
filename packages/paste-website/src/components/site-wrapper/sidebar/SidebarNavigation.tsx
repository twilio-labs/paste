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
import {filteredComponents} from '../../../utils/componentFilters';

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
          version: string;
        };
      }
    ];
  };
  allPastePrimitive: {
    edges: [
      {
        node: {
          name: string;
          status: string;
          version: string;
        };
      }
    ];
  };
  allPasteLayout: {
    edges: [
      {
        node: {
          name: string;
          status: string;
          version: string;
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

const SidebarNavigation: React.FC<SidebarNavigationProps> = () => {
  const data: SiteWrapperPageQuery = useStaticQuery(pageQuery);

  const [componentsOpen, setComponentsOpen] = React.useState(
    getCurrentPathname().startsWith(SidebarCategoryRoutes.COMPONENTS)
  );

  const [primitivesOpen, setPrimitivesOpen] = React.useState(
    getCurrentPathname().startsWith(SidebarCategoryRoutes.PRIMITIVES)
  );

  const [layoutOpen, setLayoutOpen] = React.useState(getCurrentPathname().startsWith(SidebarCategoryRoutes.LAYOUT));

  const [formOpen, setFormOpen] = React.useState(getCurrentPathname().startsWith(SidebarCategoryRoutes.FORM));

  const [iconSystemOpen, setIconSystemOpen] = React.useState(
    getCurrentPathname().startsWith(SidebarCategoryRoutes.ICON_SYSTEM)
  );

  const [contentOpen, setContentOpen] = React.useState(getCurrentPathname().startsWith(SidebarCategoryRoutes.CONTENT));

  const [gettingStartedOpen, setgettingStartedOpen] = React.useState(
    getCurrentPathname().startsWith(SidebarCategoryRoutes.GETTING_STARTED)
  );

  const [tokensOpen, setTokensOpen] = React.useState(getCurrentPathname().startsWith(SidebarCategoryRoutes.TOKENS));

  return (
    <SiteNav>
      <SiteNavList>
        <SiteNavItem>
          <SiteNavAnchor to="/">Home</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton
            onClick={() => setgettingStartedOpen(!gettingStartedOpen)}
            isOpen={gettingStartedOpen}
            aria-expanded={gettingStartedOpen}
          >
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
          <SiteNavAnchor to="/principles">Principles</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setTokensOpen(!tokensOpen)} isOpen={tokensOpen} aria-expanded={tokensOpen}>
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
          <SiteNavButton
            onClick={() => setComponentsOpen(!componentsOpen)}
            isOpen={componentsOpen}
            aria-expanded={componentsOpen}
          >
            Components
            <SiteNavAnchorArrow isOpen={componentsOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={componentsOpen}>
            <SiteNavItem>
              <SiteNavAnchor to={SidebarCategoryRoutes.COMPONENTS}>Overview</SiteNavAnchor>
            </SiteNavItem>
            {data.allPasteComponent.edges.filter(filteredComponents).map(({node}) => {
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
          <SiteNavButton
            onClick={() => setPrimitivesOpen(!primitivesOpen)}
            isOpen={primitivesOpen}
            aria-expanded={primitivesOpen}
          >
            Primitives
            <SiteNavAnchorArrow isOpen={primitivesOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={primitivesOpen}>
            <SiteNavItem>
              <SiteNavAnchor to={SidebarCategoryRoutes.PRIMITIVES}>Overview</SiteNavAnchor>
            </SiteNavItem>
            {data.allPastePrimitive.edges
              .filter(({node}) => node.status !== PackageStatus.BACKLOG)
              .map(({node}) => {
                return (
                  <SiteNavItem key={node.name}>
                    <SiteNavAnchor to={`${SidebarCategoryRoutes.PRIMITIVES}/${getNameFromPackageName(node.name)}`}>
                      {getHumanizedNameFromPackageName(node.name)}
                    </SiteNavAnchor>
                  </SiteNavItem>
                );
              })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setLayoutOpen(!layoutOpen)} isOpen={layoutOpen} aria-expanded={layoutOpen}>
            Layout
            <SiteNavAnchorArrow isOpen={layoutOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={layoutOpen}>
            <SiteNavAnchor to={SidebarCategoryRoutes.LAYOUT}>Overview</SiteNavAnchor>
            {data.allPasteLayout.edges
              .filter(({node}) => node.status !== PackageStatus.BACKLOG)
              .map(({node}) => {
                return (
                  <SiteNavItem key={node.name}>
                    <SiteNavAnchor to={`${SidebarCategoryRoutes.LAYOUT}/${getNameFromPackageName(node.name)}`}>
                      {getHumanizedNameFromPackageName(node.name)}
                    </SiteNavAnchor>
                  </SiteNavItem>
                );
              })}
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setFormOpen(!formOpen)} isOpen={formOpen} aria-expanded={formOpen}>
            Form
            <SiteNavAnchorArrow isOpen={formOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={formOpen}>
            <SiteNavItem>
              <SiteNavAnchor to="/form/input/">Input</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to="/form/textarea/">Textarea</SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton
            onClick={() => setIconSystemOpen(!iconSystemOpen)}
            isOpen={iconSystemOpen}
            aria-expanded={iconSystemOpen}
          >
            Icon System
            <SiteNavAnchorArrow isOpen={iconSystemOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={iconSystemOpen}>
            <SiteNavItem>
              <SiteNavAnchor to={SidebarCategoryRoutes.ICON_SYSTEM}>Usage Guidelines</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.ICON_SYSTEM}/how-to-add-an-icon`}>
                How to add an icon
              </SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavButton onClick={() => setContentOpen(!contentOpen)} isOpen={contentOpen} aria-expanded={contentOpen}>
            Content
            <SiteNavAnchorArrow isOpen={contentOpen} />
          </SiteNavButton>
          <SiteNavNestList isOpen={contentOpen}>
            <SiteNavItem>
              <SiteNavItem>
                <SiteNavAnchor to={SidebarCategoryRoutes.CONTENT}>Guideline Usage</SiteNavAnchor>
              </SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>Voice and tone</SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
                Product style guide
              </SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.CONTENT}/writing-for-components`}>
                Writing for components
              </SiteNavAnchor>
            </SiteNavItem>
            <SiteNavItem>
              <SiteNavAnchor to={`${SidebarCategoryRoutes.CONTENT}/get-support`}>Get support</SiteNavAnchor>
            </SiteNavItem>
          </SiteNavNestList>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/migrate">Migration Guide</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/libraries">Libraries</SiteNavAnchor>
        </SiteNavItem>
        <SiteNavItem>
          <SiteNavAnchor to="/roadmap">Roadmap</SiteNavAnchor>
        </SiteNavItem>
      </SiteNavList>
    </SiteNav>
  );
};

export {SidebarNavigation};
