import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { type TabListProps, TabsContext } from "@twilio-paste/tabs";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import * as React from "react";

import { OverflowButton } from "./OverflowButton";
import { handleScrollDirection, useElementsOutOfBounds, useShowShadow } from "./utlis";

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
    const listRef = React.useRef<HTMLDivElement>(null);

    const { determineElementsOutOfBounds, elementOutOBoundsLeft, elementOutOBoundsRight } = useElementsOutOfBounds();
    const { handleShadow, showShadow } = useShowShadow();

    const handleScrollEvent = (): void => {
      handleShadow();
      determineElementsOutOfBounds(scrollableRef.current, listRef.current);
    };

    React.useEffect(() => {
      if (scrollableRef.current && listRef.current) {
        scrollableRef.current.addEventListener("scroll", handleScrollEvent);
        window.addEventListener("resize", handleScrollEvent);
        determineElementsOutOfBounds(scrollableRef.current, listRef.current);
      }
    }, [scrollableRef.current, listRef.current]);

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
      <TabPrimitiveList {...(tabContext as any)} as={Box} {...props} element={element} ref={ref}>
        <Box element={`${element}_CHILD_WRAPPER`} display="flex">
          <OverflowButton
            position="left"
            onClick={() =>
              handleScrollDirection("left", elementOutOBoundsLeft, elementOutOBoundsRight, listRef.current)
            }
            visible={Boolean(elementOutOBoundsLeft)}
            element={element}
            showShadow={showShadow}
          />
          <Box
            {...safelySpreadBoxProps(props)}
            as={StyledTabList as any}
            ref={scrollableRef}
            display="flex"
            flexWrap="nowrap"
            element={`${element}_CHILD_SCROLL_WRAPPER`}
            overflowX="auto"
            overflowY="hidden"
            flexGrow={1}
            width="calc(100% - 60px)"
          >
            <Box
              whiteSpace="nowrap"
              element={`${element}_CHILD`}
              display="flex"
              borderBottomStyle="solid"
              borderBottomWidth="borderWidth10"
              borderBottomColor="colorBorderInverseWeaker"
              ref={listRef}
              flexGrow={1}
              columnGap="space20"
            >
              {children}
            </Box>
          </Box>
          <OverflowButton
            position="right"
            onClick={() =>
              handleScrollDirection("right", elementOutOBoundsLeft, elementOutOBoundsRight, listRef.current)
            }
            visible={Boolean(elementOutOBoundsRight)}
            element={element}
            showShadow={showShadow}
          />
        </Box>
      </TabPrimitiveList>
    );
  },
);

CodeBlockTabList.displayName = "CodeBlockTabList";
