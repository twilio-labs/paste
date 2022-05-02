import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {kebabCase} from 'lodash';

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

import type {SidebarDisclosureProps} from './sidebar-disclosure/SidebarDisclosure';
import type {SidebarDisclosureButtonProps} from './sidebar-disclosure/SidebarDisclosureButton';
import type {SidebarDisclosureContentProps} from './sidebar-disclosure/SidebarDisclosureContent';

const CY_BASE = 'sidebar-disclosure';
const NavigationDisclosure: React.FC<{
  children: SidebarDisclosureContentProps['children'];
  categoryRoute: SidebarDisclosureProps['categoryRoute'];
  level: SidebarDisclosureButtonProps['level'];
  buttonText: string;
  onClick?: SidebarDisclosureButtonProps['onClick'];
}> = ({children, categoryRoute, level, buttonText, onClick}) => {
  const buttonAttribute = `${CY_BASE}-button-${kebabCase(buttonText)}`;
  const contentAttribute = `${CY_BASE}-content-${kebabCase(buttonText)}`;

  return (
    <SidebarDisclosure categoryRoute={categoryRoute}>
      <SidebarDisclosureButton level={level} onClick={onClick} data-level={level} data-cy={buttonAttribute}>
        {buttonText}
      </SidebarDisclosureButton>
      <SidebarDisclosureContent data-level={level} data-cy={contentAttribute}>
        {children}
      </SidebarDisclosureContent>
    </SidebarDisclosure>
  );
};

