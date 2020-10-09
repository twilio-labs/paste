import * as React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Box} from '@twilio-paste/box';
import {
  useDisclosurePrimitiveState,
  DisclosurePrimitive,
  DisclosurePrimitiveContent,
} from '@twilio-paste/disclosure-primitive';
import {SidebarAnchor} from './SidebarAnchor';
import {SidebarDisclosureButton} from './SidebarDisclosureButton';
import {SidebarItem} from './SidebarItem';
import {SidebarNestedItem} from './SidebarNestedItem';
import {SidebarNestedList} from './SidebarNestedList';
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

  const gettingStartedDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.GETTING_STARTED),
  });

  const componentsDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.COMPONENTS),
  });

  const primitivesDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.PRIMITIVES),
  });

  const layoutDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.LAYOUT),
  });

  const iconDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.ICON_SYSTEM),
  });

  const contentDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.CONTENT),
  });

  const tokensDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.TOKENS),
  });

  return (
    <Box as="nav" marginTop="space70" overflow="auto" role="navigation" aria-label="Main">
      <Box as="ul" padding="space0" margin="space0" listStyleType="none">
        <SidebarItem>
          <SidebarAnchor to="/">Home</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...gettingStartedDisclosure}>
            Getting Started
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...gettingStartedDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to="/getting-started/engineering">
                  Engineering Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to="/getting-started/design">
                  Design Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to="/getting-started/working-guide">
                  How to work with us
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to="/getting-started/about-paste">
                  About Paste
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to="/getting-started/faqs">
                  FAQs
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor to="/principles">Principles</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...tokensDisclosure}>
            Design Tokens
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...tokensDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.TOKENS}>
                  Token list
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.TOKENS}/how-to-compose-custom-ui-with-tokens`}>
                  How to compose custom UI with tokens
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
                  Design Tokens package
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.TOKENS}/theme-package`}>
                  Theme package
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...componentsDisclosure}>
            Components
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...componentsDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.COMPONENTS}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {data.allPasteComponent.edges.filter(filteredComponents).map(({node}) => {
                return (
                  <SidebarNestedItem key={node.name}>
                    <SidebarAnchor
                      nested
                      to={`${SidebarCategoryRoutes.COMPONENTS}/${getNameFromPackageName(node.name)}`}
                    >
                      {getHumanizedNameFromPackageName(node.name)}
                    </SidebarAnchor>
                  </SidebarNestedItem>
                );
              })}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...primitivesDisclosure}>
            Primitives
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...primitivesDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.PRIMITIVES}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {data.allPastePrimitive.edges
                .filter(({node}) => node.status !== PackageStatus.BACKLOG)
                .map(({node}) => {
                  return (
                    <SidebarNestedItem key={node.name}>
                      <SidebarAnchor
                        nested
                        to={`${SidebarCategoryRoutes.PRIMITIVES}/${getNameFromPackageName(node.name)}`}
                      >
                        {getHumanizedNameFromPackageName(node.name)}
                      </SidebarAnchor>
                    </SidebarNestedItem>
                  );
                })}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...layoutDisclosure}>
            Layout
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...layoutDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.LAYOUT}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {data.allPasteLayout.edges
                .filter(({node}) => node.status !== PackageStatus.BACKLOG)
                .map(({node}) => {
                  return (
                    <SidebarNestedItem key={node.name}>
                      <SidebarAnchor nested to={`${SidebarCategoryRoutes.LAYOUT}/${getNameFromPackageName(node.name)}`}>
                        {getHumanizedNameFromPackageName(node.name)}
                      </SidebarAnchor>
                    </SidebarNestedItem>
                  );
                })}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...iconDisclosure}>
            Icons
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...iconDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.ICON_SYSTEM}`}>
                  Icons List
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.ICON_SYSTEM}/usage-guidelines`}>
                  Usage Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.ICON_SYSTEM}/how-to-add-an-icon`}>
                  How to add an icon
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor to="/illustrations">Illustrations</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...contentDisclosure}>
            Content
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...contentDisclosure}>
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.CONTENT}>
                  Guideline Usage
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>
                  Voice and tone
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
                  Product style guide
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/writing-for-components`}>
                  Writing for components
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/get-support`}>
                  Get support
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor to="/libraries">Libraries</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor to="/roadmap">Roadmap</SidebarAnchor>
        </SidebarItem>
      </Box>
    </Box>
  );
};

export {SidebarNavigation};
