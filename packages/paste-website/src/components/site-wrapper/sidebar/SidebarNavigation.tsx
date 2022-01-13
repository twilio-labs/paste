import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';

import {SidebarCategoryRoutes} from '../../../constants';
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

  const {allPasteComponent, allPasteLayout, allPastePrimitive, allPastePattern} = getNormalizedNavigationData(data);

  const allComponentSidebarItems = [...allPasteComponent, ...allPasteLayout, {name: 'Icon', slug: 'icons'}];
  const filteredComponentSidebarItems = allComponentSidebarItems.filter(filteredComponents).sort(alphabetizeComponents);

  const filteredPrimitives = allPastePrimitive.filter(filteredComponents);

  return (
    <Box
      as="nav"
      paddingTop={['space0', 'space0', 'space70']}
      paddingX="space20"
      paddingBottom={['space50', 'space50', 'space0']}
      height="100%"
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
        <SidebarAnchor level={0} to="/">
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
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.INTRODUCTION}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to="/introduction/about-paste">
              About Paste
            </SidebarAnchor>
            <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.FOR_DESIGNERS}>
              <SidebarDisclosureButton level={1}>For designers</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_DESIGNERS}/design-guidelines`}>
                  Design guidelines
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.FOR_ENGINEERS}>
              <SidebarDisclosureButton level={1}>For engineers</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/quickstart`}>
                  Quick start
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/manual-installation`}>
                  Manual installation
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.CONTRIBUTING}>
              <SidebarDisclosureButton level={1}>Contributing</SidebarDisclosureButton>
              <SidebarDisclosureContent>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTRIBUTING}/icons`}>
                  Icons
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTRIBUTING}/patterns`}>
                  Patterns
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.INTRODUCTION}/working-with-us`}>
              Working with us
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarAnchor level={0} to="/inclusive-design">
          Accessibility
        </SidebarAnchor>
        <SidebarSeparator />
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.FOUNDATIONS}>
          <SidebarDisclosureButton level={0} data-cy="foundations-button">
            Foundations
          </SidebarDisclosureButton>
          <SidebarDisclosureContent data-cy="foundations-list">
            <SidebarDisclosure nested categoryRoute={SidebarCategoryRoutes.CONTENT}>
              <SidebarDisclosureButton
                level={1}
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
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/content-checklist`}>
                  Content checklist
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>
                  Voice and tone
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
                  Product style guide
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
            <SidebarAnchor
              level={1}
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
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.PATTERNS}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={SidebarCategoryRoutes.PATTERNS}>
              Overview
            </SidebarAnchor>
            {allPastePattern.map(({name, slug}: {[key: string]: string}) => (
              <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.PATTERNS}/${slug}`} key={slug}>
                {name}
              </SidebarAnchor>
            ))}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarSeparator />
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.COMPONENTS}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={SidebarCategoryRoutes.COMPONENTS}>
              Overview
            </SidebarAnchor>
            {filteredComponentSidebarItems.map(({name, slug}: {[key: string]: string}) => {
              if (name === 'Icon') {
                return (
                  <SidebarDisclosure nested categoryRoute={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`} key={slug}>
                    <SidebarDisclosureButton
                      level={1}
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
                      <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`}>
                        Icon list
                      </SidebarAnchor>
                      <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}/usage-guidelines`}>
                        Usage
                      </SidebarAnchor>
                    </SidebarDisclosureContent>
                  </SidebarDisclosure>
                );
              }
              return (
                <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`} key={slug}>
                  {name}
                </SidebarAnchor>
              );
            })}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.PRIMITIVES}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={SidebarCategoryRoutes.PRIMITIVES}>
              Overview
            </SidebarAnchor>
            {filteredPrimitives.map(({name, slug}: {[key: string]: string}) => (
              <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.PRIMITIVES}/${slug}`} key={slug}>
                {name}
              </SidebarAnchor>
            ))}
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.TOKENS}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.TOKENS}/`}>
              Token list
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
              Design tokens package
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.CORE}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={SidebarCategoryRoutes.CORE}>
              Paste core
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CORE}/theme-package`}>
              Theme package
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CORE}/changelog`}>
              Core changelog
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CORE}/upgrade-guide`}>
              Upgrade guide
            </SidebarAnchor>
            <SidebarDisclosure nested categoryRoute={SidebarCategoryRoutes.LIBRARIES}>
              <SidebarDisclosureButton level={1} data-cy="libraries-button">
                Libraries
              </SidebarDisclosureButton>
              <SidebarDisclosureContent data-cy="libraries-list">
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}`}>
                  Overview
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>
                  UID library
                </SidebarAnchor>
                <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>
                  Codemods
                </SidebarAnchor>
              </SidebarDisclosureContent>
            </SidebarDisclosure>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarDisclosure categoryRoute={SidebarCategoryRoutes.CUSTOMIZATION}>
          <SidebarDisclosureButton
            level={0}
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
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CUSTOMIZATION}/`}>
              Overview
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CUSTOMIZATION}/customization-provider`}>
              Customization Provider
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CUSTOMIZATION}/creating-a-custom-theme`}>
              Customizing themes
            </SidebarAnchor>
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.CUSTOMIZATION}/customizing-component-elements`}>
              Customizing components
            </SidebarAnchor>
            <SidebarAnchor
              level={1}
              to={`${SidebarCategoryRoutes.CUSTOMIZATION}/composing-custom-components-with-design-tokens`}
            >
              Composing custom UI with tokens
            </SidebarAnchor>
          </SidebarDisclosureContent>
        </SidebarDisclosure>
        <SidebarSeparator />
        <SidebarAnchor
          level={0}
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
          level={0}
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
