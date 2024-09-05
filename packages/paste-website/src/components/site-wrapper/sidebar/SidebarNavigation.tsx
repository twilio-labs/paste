import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import {
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureContent,
  type SidebarNavigationDisclosureContentProps,
  SidebarNavigationDisclosureHeading,
  type SidebarNavigationDisclosureHeadingProps,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationSeparator,
  useSidebarNavigationDisclosureState,
} from "@twilio-paste/sidebar";
import kebabCase from "lodash/kebabCase";
import * as React from "react";

import { SidebarCategoryRoutes } from "../../../constants";
import { useNavigationContext } from "../../../context/NavigationContext";
import { event } from "../../../lib/gtag";
import { getNormalizedNavigationData } from "../../../utils/DataUtils";
import { useLocationPathname } from "../../../utils/RouteUtils";
import { alphabetizeComponents } from "../../../utils/componentFilters";
import { SidebarAnchor } from "./SidebarAnchor";

const CY_BASE = "sidebar-disclosure";

const NavigationDisclosure: React.FC<
  React.PropsWithChildren<{
    children: SidebarNavigationDisclosureContentProps["children"];
    categoryRoute: (typeof SidebarCategoryRoutes)[keyof typeof SidebarCategoryRoutes];
    buttonText: string;
    onClick?: SidebarNavigationDisclosureHeadingProps["onClick"];
  }>
> = ({ children, categoryRoute, buttonText, onClick }) => {
  const pathname = useLocationPathname();
  const disclosure = useSidebarNavigationDisclosureState({
    visible: pathname.startsWith(categoryRoute),
  });
  const buttonAttribute = `${CY_BASE}-button-${kebabCase(buttonText)}`;
  const contentAttribute = `${CY_BASE}-content-${kebabCase(buttonText)}`;

  return (
    <SidebarNavigationDisclosure state={disclosure}>
      <SidebarNavigationDisclosureHeadingWrapper>
        <SidebarNavigationDisclosureHeading
          selected={pathname.startsWith(categoryRoute)}
          onClick={onClick}
          data-cy={buttonAttribute}
        >
          {buttonText}
        </SidebarNavigationDisclosureHeading>
      </SidebarNavigationDisclosureHeadingWrapper>
      <SidebarNavigationDisclosureContent data-cy={contentAttribute}>{children}</SidebarNavigationDisclosureContent>
    </SidebarNavigationDisclosure>
  );
};

