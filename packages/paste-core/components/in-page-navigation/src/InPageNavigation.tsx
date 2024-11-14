import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { InPageNavigationContext } from "./InPageNavigationContext";
import { OverflowButton } from "./OverflowButton";
import type { Orientation, Variants } from "./types";
import { handleScrollDirection, useElementsOutOfBounds, useShowShadow } from "./utils";

export interface InPageNavigationProps extends Omit<HTMLPasteProps<"div">, "children"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'IN_PAGE_NAVIGATION'
   * @type {BoxProps['element']}
   * @memberof InPageNavigationProps
   */
  element?: BoxProps["element"];
  /**
   * Allows removal of bottom margin by setting `space0`
   *
   * @memberof InPageNavigationProps
   */
  marginBottom?: "space0";
  /**
   * Unique label for the InPageNavigation
   *
   * @type {string}
   * @memberof InPageNavigationProps
   */
  "aria-label": string;
  /**
   * InPageNavigation variant
   *
   * @type {Variants}
   * @memberof InPageNavigationProps
   */
  variant?: Variants;
  /**
   * InPageNavigation orientation
   *
   * @type {Orientation}
   * @memberof InPageNavigationProps
   */
  orientation?: Orientation;
  /**
   * Use sparingly
   *
   * @type {boolean}
   * @default false
   * @memberof InPageNavigationProps
   */
  hideBottomBorder?: boolean;
}

const StyledScrollWrapper = styled.div(() => {
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

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  (
    {
      element = "IN_PAGE_NAVIGATION",
      variant = "default",
      orientation = "horizontal",
      marginBottom,
      hideBottomBorder = false,
      children,
      ...props
    },
    ref,
  ) => {
    const isFullWidth = variant === "fullWidth" || variant === "inverse_fullWidth";
    const isInverse = variant === "inverse" || variant === "inverse_fullWidth";
    const listRef = React.useRef<HTMLOListElement>(null);
    //  ref to the scrollable element
    const scrollableRef = React.useRef<HTMLDivElement>(null);

    const { determineElementsOutOfBounds, elementOutOBoundsLeft, elementOutOBoundsRight } = useElementsOutOfBounds();
    const { handleShadow, showShadow } = useShowShadow();

    const handleScrollEvent = (): void => {
      handleShadow();
      determineElementsOutOfBounds(scrollableRef.current, listRef.current);
    };

    // Scroll to the selected tab if it exists on mount
    React.useEffect(() => {
      if (listRef.current && scrollableRef.current) {
        const currentSelectedTab = listRef.current.querySelector(`[aria-current="page"]`);
        const scrollableWidth = scrollableRef.current.getBoundingClientRect().width;

        if (
          currentSelectedTab &&
          (currentSelectedTab?.getBoundingClientRect().x < 0 ||
            currentSelectedTab?.getBoundingClientRect().right > scrollableWidth)
        ) {
          const scrollLeft =
            currentSelectedTab.getBoundingClientRect().x - scrollableRef.current.getBoundingClientRect().x;
          scrollableRef.current.scrollLeft += scrollLeft;
        }

        scrollableRef.current?.addEventListener("scroll", handleScrollEvent);
        window.addEventListener("resize", handleScrollEvent);
        determineElementsOutOfBounds(scrollableRef.current, listRef.current);
      }
    }, [listRef.current, scrollableRef.current]);

    // Cleanup event listeners on destroy
    React.useEffect(() => {
      return () => {
        if (scrollableRef.current) {
          scrollableRef.current.removeEventListener("scroll", handleScrollEvent);
          window.removeEventListener("resize", handleScrollEvent);
        }
      };
    }, []);

    if (orientation === "vertical") {
      return (
        <InPageNavigationContext.Provider value={{ variant, orientation }}>
          <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
            <Box
              as="ul"
              listStyleType="none"
              element={`${element}_ITEMS`}
              display="flex"
              flexDirection="column"
              margin="space0"
              padding="space0"
              width="100%"
              rowGap="space20"
            >
              {children}
            </Box>
          </Box>
        </InPageNavigationContext.Provider>
      );
    }

    if (isFullWidth) {
      return (
        <InPageNavigationContext.Provider value={{ variant, orientation }}>
          <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
            <Box
              as="ul"
              listStyleType="none"
              element={`${element}_ITEMS`}
              display="flex"
              justifyContent="space-evenly"
              columnGap="space0"
              padding="space0"
              margin="space0"
              marginBottom={marginBottom || "space60"}
              borderBottomWidth={hideBottomBorder ? "borderWidth0" : "borderWidth10"}
              borderBottomStyle={hideBottomBorder ? "none" : "solid"}
              borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeaker"}
            >
              {children}
            </Box>
          </Box>
        </InPageNavigationContext.Provider>
      );
    }

    return (
      <InPageNavigationContext.Provider value={{ variant, orientation }}>
        <Box
          {...safelySpreadBoxProps(props)}
          as="nav"
          marginBottom={marginBottom || "space60"}
          display="flex"
          ref={ref}
          element={element}
          overflow="hidden"
        >
          <OverflowButton
            position="left"
            onClick={() =>
              handleScrollDirection("left", elementOutOBoundsLeft, elementOutOBoundsRight, scrollableRef.current)
            }
            visible={Boolean(elementOutOBoundsLeft)}
            element={element}
            showShadow={showShadow}
          />
          <Box
            as={StyledScrollWrapper as any}
            display="flex"
            flexWrap="nowrap"
            element={`${element}_SCROLL_WRAPPER`}
            overflowX="auto"
            overflowY="hidden"
            flexGrow={1}
            ref={scrollableRef}
          >
            <Box
              as="ul"
              ref={listRef}
              listStyleType="none"
              element={`${element}_ITEMS`}
              display="flex"
              flexGrow={1}
              justifyContent="flex-start"
              padding="space0"
              margin="space0"
              columnGap="space50"
              borderBottomWidth={hideBottomBorder ? "borderWidth0" : "borderWidth10"}
              borderBottomStyle={hideBottomBorder ? "none" : "solid"}
              borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeaker"}
            >
              {children}
            </Box>
          </Box>
          <OverflowButton
            position="right"
            onClick={() =>
              handleScrollDirection("right", elementOutOBoundsLeft, elementOutOBoundsRight, scrollableRef.current)
            }
            visible={Boolean(elementOutOBoundsRight)}
            element={element}
            showShadow={showShadow}
          />
        </Box>
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
