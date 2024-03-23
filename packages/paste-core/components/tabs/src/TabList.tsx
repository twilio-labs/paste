import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName } from "./utils";
import {TabListScrollButton} from "./TabListScrollButton"

export interface TabListProps extends HTMLPasteProps<"div"> {
  /**
   * Required label for this Tabs component. Titles the entire Tabbing context for screen readers.
   *
   * @type {string}
   * @memberof TabListProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "HORIZONTAL_TAB_LIST" or "VERTICAL_TAB_LIST"
   * @type {BoxProps["element"]}
   * @memberof TabListProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
  /**
   * Changes each Tab to either equally fit the width of the containing element or hug the contents of its label.
   *
   * @type {Variants}
   * @memberof TabListProps
   */
  variant?: Variants;
  /**
   * Accessible text for the scroll left button when horizontal tabs overflow the container.
   *
   * @type {string}
   * @memberof TabListProps
   * @default "scroll tab list to the left"
   */
  i18nScrollLeftLabel?: string;
  /**
   * Accessible text for the scroll right button when horizontal tabs overflow the container.
   *
   * @type {string}
   * @memberof TabListProps
   * @default "scroll tab list to the right"
   */
  i18nScrollRightLabel?: string;
}

const HorizontalTabListStyle = styled.div(() => {
  return css({
    "::-webkit-scrollbar": {
      display: "none",
    },
    "ms-overflow-style": "none",
    "scrollbar-width": "none",
  });
});

const HorizontalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"]; scrollLeftLabel: string; scrollRightLabel: string }>> = ({
  children,
  variant,
  element,
  scrollLeftLabel,
  scrollRightLabel
}) => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted";
  const [showLeftScrollButton, setShowLeftScrollButton] = React.useState(false);
  const [showRightScrollButton, setShowRightScrollButton] = React.useState(true);
  const tabListId = useUID();
  
  return (
    <Box
      as={HorizontalTabListStyle as any}
      position="relative"
      display="flex"
      borderBottomStyle="solid"
      borderBottomWidth="borderWidth10"
      borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
      columnGap="space20"
      overflowX="scroll"
      element={element}
      id={tabListId}
      onScroll={() => {
        // eslint-disable-next-line unicorn/prefer-query-selector
        const tabList = document.getElementById(tabListId);
        const scrollPosition = tabList?.scrollLeft
        const containerWidth = tabList?.scrollWidth && tabList?.scrollWidth - tabList?.clientWidth
        if (scrollPosition && scrollPosition > 0) setShowLeftScrollButton(true);
        else if (scrollPosition === 0) setShowLeftScrollButton(false);
        if (scrollPosition && containerWidth && scrollPosition < containerWidth) setShowRightScrollButton(true)
        else if (scrollPosition && containerWidth && scrollPosition === containerWidth) setShowRightScrollButton(false);
      }}
    >
      {showLeftScrollButton && <TabListScrollButton direction="left" label={scrollLeftLabel} />}
      {children}
      {showRightScrollButton && <TabListScrollButton direction="right" label={scrollRightLabel} />}
    </Box>
  );
};

HorizontalTabList.displayName = "HorizontalTabList";

const VerticalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  element,
  variant,
}) => {
  const isInverse = variant === "inverse" || variant === "inverse_fitted";
  return (
    <Box
      element={element}
      marginRight="space110"
      minWidth="size20"
      maxWidth="size40"
      borderRightStyle="solid"
      borderRightWidth="borderWidth10"
      borderRightColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
    >
      {children}
    </Box>
  );
};

VerticalTabList.displayName = "VerticalTabList";

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({ children, element, variant, i18nScrollLeftLabel = "scroll tab list to the left", i18nScrollRightLabel = "scroll tab list to the right", ...props }, ref) => {
  const tab = React.useContext(TabsContext);
  const { orientation } = tab;
  const elementName = getElementName(orientation, "TAB_LIST", element);
  const TabListWrapper = orientation === "vertical" ? VerticalTabList : HorizontalTabList;

  return (
    <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={elementName} ref={ref}>
      <TabListWrapper variant={variant || tab.variant} element={`${elementName}_CHILD`} scrollLeftLabel={i18nScrollLeftLabel} scrollRightLabel={i18nScrollRightLabel}>
        {children}
      </TabListWrapper>
    </TabPrimitiveList>
  );
});

TabList.displayName = "TabList";
export { TabList };
