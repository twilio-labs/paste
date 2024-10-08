import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { type TabListProps, TabsContext } from "@twilio-paste/tabs";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import * as React from "react";

import { OverflowButton } from "./OverflowButton";

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

export interface CodeBlockTabListProps extends Omit<TabListProps, "aria-label"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK_TAB_LIST"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockTabListProps
   */
  element?: BoxProps["element"];
}

export const CodeBlockTabList = React.forwardRef<HTMLDivElement, CodeBlockTabListProps>(
  ({ children, element = "CODE_BLOCK_TAB_LIST", ...props }, ref) => {
    const tabContext = React.useContext(TabsContext);
    //  ref to the scrollable element
    const scrollableRef = React.useRef<HTMLDivElement>(null);

    // Keep track of first elements that are paritally or completely out of view in either direction
    const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
    const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();

    // Runs on load and resize and on scroll to set the elements that are out of view
    const setElementsToTrack = React.useCallback(() => {
      if (scrollableRef.current) {
        const currentScrollContainerRightPosition = (
          scrollableRef.current?.parentElement as HTMLDivElement
        )?.getBoundingClientRect().right;

        let leftOutOfBounds: HTMLDivElement | null = null;
        let rightOutOfBounds: HTMLDivElement | null = null;

        (scrollableRef.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
          const { x, right } = tab.getBoundingClientRect();
          /**
           * Compares the left side of the tab with the left side of the scrollable container position
           * as the x value will not be 0 due to being offset in the screen
           */
          if (x < (scrollableRef.current?.getBoundingClientRect().x || 0)) {
            leftOutOfBounds = tab;
          }
          /**
           * Compares the right side to the end of container with some buffer. Also ensure there are
           * no value set as it loops through the array we don't want it to override the first value out of bounds.
           */
          if (right > currentScrollContainerRightPosition + 10 && !rightOutOfBounds) {
            rightOutOfBounds = tab;
          }
        });

        setElementOutOfBoundsLeft(leftOutOfBounds);
        setElementOutOfBoundsRight(rightOutOfBounds);
      }
    }, [scrollableRef.current]);

    React.useEffect(() => {
      if (scrollableRef.current) {
        scrollableRef.current.addEventListener("scroll", setElementsToTrack);
        window.addEventListener("resize", setElementsToTrack);
        setElementsToTrack();
      }
    }, [scrollableRef.current]);

    // Cleanup event listeners on destroy
    React.useEffect(() => {
      return () => {
        if (scrollableRef.current) {
          scrollableRef.current.removeEventListener("scroll", setElementsToTrack);
          window.removeEventListener("resize", setElementsToTrack);
        }
      };
    }, []);

    /**
     * Scrolls to the element that is out of bounds (from React State), centering it in the scrollable container
     * Logic to handle scrolling also replicated in Tabs and InPageNavigation. If changing here, consider reviewing those components too.
     */
    const handleScrollDirection = React.useCallback(
      (direction: "left" | "right") => {
        if (scrollableRef.current) {
          const elementToScrollTo = direction === "left" ? elementOutOBoundsLeft : elementOutOBoundsRight;
          if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
      },
      [scrollableRef.current, elementOutOBoundsLeft, elementOutOBoundsRight],
    );

    return (
      <TabPrimitiveList {...(tabContext as any)} as={Box} {...props} element={element} ref={ref}>
        <Box
          element={`${element}_CHILD_WRAPPER`}
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderInverseWeaker"
          display="flex"
          // Clip to hide box shadow on the tabs overflowing container
          overflowY="clip"
        >
          <OverflowButton
            position="left"
            onClick={() => handleScrollDirection("left")}
            visible={Boolean(elementOutOBoundsLeft)}
            element={element}
          />
          <Box
            {...safelySpreadBoxProps(props)}
            as={StyledTabList as any}
            ref={scrollableRef}
            display="flex"
            flexWrap="nowrap"
            flexShrink={0}
            element={`${element}_CHILD`}
            overflowX="auto"
            overflowY="hidden"
            flexGrow={1}
            width="calc(100% - 60px)"
          >
            {children}
          </Box>
          <OverflowButton
            position="right"
            onClick={() => handleScrollDirection("right")}
            visible={Boolean(elementOutOBoundsRight)}
            element={element}
          />
        </Box>
      </TabPrimitiveList>
    );
  },
);

CodeBlockTabList.displayName = "CodeBlockTabList";