const SiteSidebarNavigation = (): JSX.Element => {
  // TODO: move to a server component in the App directory
  const navigationData = useNavigationContext();
  const pathname = useLocationPathname();

  // take airtable feature data and mutate it into navigation data
  const {
    allPasteComponent,
    allPasteLayout,
    allPastePrimitive,
    allPastePattern,
    allPastePageTemplate,
    allPasteExperience,
  } = getNormalizedNavigationData(navigationData);

  const allComponentSidebarItems = [...allPasteComponent, ...allPasteLayout];
  const filteredComponentSidebarItems = allComponentSidebarItems.sort(alphabetizeComponents);

  const filteredPrimitives = allPastePrimitive?.sort(alphabetizeComponents);

  return (
    <SidebarNavigation aria-label="main" hierarchical>
      <NavigationDisclosure
        buttonText="Introduction"
        categoryRoute={SidebarCategoryRoutes.INTRODUCTION}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-introduction",
            label: "Introduction",
          })
        }
      >
        <SidebarAnchor href="/introduction/about-paste">About Paste</SidebarAnchor>
        <NavigationDisclosure buttonText="For designers" categoryRoute={SidebarCategoryRoutes.FOR_DESIGNERS}>
          <SidebarAnchor href={`${SidebarCategoryRoutes.FOR_DESIGNERS}/design-guidelines`}>
            Design guidelines
          </SidebarAnchor>
        </NavigationDisclosure>
        <NavigationDisclosure buttonText="For engineers" categoryRoute={SidebarCategoryRoutes.FOR_ENGINEERS}>
          <SidebarAnchor href={`${SidebarCategoryRoutes.FOR_ENGINEERS}/quickstart`}>Quick start</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.FOR_ENGINEERS}/manual-installation`}>
            Manual installation
          </SidebarAnchor>
        </NavigationDisclosure>
        <NavigationDisclosure buttonText="Contributing" categoryRoute={SidebarCategoryRoutes.CONTRIBUTING}>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTRIBUTING}/components`}>Components</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTRIBUTING}/icons`}>Icons</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTRIBUTING}/patterns`}>Patterns</SidebarAnchor>
        </NavigationDisclosure>
        <SidebarAnchor href={`${SidebarCategoryRoutes.INTRODUCTION}/working-with-us`}>Working with us</SidebarAnchor>
      </NavigationDisclosure>
      <SidebarAnchor href="/inclusive-design">Accessibility</SidebarAnchor>
      <SidebarNavigationSeparator />
      <NavigationDisclosure buttonText="Foundations" categoryRoute={SidebarCategoryRoutes.FOUNDATIONS}>
        <SidebarAnchor href={`${SidebarCategoryRoutes.FOUNDATIONS}/colors`}>Colors</SidebarAnchor>
        <NavigationDisclosure
          buttonText="Content"
          categoryRoute={SidebarCategoryRoutes.CONTENT}
          onClick={() =>
            event({
              category: "Left Navigation",
              action: "click-content",
              label: "Content",
            })
          }
        >
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTENT}`}>Overview</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTENT}/content-checklist`}>Content checklist</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTENT}/voice-and-tone`}>Voice and tone</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTENT}/product-style-guide`}>
            Product style guide
          </SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.CONTENT}/word-list`}>Word list</SidebarAnchor>
        </NavigationDisclosure>
        <SidebarAnchor href={`${SidebarCategoryRoutes.FOUNDATIONS}/data-visualization`}>
          Data visualization
        </SidebarAnchor>
        <SidebarAnchor
          href={`${SidebarCategoryRoutes.FOUNDATIONS}/illustrations`}
          onClick={() =>
            event({
              category: "Left Navigation",
              action: "click-illustrations",
              label: "Illustrations",
            })
          }
        >
          Illustrations
        </SidebarAnchor>
        <SidebarAnchor
          href={`${SidebarCategoryRoutes.FOUNDATIONS}/localization`}
          onClick={() =>
            event({
              category: "Left Navigation",
              action: "click-localization",
              label: "Localization",
            })
          }
        >
          Localization
        </SidebarAnchor>
        <SidebarAnchor
          href={`${SidebarCategoryRoutes.FOUNDATIONS}/spacing-and-layout`}
          onClick={() =>
            event({
              category: "Left Navigation",
              action: "click-spacing-and-layout",
              label: "Spacing and layout",
            })
          }
        >
          Spacing and layout
        </SidebarAnchor>
        <SidebarAnchor
          href={`${SidebarCategoryRoutes.FOUNDATIONS}/typography`}
          onClick={() =>
            event({
              category: "Left Navigation",
              action: "click-typography",
              label: "Typography",
            })
          }
        >
          Typography
        </SidebarAnchor>
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Patterns"
        categoryRoute={SidebarCategoryRoutes.PATTERNS}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-patterns",
            label: "Patterns",
          })
        }
      >
        <SidebarAnchor href={SidebarCategoryRoutes.PATTERNS}>Overview</SidebarAnchor>
        {allPastePattern.map(({ name, slug }: { [key: string]: string }) => (
          <SidebarAnchor href={`${SidebarCategoryRoutes.PATTERNS}/${slug}`} key={slug}>
            {name}
          </SidebarAnchor>
        ))}
      </NavigationDisclosure>
      <NavigationDisclosure buttonText="Page templates" categoryRoute={SidebarCategoryRoutes.PAGE_TEMPLATES}>
        <SidebarAnchor href={SidebarCategoryRoutes.PAGE_TEMPLATES}>Overview</SidebarAnchor>
        {allPastePageTemplate.map(({ name, slug }: { [key: string]: string }) => (
          <SidebarAnchor href={`${SidebarCategoryRoutes.PAGE_TEMPLATES}/${slug}`} key={slug}>
            {name}
          </SidebarAnchor>
        ))}
      </NavigationDisclosure>
      <NavigationDisclosure buttonText="Experiences" categoryRoute={SidebarCategoryRoutes.EXPERIENCES}>
        <SidebarAnchor href={SidebarCategoryRoutes.EXPERIENCES}>Overview</SidebarAnchor>
        {allPasteExperience.map(({ name, slug }: { [key: string]: string }) => (
          <SidebarAnchor href={`${SidebarCategoryRoutes.EXPERIENCES}/${slug}`} key={slug}>
            {name}
          </SidebarAnchor>
        ))}
      </NavigationDisclosure>
      <SidebarNavigationSeparator />
      <NavigationDisclosure
        buttonText="Components"
        categoryRoute={SidebarCategoryRoutes.COMPONENTS}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-components",
            label: "Components",
          })
        }
      >
        <SidebarAnchor href={SidebarCategoryRoutes.COMPONENTS}>Overview</SidebarAnchor>
        {filteredComponentSidebarItems.map(({ name, slug }: { [key: string]: string }) => {
          const categoryRoute = `${SidebarCategoryRoutes.COMPONENTS}/${slug}`;
          const selected = pathname.endsWith(categoryRoute) || pathname.includes(`${categoryRoute}/`);
          if (name === "Icon") {
            return (
              <NavigationDisclosure
                buttonText={name}
                categoryRoute={categoryRoute}
                key={slug}
                onClick={() =>
                  event({
                    category: "Left Navigation",
                    action: `click-${name}`,
                    label: name,
                  })
                }
              >
                <SidebarAnchor href={categoryRoute}>{name} list</SidebarAnchor>
                <SidebarAnchor href={`${SidebarCategoryRoutes.COMPONENTS}/${slug}/usage-guidelines`}>
                  Usage
                </SidebarAnchor>
              </NavigationDisclosure>
            );
          }
          if (name === "Combobox") {
            return (
              <NavigationDisclosure
                buttonText={name}
                categoryRoute={categoryRoute}
                key={slug}
                onClick={() =>
                  event({
                    category: "Left Navigation",
                    action: `click-${name}`,
                    label: name,
                  })
                }
              >
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/combobox`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/combobox`)}
                >
                  Singleselect
                </SidebarAnchor>
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/multiselect-combobox`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/multiselect-combobox`)}
                >
                  Multiselect
                </SidebarAnchor>
              </NavigationDisclosure>
            );
          }
          if (name === "Multiselect Combobox") {
            return null;
          }
          if (name === "Status") {
            return (
              <NavigationDisclosure
                buttonText={name}
                categoryRoute={categoryRoute}
                key={slug}
                onClick={() =>
                  event({
                    category: "Left Navigation",
                    action: `click-${name}`,
                    label: name,
                  })
                }
              >
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/status-badge`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/status-badge`)}
                >
                  Status Badge
                </SidebarAnchor>
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/status-menu`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/status-menu`)}
                >
                  Status Menu
                </SidebarAnchor>
              </NavigationDisclosure>
            );
          }
          if (name === "Sidebar") {
            return (
              <NavigationDisclosure
                buttonText={name}
                categoryRoute={categoryRoute}
                key={slug}
                onClick={() =>
                  event({
                    category: "Left Navigation",
                    action: `click-${name}`,
                    label: name,
                  })
                }
              >
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/sidebar`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/sidebar`)}
                >
                  Sidebar Container
                </SidebarAnchor>
                <SidebarAnchor
                  href={`${SidebarCategoryRoutes.COMPONENTS}/sidebar-navigation`}
                  selected={pathname.includes(`${SidebarCategoryRoutes.COMPONENTS}/sidebar-navigation`)}
                >
                  Sidebar Navigation
                </SidebarAnchor>
              </NavigationDisclosure>
            );
          }
          if (name === "Sidebar Navigation") {
            return null;
          }
          return (
            <SidebarAnchor selected={selected} href={categoryRoute} key={slug}>
              {name}
            </SidebarAnchor>
          );
        })}
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Primitives"
        categoryRoute={SidebarCategoryRoutes.PRIMITIVES}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-primitives",
            label: "Primitives",
          })
        }
      >
        <SidebarAnchor href={SidebarCategoryRoutes.PRIMITIVES}>Overview</SidebarAnchor>
        {filteredPrimitives.map(({ name, slug }: { [key: string]: string }) => {
          const selected = pathname.includes(`${SidebarCategoryRoutes.PRIMITIVES}/${slug}`);
          return (
            <SidebarAnchor selected={selected} href={`${SidebarCategoryRoutes.PRIMITIVES}/${slug}`} key={slug}>
              {name}
            </SidebarAnchor>
          );
        })}
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Tokens"
        categoryRoute={SidebarCategoryRoutes.TOKENS}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-design-tokens",
            label: "Design Tokens",
          })
        }
      >
        <SidebarAnchor href={`${SidebarCategoryRoutes.TOKENS}`}>Overview</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.TOKENS}/list`}>Token list</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.TOKENS}/design-tokens-package`}>
          Design tokens package
        </SidebarAnchor>
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Core"
        categoryRoute={SidebarCategoryRoutes.CORE}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-core",
            label: "Core",
          })
        }
      >
        <SidebarAnchor href={SidebarCategoryRoutes.CORE}>Paste core</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CORE}/changelog`}>Core changelog</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CORE}/upgrade-guide`}>Upgrade guide</SidebarAnchor>
        <NavigationDisclosure buttonText="Libraries" categoryRoute={SidebarCategoryRoutes.LIBRARIES}>
          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}`}>Overview</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}/code-editor`}>Code Editor</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}/codemods`}>Codemods</SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}/data-visualization`}>
            Data visualization
          </SidebarAnchor>
          <SidebarAnchor href="https://main--5e53448165911c0022e68c74.chromatic.com/?path=/story/libraries-clipboard-copy--default">
            <span>Clipboard Copy</span>
            <LinkExternalIcon decorative />
          </SidebarAnchor>
          <SidebarAnchor href="https://github.com/twilio-labs/svg-to-react/blob/master/README.md">
            <span>SVG-to-React</span>
            <LinkExternalIcon decorative />
          </SidebarAnchor>
          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}/uid-library`}>UID library</SidebarAnchor>

          <SidebarAnchor href={`${SidebarCategoryRoutes.LIBRARIES}/vs-code-plugin`}>VS Code Plugin</SidebarAnchor>
        </NavigationDisclosure>
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Theme"
        categoryRoute={SidebarCategoryRoutes.THEME}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-theme",
            label: "Theme",
          })
        }
      >
        <SidebarAnchor href={`${SidebarCategoryRoutes.THEME}`}>Overview</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.THEME}/dark-theme`}>Dark theme</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.THEME}/changing-theme`}>Changing the theme</SidebarAnchor>
      </NavigationDisclosure>
      <NavigationDisclosure
        buttonText="Customization"
        categoryRoute={SidebarCategoryRoutes.CUSTOMIZATION}
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-customization",
            label: "Customization",
          })
        }
      >
        <SidebarAnchor href={`${SidebarCategoryRoutes.CUSTOMIZATION}/`}>Overview</SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CUSTOMIZATION}/customization-provider`}>
          Customization Provider
        </SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CUSTOMIZATION}/creating-a-custom-theme`}>
          Customizing themes
        </SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CUSTOMIZATION}/customizing-component-elements`}>
          Customizing components
        </SidebarAnchor>
        <SidebarAnchor href={`${SidebarCategoryRoutes.CUSTOMIZATION}/composing-custom-components-with-design-tokens`}>
          Composing custom UI with tokens
        </SidebarAnchor>
      </NavigationDisclosure>
      <SidebarNavigationSeparator />
      <SidebarAnchor
        href="/blog"
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-blog",
            label: "Blog",
          })
        }
      >
        Blog
      </SidebarAnchor>
      <SidebarAnchor
        href="/roadmap"
        onClick={() =>
          event({
            category: "Left Navigation",
            action: "click-roadmap",
            label: "Roadmap",
          })
        }
      >
        Roadmap
      </SidebarAnchor>
    </SidebarNavigation>
  );
};

export { SiteSidebarNavigation as SidebarNavigation };
