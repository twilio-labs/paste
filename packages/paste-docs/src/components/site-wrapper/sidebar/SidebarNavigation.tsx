import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
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
import {useNavigationContext} from '../../context/NavigationContext';

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
    <Box
      as="nav"
      marginTop={['space0', 'space0', 'space70']}
      marginLeft={['space10', 'space10', 'space0']}
      paddingBottom={['space50', 'space50', 'space0']}
      overflow="auto"
      role="navigation"
      aria-label="Main"
    >
      <Box
        display={['block', 'block', 'none']}
        marginTop="space20"
        marginLeft="space20"
        marginRight={['space160', 'space160', 'space0']}
      >
        <SidebarAnchor href="/">
          <Box display={['flex', 'flex', 'none']} alignItems="center" marginLeft="spaceNegative80" height="28px">
            <Box as="span" paddingRight="space30">
              <img src="/logo.svg" alt="" width="28px" height="28px" />
            </Box>
            <Text as="span" paddingRight="space20" fontSize={['fontSize50', 'fontSize50', 'fontSize30']}>
              Paste
            </Text>
            <Text as="span" fontSize={['fontSize50', 'fontSize50', 'fontSize30']}>
              Home
            </Text>
          </Box>
        </SidebarAnchor>
      </Box>
      <Box as="ul" padding="space0" margin="space0" listStyleType="none">
        <SidebarItem display={['none', 'none', 'block']}>
          <SidebarAnchor
            href="/"
            onClick={
              () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-home",
                label: "Home",
              }) */
            }
          >
            Home
          </SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...gettingStartedDisclosure}
            data-cy="getting-started-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-getting-started",
                label: "Getting Started",
              })
              */
            }
          >
            Getting Started
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...gettingStartedDisclosure} data-cy="getting-started-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href="/getting-started/engineering">
                  Engineering Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href="/getting-started/design">
                  Design Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href="/getting-started/working-guide">
                  How to work with us
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href="/getting-started/about-paste">
                  About Paste
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href="/getting-started/faqs">
                  FAQs
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor href="/principles">Principles</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor href="/inclusive-design">Inclusive Design Guide</SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...tokensDisclosure}
            data-cy="design-tokens-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-design-tokens",
                label: "Design Tokens",
              })*/
            }
          >
            Design Tokens
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...tokensDisclosure} data-cy="design-tokens-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.TOKENS}>
                  Token list
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.TOKENS}/how-to-compose-custom-ui-with-tokens`}>
                  How to compose custom UI with tokens
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
                  Design Tokens package
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.TOKENS}/theme-package`}>
                  Theme package
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...patternsDisclosure}
            data-cy="patterns-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-patterns",
                label: "Patterns",
              })*/
            }
          >
            Patterns
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...patternsDisclosure} data-cy="patterns-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.PATTERNS}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/contribute`}>
                  How to contribute
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/button-vs-anchor`}>
                  Button vs. Anchor
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/create`}>
                  Create
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/delete`}>
                  Delete
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/empty-states`}>
                  Empty states
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/notifications`}>
                  Notifications and feedback
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.PATTERNS}/object-details`}>
                  Object details
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...componentsDisclosure}
            data-cy="components-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-components",
                label: "Components",
              })*/
            }
          >
            Components
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...componentsDisclosure} data-cy="components-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.COMPONENTS}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {/*data.allPasteComponent.edges
                .filter(filteredComponents)
                .map(({ node }) => {
                  return (
                    <SidebarNestedItem key={node.name}>
                      <SidebarAnchor
                        nested
                        href={`${
                          SidebarCategoryRoutes.COMPONENTS
                        }/${getNameFromPackageName(node.name)}`}
                      >
                        {getHumanizedNameFromPackageName(node.name)}
                      </SidebarAnchor>
                    </SidebarNestedItem>
                  );
                })*/}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...primitivesDisclosure}
            data-cy="primitives-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-primitives",
                label: "Primitives",
              })*/
            }
          >
            Primitives
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...primitivesDisclosure} data-cy="primitives-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.PRIMITIVES}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {/*data.allPastePrimitive.edges
                .filter(({ node }) => node.status !== PackageStatus.BACKLOG)
                .map(({ node }) => {
                  return (
                    <SidebarNestedItem key={node.name}>
                      <SidebarAnchor
                        nested
                        href={`${
                          SidebarCategoryRoutes.PRIMITIVES
                        }/${getNameFromPackageName(node.name)}`}
                      >
                        {getHumanizedNameFromPackageName(node.name)}
                      </SidebarAnchor>
                    </SidebarNestedItem>
                  );
                })*/}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...layoutDisclosure}
            data-cy="layout-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-layout",
                label: "Layout",
              })*/
            }
          >
            Layout
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...layoutDisclosure} data-cy="layout-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.LAYOUT}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              {/*data.allPasteLayout.edges
                .filter(({ node }) => node.status !== PackageStatus.BACKLOG)
                .map(({ node }) => {
                  return (
                    <SidebarNestedItem key={node.name}>
                      <SidebarAnchor
                        nested
                        href={`${
                          SidebarCategoryRoutes.LAYOUT
                        }/${getNameFromPackageName(node.name)}`}
                      >
                        {getHumanizedNameFromPackageName(node.name)}
                      </SidebarAnchor>
                    </SidebarNestedItem>
                  );
                })*/}
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...iconDisclosure}
            data-cy="icons-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-icons",
                label: "Icons",
              })*/
            }
          >
            Icons
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...iconDisclosure} data-cy="icons-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.ICON_SYSTEM}`}>
                  Icons List
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.ICON_SYSTEM}/usage-guidelines`}>
                  Usage Guidelines
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.ICON_SYSTEM}/how-to-add-an-icon`}>
                  How to add an icon
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor
            href="/illustrations"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-illustrations",
                label: "Illustrations",
              })*/
            }
          >
            Illustrations
          </SidebarAnchor>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...contentDisclosure}
            data-cy="content-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-content",
                label: "Content",
              })*/
            }
          >
            Content
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...contentDisclosure} data-cy="content-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.CONTENT}>
                  Guideline Usage
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>
                  Voice and tone
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
                  Product style guide
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.CONTENT}/writing-for-components`}>
                  Writing for components
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.CONTENT}/get-support`}>
                  Get support
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <DisclosurePrimitive
            as={SidebarDisclosureButton}
            {...librariesDisclosure}
            data-cy="libraries-button"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-libraries",
                label: "Libraries",
              })*/
            }
          >
            Libraries
          </DisclosurePrimitive>
          <DisclosurePrimitiveContent {...librariesDisclosure} data-cy="libraries-list">
            <SidebarNestedList>
              <SidebarNestedItem>
                <SidebarAnchor nested href={SidebarCategoryRoutes.LIBRARIES}>
                  Overview
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>
                  UID
                </SidebarAnchor>
              </SidebarNestedItem>
              <SidebarNestedItem>
                <SidebarAnchor nested href={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>
                  Codemods
                </SidebarAnchor>
              </SidebarNestedItem>
            </SidebarNestedList>
          </DisclosurePrimitiveContent>
        </SidebarItem>
        <SidebarItem>
          <SidebarAnchor
            href="/roadmap"
            onClick={
              () => () => {}
              /* TODO
              trackCustomEvent({
                category: "Left Navigation",
                action: "click-roadmap",
                label: "Roadmap",
              })*/
            }
          >
            Roadmap
          </SidebarAnchor>
        </SidebarItem>
      </Box>
    </Box>
  );
};

export {SidebarNavigation};
