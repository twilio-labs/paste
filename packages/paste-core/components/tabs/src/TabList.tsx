import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { OverflowButton } from "./OverflowButton";
import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName, handleScrollDirection, useElementsOutOfBounds, useShowShadow } from "./utils";

/**
 * This wrapper applies styles that customize the scrollbar and its track.
 */
const StyledTabList = styled.div(() => {
  return css({
    overflowX: "auto",
    overflowY: "hidden",
    overflowScrolling: "touch",
    /* Firefox scrollbar */
    "@supports (-moz-appearance:none)": {
      paddingBottom: "0px",
      scrollbarWidth: "none",
    },
    /* Chrome + Safari scrollbar */
    "::-webkit-scrollbar": {
      height: 0,
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
  });
});

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
}

const HorizontalTabList: React.FC<React.PropsWithChildren<{ variant?: Variants; element?: BoxProps["element"] }>> = ({
  children,
  variant,
  element,
}) => {
  const ref = React.useRef<HTMLElement>(null);
  //  ref to the scrollable element
  const scrollableRef = React.useRef<HTMLDivElement>(null);
  const isInverse = variant === "inverse" || variant === "inverse_fitted";

  const { determineElementsOutOfBounds, elementOutOBoundsLeft, elementOutOBoundsRight } = useElementsOutOfBounds();
  const { handleShadow, showShadow } = useShowShadow();

  const handleScrollEvent = (): void => {
    handleShadow();
    determineElementsOutOfBounds(scrollableRef.current, ref.current);
  };

  React.useEffect(() => {
    if (ref.current) {
      scrollableRef.current?.addEventListener("scroll", handleScrollEvent);
      window.addEventListener("resize", handleScrollEvent);
      determineElementsOutOfBounds(scrollableRef.current, ref.current);
    }
  }, [ref.current, scrollableRef.current]);

  // Cleanup event listeners on destroy
  React.useEffect(() => {
    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener("scroll", handleScrollEvent);
        window.removeEventListener("resize", handleScrollEvent);
      }
    };
  }, []);

  return (
    <Box display="flex" overflow="hidden">
      <OverflowButton
        position="left"
        onClick={() => handleScrollDirection("left", elementOutOBoundsLeft, elementOutOBoundsRight, ref.current)}
        visible={Boolean(elementOutOBoundsLeft)}
        element={element}
        showShadow={showShadow}
      />
      <Box as={StyledTabList as any} ref={scrollableRef} flexGrow={1} element={`${element}_SCROLL_WRAPPER`}>
        <Box
          ref={ref}
          position="relative"
          whiteSpace="nowrap"
          element={element}
          display="flex"
          columnGap="space20"
          // @ts-expect-error 1px is not available in tokens
          paddingTop="1px"
          // marginBottom="1px"
          boxShadow={isInverse ? "shadowBorderBottomInverseWeaker" : "shadowBorderBottomWeak"}
          // Scrollable element needs borderto stretch to full contianer width. Non scrollable needs to stretch border to parent width.
          width={elementOutOBoundsRight || elementOutOBoundsLeft ? "max-content" : "auto"}
        >
          {children}
          <Box
            position="absolute"
            width="100%"
            height="1px"
            backgroundColor={isInverse ? "colorBackgroundInverse" : "colorBackgroundBody"}
            bottom="-1px"
          />
        </Box>
      </Box>
      <OverflowButton
        position="right"
        onClick={() => handleScrollDirection("right", elementOutOBoundsLeft, elementOutOBoundsRight, ref.current)}
        visible={Boolean(elementOutOBoundsRight)}
        element={element}
        showShadow={showShadow}
      />
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

const TabList = React.forwardRef<HTMLDivElement, TabListProps>(({ children, element, variant, ...props }, ref) => {
  const tab = React.useContext(TabsContext);
  const { orientation } = tab;
  const elementName = getElementName(orientation, "TAB_LIST", element);
  const TabListWrapper = orientation === "vertical" ? VerticalTabList : HorizontalTabList;

  return (
    <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={elementName} ref={ref}>
      <TabListWrapper variant={variant || tab.variant} element={`${elementName}_CHILD`}>
        {children}
      </TabListWrapper>
    </TabPrimitiveList>
  );
});

TabList.displayName = "TabList";
export { TabList };