const SidebarNavigation: React.FC = () => {
  const data = useNavigationContext();

  const {allPasteComponent, allPasteLayout, allPastePrimitive, allPastePattern} = getNormalizedNavigationData(data);

  const allComponentSidebarItems = [...allPasteComponent, ...allPasteLayout, {name: 'Icon', slug: 'icons'}];
  const filteredComponentSidebarItems = allComponentSidebarItems.filter(filteredComponents).sort(alphabetizeComponents);

  const filteredPrimitives = allPastePrimitive.filter(filteredComponents);

  return (
    <Box
      as="nav"
      paddingTop={['space50', 'space50', 'space70']}
      paddingX="space20"
      paddingBottom={['space70', 'space70', 'space0']}
      height="100%"
      overflow="auto"
      role="navigation"
      aria-label="Main"
    >
      <Box display={['block', 'block', 'none']}>
        <Box
          as="a"
          href="/"
          display={['flex', 'flex', 'none']}
          alignItems="center"
          lineHeight="lineHeight20"
          width="100%"
          textDecoration="none"
          borderRadius="borderRadius10"
          padding="space40"
          outline="none"
          columnGap="space30"
          _focus={{
            boxShadow: 'shadowFocus',
            textDecoration: 'underline',
          }}
        >
          <Box as="span">
            <img src="/logo.svg" alt="" width="28px" height="28px" />
          </Box>
          <Text as="span" fontSize={['fontSize50', 'fontSize50', 'fontSize30']}>
            Paste Home
          </Text>
        </Box>
      </Box>
      <Box as="ul" padding="space0" margin="space0" listStyleType="none">
        <NavigationDisclosure
          buttonText="Introduction"
          categoryRoute={SidebarCategoryRoutes.INTRODUCTION}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-introduction',
              label: 'Introduction',
            })
          }
        >
          <SidebarAnchor level={1} to="/introduction/about-paste">
            About Paste
          </SidebarAnchor>
          <NavigationDisclosure
            buttonText="For designers"
            categoryRoute={SidebarCategoryRoutes.FOR_DESIGNERS}
            level={1}
          >
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_DESIGNERS}/design-guidelines`}>
              Design guidelines
            </SidebarAnchor>
          </NavigationDisclosure>
          <NavigationDisclosure
            buttonText="For engineers"
            categoryRoute={SidebarCategoryRoutes.FOR_ENGINEERS}
            level={1}
          >
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/quickstart`}>
              Quick start
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.FOR_ENGINEERS}/manual-installation`}>
              Manual installation
            </SidebarAnchor>
          </NavigationDisclosure>
          <NavigationDisclosure buttonText="Contributing" categoryRoute={SidebarCategoryRoutes.CONTRIBUTING} level={1}>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTRIBUTING}/components`}>
              Components
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTRIBUTING}/icons`}>
              Icons
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTRIBUTING}/patterns`}>
              Patterns
            </SidebarAnchor>
          </NavigationDisclosure>
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.INTRODUCTION}/working-with-us`}>
            Working with us
          </SidebarAnchor>
        </NavigationDisclosure>
        <SidebarAnchor level={0} to="/inclusive-design">
          Accessibility
        </SidebarAnchor>
        <SidebarSeparator />
        <NavigationDisclosure buttonText="Foundations" categoryRoute={SidebarCategoryRoutes.FOUNDATIONS} level={0}>
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.FOUNDATIONS}/colors`}>
            Colors
          </SidebarAnchor>
          <NavigationDisclosure
            buttonText="Content"
            categoryRoute={SidebarCategoryRoutes.CONTENT}
            level={1}
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-content',
                label: 'Content',
              })
            }
          >
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/content-checklist`}>
              Content checklist
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>
              Voice and tone
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
              Product style guide
            </SidebarAnchor>
          </NavigationDisclosure>
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.FOUNDATIONS}/data-visualization`}>
            Data visualization
          </SidebarAnchor>
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
          <SidebarAnchor
            level={1}
            to={`${SidebarCategoryRoutes.FOUNDATIONS}/localization`}
            onClick={() =>
              trackCustomEvent({
                category: 'Left Navigation',
                action: 'click-localization',
                label: 'Localization',
              })
            }
          >
            Localization
          </SidebarAnchor>
        </NavigationDisclosure>
        <NavigationDisclosure
          buttonText="Patterns"
          categoryRoute={SidebarCategoryRoutes.PATTERNS}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-patterns',
              label: 'Patterns',
            })
          }
        >
          <SidebarAnchor level={1} to={SidebarCategoryRoutes.PATTERNS}>
            Overview
          </SidebarAnchor>
          {allPastePattern.map(({name, slug}: {[key: string]: string}) => (
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.PATTERNS}/${slug}`} key={slug}>
              {name}
            </SidebarAnchor>
          ))}
        </NavigationDisclosure>
        <SidebarSeparator />
        <NavigationDisclosure
          buttonText="Components"
          categoryRoute={SidebarCategoryRoutes.COMPONENTS}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-components',
              label: 'Components',
            })
          }
        >
          <SidebarAnchor level={1} to={SidebarCategoryRoutes.COMPONENTS}>
            Overview
          </SidebarAnchor>
          {filteredComponentSidebarItems.map(({name, slug}: {[key: string]: string}) => {
            if (name === 'Icon') {
              return (
                <NavigationDisclosure
                  buttonText={name}
                  categoryRoute={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`}
                  key={slug}
                  level={1}
                  onClick={() =>
                    trackCustomEvent({
                      category: 'Left Navigation',
                      action: `click-${name}`,
                      label: name,
                    })
                  }
                >
                  <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`}>
                    {name} list
                  </SidebarAnchor>
                  <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}/usage-guidelines`}>
                    Usage
                  </SidebarAnchor>
                </NavigationDisclosure>
              );
            }
            return (
              <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.COMPONENTS}/${slug}`} key={slug}>
                {name}
              </SidebarAnchor>
            );
          })}
        </NavigationDisclosure>
        <NavigationDisclosure
          buttonText="Primitives"
          categoryRoute={SidebarCategoryRoutes.PRIMITIVES}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-primitives',
              label: 'Primitives',
            })
          }
        >
          <SidebarAnchor level={1} to={SidebarCategoryRoutes.PRIMITIVES}>
            Overview
          </SidebarAnchor>
          {filteredPrimitives.map(({name, slug}: {[key: string]: string}) => (
            <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.PRIMITIVES}/${slug}`} key={slug}>
              {name}
            </SidebarAnchor>
          ))}
        </NavigationDisclosure>
        <NavigationDisclosure
          buttonText="Tokens"
          categoryRoute={SidebarCategoryRoutes.TOKENS}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-design-tokens',
              label: 'Design Tokens',
            })
          }
        >
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.TOKENS}`}>
            Overview
          </SidebarAnchor>
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.TOKENS}/list`}>
            Token list
          </SidebarAnchor>
          <SidebarAnchor level={1} to={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
            Design tokens package
          </SidebarAnchor>
        </NavigationDisclosure>
        <NavigationDisclosure
          buttonText="Core"
          categoryRoute={SidebarCategoryRoutes.CORE}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-core',
              label: 'Core',
            })
          }
        >
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
          <NavigationDisclosure buttonText="Libraries" categoryRoute={SidebarCategoryRoutes.LIBRARIES} level={1}>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}`}>
              Overview
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>
              UID library
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>
              Codemods
            </SidebarAnchor>
            <SidebarAnchor level={2} to={`${SidebarCategoryRoutes.LIBRARIES}/data-visualization`}>
              Data visualization
            </SidebarAnchor>
          </NavigationDisclosure>
        </NavigationDisclosure>
        <NavigationDisclosure
          buttonText="Customization"
          categoryRoute={SidebarCategoryRoutes.CUSTOMIZATION}
          level={0}
          onClick={() =>
            trackCustomEvent({
              category: 'Left Navigation',
              action: 'click-customization',
              label: 'Customization',
            })
          }
        >
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
        </NavigationDisclosure>
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
