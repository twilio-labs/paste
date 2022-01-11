import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

import {SidebarCategoryRoutes} from '../../../constants';
import {getCurrentPathname} from '../../../utils/RouteUtils';
import {filteredComponents, alphabetizeComponents} from '../../../utils/componentFilters';
import {getNormalizedNavigationData} from '../../../utils/GraphqlUtils';
import {useNavigationContext} from '../../../context/NavigationContext';

import {SidebarAnchor} from './SidebarAnchor';
import {SidebarSeparator} from './SidebarSeparator';
import {SidebarDisclosure} from './sidebar-disclosure/SidebarDisclosure';
import {SidebarDisclosureButton} from './sidebar-disclosure/SidebarDisclosureButton';
import {SidebarDisclosureContent} from './sidebar-disclosure/SidebarDisclosureContent';

const SidebarNavigation: React.FC = () => {
  const data = useNavigationContext();
  const currentPathname = getCurrentPathname();

  const {allPasteComponent, allPasteLayout, allPastePrimitive, allPastePattern} = getNormalizedNavigationData(data);
  const allComponentSidebarItems = [...allPasteComponent, ...allPasteLayout, {name: 'Icon', slug: 'icons'}];
  const filteredComponentSidebarItems = allComponentSidebarItems.filter(filteredComponents).sort(alphabetizeComponents);

  return (
    <Box
      as="nav"
      marginTop={['space0', 'space0', 'space70']}
      marginX="space20"
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
        <SidebarAnchor to="/">
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
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="introduction-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-introduction',
                label: 'Introduction',
              })
            }
          >
            Introduction
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="introduction-list">
            <SidebarAnchor nested to="/introduction/about-paste">
              About Paste
            </SidebarAnchor>
            <SidebarDisclosure nested>
              <SidebarDisclosureButton>For designers</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.FOR_DESIGNERS}/design-guidelines`}>
                  Design guidelines
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarDisclosure nested>
              <SidebarDisclosureButton>For engineers</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/quickstart`}>
                  Quick start
                </SidebarAnchor>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/manual-installation`}>
                  Manual installation
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarDisclosure nested>
              <SidebarDisclosureButton>Contributing</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTRIBUTING}/icons`}>
                  Icons
                </SidebarAnchor>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTRIBUTING}/patterns`}>
                  Patterns
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.INTRODUCTION}/working-with-us`}>
              Working with us
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarAnchor to="/inclusive-design">Accessibility</SidebarAnchor>
        <SidebarSeparator />
        <SidebarDisclosure>
          <SidebarDisclosureButton>Foundations</SidebarDisclosureButton>
          <SidebarDisclosureContent>
            <SidebarDisclosure nested>
              <SidebarDisclosureButton
                data-cy="content-button"
                onClick={() =>
                  trackCustomEvent({
                    category: 'Left Navigation',
                    action: 'click-content',
                    label: 'Content',
                  })
                }
              >
                Content
              </SidebarDisclosureButton>
              <SidebarDisclosureContent data-cy="content-list">
                {/* <SidebarAnchor nested to={}>Content checklist</SidebarAnchor> */}
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>
                  Voice and tone
                </SidebarAnchor>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
                  Product style guide
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarAnchor
              to={`${SidebarCategoryRoutes.FOUNDATIONS}/illustrations`}
              onClick={() =>
                trackCustomEvent({
                  category: 'Left Navigation',
                  action: 'click-illustrations',
                  label: 'Illustrations',
                })
              }
            >
              Illustrations
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="patterns-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-patterns',
                label: 'Patterns',
              })
            }
          >
            Patterns
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="patterns-list">
            <SidebarAnchor nested to={SidebarCategoryRoutes.PATTERNS}>
              Overview
            </SidebarAnchor>
            {allPastePattern.map(({name, slug}) => (
              <SidebarAnchor nested to={`${SidebarCategoryRoutes.PATTERNS}/${slug}`}>
                {name}
              </SidebarAnchor>
            ))}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarSeparator />
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="components-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-components',
                label: 'Components',
              })
            }
          >
            Components
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="components-list">
            <SidebarAnchor nested to={SidebarCategoryRoutes.COMPONENTS}>
              Overview
            </SidebarAnchor>
            {filteredComponentSidebarItems.map(({name, slug}) => {
              if (name === 'Icon') {
                return (
                  <SidebarDisclosure nested>
                    <SidebarDisclosureButton
                      data-cy="icons-button"
                      onClick={() =>
                        trackCustomEvent({
                          category: 'Left Navigation',
                          action: 'click-icons',
                          label: 'Icons',
                        })
                      }
                    >
                      {name}
                    </SidebarDisclosureButton>
                    <SidebarDisclosureContent data-cy="icons-list">
                      <SidebarAnchor nested to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`}>
                        Icon list
                      </SidebarAnchor>
                      <SidebarAnchor nested to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}/usage-guidelines`}>
                        Usage
                      </SidebarAnchor>
                    </SidebarDisclosureContent>
                  </SidebarDisclosure>
                );
              }
              return (
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`}>
                  {name}
                </SidebarAnchor>
              );
            })}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="primitives-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-primitives',
                label: 'Primitives',
              })
            }
          >
            Primitives
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="primitives-list">
            {allPastePrimitive.map(({name, slug}) => (
              <SidebarAnchor nested to={`${SidebarCategoryRoutes.PRIMITIVES}/${slug}`}>
                {name}
              </SidebarAnchor>
            ))}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="design-tokens-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-design-tokens',
                label: 'Design Tokens',
              })
            }
          >
            Tokens
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="design-tokens-list">
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.TOKENS}/`}>
              Token list
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
              Design tokens package
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="core-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-core',
                label: 'Core',
              })
            }
          >
            Core
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="core-list">
            <SidebarAnchor nested to={SidebarCategoryRoutes.CORE}>
              Paste core
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CORE}/theme-package`}>
              Theme package
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CORE}/changelog`}>
              Core changelog
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CORE}/upgrade-guide`}>
              Upgrade guide
            </SidebarAnchor>
            <SidebarDisclosure nested>
              <SidebarDisclosureButton data-cy="libraries-button">Libraries</SidebarDisclosureButton>
              <SidebarDisclosureContent data-cy="libraries-list">
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.LIBRARIES}`}>
                  Overview
                </SidebarAnchor>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>
                  UID library
                </SidebarAnchor>
                <SidebarAnchor nested to={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>
                  Codemods
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure>
          <SidebarDisclosureButton
            data-cy="customization-button"
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-customization',
                label: 'Customization',
              })
            }
          >
            Customization
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="customization-list">
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CUSTOMIZATION}/`}>
              Overview
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CUSTOMIZATION}/customization-provider`}>
              Customization Provider
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CUSTOMIZATION}/creating-a-custom-theme`}>
              Customizing themes
            </SidebarAnchor>
            <SidebarAnchor nested to={`${SidebarCategoryRoutes.CUSTOMIZATION}/customizing-component-elements`}>
              Customizing components
            </SidebarAnchor>
            <SidebarAnchor
              nested
              to={`${SidebarCategoryRoutes.CUSTOMIZATION}/composing-custom-components-with-design-tokens`}
            >
              Composing custom UI with tokens
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarSeparator />
        <SidebarAnchor
          to="/blog"
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-blog',
              label: 'Blog',
            })
          }
        >
          Blog
        </SidebarAnchor>
        <SidebarAnchor
          to="/roadmap"
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-roadmap',
              label: 'Roadmap',
            })
          }
        >
          Roadmap
        </SidebarAnchor>
      </Box>
    </Box>
  );
};

export {SidebarNavigation};
