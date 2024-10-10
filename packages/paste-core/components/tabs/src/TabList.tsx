import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { OverflowButton } from "./OverflowButton";
import { TabsContext } from "./TabsContext";
import type { Variants } from "./types";
import { getElementName } from "./utils";

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

  // Keep track of first elements that are paritally or completely out of view in either direction
  const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
  const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();
  const [showShadow, setShowShadow] = React.useState(false);
  let showShadowTimer: number;

  // Runs on load and resize and on scroll to set the elements that are out of view
  const setElementsToTrack = React.useCallback(() => {
    if (ref.current) {
      const currentScrollContainerRightPosition = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect()
        .right;
      const currentScrollContainerXOffset = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect().x;

      let leftOutOfBounds: HTMLDivElement | null = null;
      let rightOutOfBounds: HTMLDivElement | null = null;

      (ref.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
        const { x, right } = tab.getBoundingClientRect();
        // Check if the tab is spanning the view if text is really long on smaller devices, wont skip to next element
        const isSpanningView = x < currentScrollContainerXOffset && right > currentScrollContainerRightPosition;
        if (!isSpanningView) {
          /**
           * Compares the left side of the tab with the left side of the scrollable container position
           * as the x value will not be 0 due to being offset in the screen.
           */
          if (x < currentScrollContainerXOffset) {
            leftOutOfBounds = tab;
          }
          /**
           * Compares the right side to the end of container with some buffer. Also ensure there are
           * no value set as it loops through the array we don't want it to override the first value out of bounds.
           */
          if (right > currentScrollContainerRightPosition + 10 && !rightOutOfBounds) {
            rightOutOfBounds = tab;
          }
        }
      });

      setElementOutOfBoundsLeft(leftOutOfBounds);
      setElementOutOfBoundsRight(rightOutOfBounds);
    }
  }, [ref.current, elementOutOBoundsLeft, elementOutOBoundsRight]);

  // Show shadow on scroll
  const handleScrollEvent = (): void => {
    if (showShadowTimer) {
      window.clearTimeout(showShadowTimer);
    }
    setShowShadow(true);
    showShadowTimer = window.setTimeout(() => {
      setShowShadow(false);
    }, 500);
    setElementsToTrack();
  };

  React.useEffect(() => {
    if (ref.current) {
      scrollableRef.current?.addEventListener("scroll", handleScrollEvent);
      window.addEventListener("resize", setElementsToTrack);
      setElementsToTrack();
    }
  }, [ref.current]);

  // Cleanup event listeners on destroy
  React.useEffect(() => {
    return () => {
      if (scrollableRef.current) {
        scrollableRef.current.removeEventListener("scroll", handleScrollEvent);
        window.removeEventListener("resize", setElementsToTrack);
      }
    };
  }, []);

  /**
   * Scrolls to the element that is out of bounds (from React State), centering it in the scrollable container
   * Logic to handle scrolling also replicated in CodeBlock and InPageNavigation. If changing here, consider reviewing those components too.
   */
  const handleScrollDirection = React.useCallback(
    (direction: "left" | "right") => {
      if (ref.current) {
        const elementToScrollTo = direction === "left" ? elementOutOBoundsLeft : elementOutOBoundsRight;
        if (elementToScrollTo) {
          elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
      }
    },
    [ref.current, elementOutOBoundsLeft, elementOutOBoundsRight],
  );

  return (
    <Box display="flex" overflow="hidden">
      <OverflowButton
        position="left"
        onClick={() => handleScrollDirection("left")}
        visible={Boolean(elementOutOBoundsLeft)}
        element={element}
        showShadow={showShadow}
      />
      <Box as={StyledTabList as any} ref={scrollableRef} element={`${element}_SCROLL_WRAPPER`}>
        <Box element={`${element}_CONTAINER`} width={ref?.current?.scrollWidth}>
          <Box
            ref={ref}
            whiteSpace="nowrap"
            element={element}
            display="flex"
            borderBottomStyle="solid"
            borderBottomWidth="borderWidth10"
            borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
          >
            {children}
          </Box>
        </Box>
      </Box>
      <OverflowButton
        position="right"
        onClick={() => handleScrollDirection("right")}
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
