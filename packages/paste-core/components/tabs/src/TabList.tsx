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

  const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
  const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();

  const setElementsToTrack = React.useCallback(() => {
    if (ref.current) {
      const currentScrollContainerRightPosition = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect()
        .right;
      const currentScrollContainerXOffset = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect().x;

      let leftOutOfBounds: HTMLDivElement | null = null;
      let rightOutOfBounds: HTMLDivElement | null = null;

      (ref.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
        const { x, right } = tab.getBoundingClientRect();
        if (x < currentScrollContainerXOffset) {
          leftOutOfBounds = tab;
        } else if (right > currentScrollContainerRightPosition + 10 && !rightOutOfBounds) {
          rightOutOfBounds = tab;
        }
      });

      setElementOutOfBoundsLeft(leftOutOfBounds);
      setElementOutOfBoundsRight(rightOutOfBounds);
    }
  }, [ref.current]);

  React.useEffect(() => {
    if (ref.current) {
      scrollableRef.current?.addEventListener("scroll", setElementsToTrack);
      setElementsToTrack();
    }
  }, [ref.current]);

  const handleScrollDirection = React.useCallback(
    (direction: "left" | "right") => {
      if (ref.current) {
        const ScrollableContainerOffset = scrollableRef.current?.getBoundingClientRect().x || 0;
        const ScrollableContainerWidth = scrollableRef.current?.getBoundingClientRect().width || 0;

        if (direction === "left" && elementOutOBoundsLeft) {
          scrollableRef.current?.scrollBy({
            left:
              elementOutOBoundsLeft.getBoundingClientRect().right -
              (ScrollableContainerWidth + ScrollableContainerOffset),
            behavior: "smooth",
          });
          return;
        }
        if (direction === "right" && elementOutOBoundsRight) {
          scrollableRef.current?.scrollBy({
            left: elementOutOBoundsRight.getBoundingClientRect().left - (ScrollableContainerOffset || 0),
            behavior: "smooth",
          });
          return;
        }
      }

      if (ref.current) {
        const scrollAmount = direction === "left" ? -ref.current.offsetWidth : ref.current.offsetWidth;
        ref.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    },
    [ref.current, elementOutOBoundsLeft, elementOutOBoundsRight],
  );

  return (
    <Box display="flex" overflow="clip">
      <OverflowButton
        position="left"
        onClick={() => handleScrollDirection("left")}
        visible={Boolean(elementOutOBoundsLeft)}
      />
      <Box as={StyledTabList as any} ref={scrollableRef} element={`${element}_SCROLL_WRAPPER`}>
        <Box
          element={`${element}_CONTAINER`}
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeak"}
          width={ref?.current?.scrollWidth}
        >
          <Box ref={ref} whiteSpace="nowrap" element={element} display="flex">
            {children}
          </Box>
        </Box>
      </Box>
      <OverflowButton
        position="right"
        onClick={() => handleScrollDirection("right")}
        visible={Boolean(elementOutOBoundsRight)}
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
