import * as React from 'react';
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
import {useNavigationContext} from '../../../context/NavigationContext';

interface SidebarNavigationProps {
  children?: React.ReactNode;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = () => {
  const data = useNavigationContext();

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

  const librariesDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.LIBRARIES),
  });

  const tokensDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.TOKENS),
  });

  const patternsDisclosure = useDisclosurePrimitiveState({
    visible: getCurrentPathname().startsWith(SidebarCategoryRoutes.PATTERNS),
  });

  return (
    <Box as="nav" marginTop={['space0', 'space0', 'space70']} overflow="auto" role="navigation" aria-label="Main">
      <Box as="ul" padding="space0" margin="space0" listStyleType="none">
        <SidebarItem>
          <SidebarAnchor to="/">Home</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...gettingStartedDisclosure}
            data-cy="getting-started-button"
          >
            Getting Started
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...gettingStartedDisclosure} data-cy="getting-started-list">
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
          <SidebarAnchor to="/inclusive-design">Inclusive Design Guide</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...tokensDisclosure} data-cy="design-tokens-button">
            Design Tokens
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...tokensDisclosure} data-cy="design-tokens-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...patternsDisclosure} data-cy="patterns-button">
            Patterns
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...patternsDisclosure} data-cy="patterns-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.PATTERNS}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/contribute`}>
                  How to contribute
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/create`}>
                  Create
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/delete`}>
                  Delete
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/notifications`}>
                  Notifications and feedback
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/object-details`}>
                  Object details
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/empty-state`}>
                  Empty state
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/filter`}>
                  Filter
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/status`}>
                  Status indicators
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/stat-cards`}>
                  Stat cards
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive as={SidebarDisclosureButton} {...componentsDisclosure} data-cy="components-button">
            Components
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...componentsDisclosure} data-cy="components-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...primitivesDisclosure} data-cy="primitives-button">
            Primitives
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...primitivesDisclosure} data-cy="primitives-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...layoutDisclosure} data-cy="layout-button">
            Layout
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...layoutDisclosure} data-cy="layout-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...iconDisclosure} data-cy="icons-button">
            Icons
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...iconDisclosure} data-cy="icons-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...contentDisclosure} data-cy="content-button">
            Content
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...contentDisclosure} data-cy="content-list">
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
          <DisclosurePrimitive as={SidebarDisclosureButton} {...librariesDisclosure} data-cy="libraries-button">
            Libraries
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...librariesDisclosure} data-cy="libraries-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested to={SidebarCategoryRoutes.LIBRARIES}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>
                  UID
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>
                  Codemods
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor to="/roadmap">Roadmap</SidebarAnchor>
        </SidebarItem>
      </Box>
    </Box>
  );
};

export {SidebarNavigation};
