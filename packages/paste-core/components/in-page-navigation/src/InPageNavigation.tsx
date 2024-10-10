import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { InPageNavigationContext } from "./InPageNavigationContext";
import { OverflowButton } from "./OverflowButton";
import type { Orientation, Variants } from "./types";

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
    // Keep track of first elements that are paritally or completely out of view in either direction
    const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
    const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();
    const [showShadow, setShowShadow] = React.useState(false);
    let showShadowTimer: number;

    // Runs on load and resize and on scroll to set the elements that are out of view
    const setElementsToTrack = React.useCallback(() => {
      if (listRef.current) {
        const currentScrollContainerRightPosition = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect()
          .right;
        const currentScrollContainerXOffset = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect().x;

        let leftOutOfBounds: HTMLDivElement | null = null;
        let rightOutOfBounds: HTMLDivElement | null = null;

        (listRef.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
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
    }, [listRef.current, elementOutOBoundsLeft, elementOutOBoundsRight]);

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

    // Scroll to the selected tab if it exists on mount
    React.useEffect(() => {
      if (listRef.current && scrollableRef.current) {
        setTimeout(
          () =>
            listRef.current
              ?.querySelector(`[aria-current="page"]`)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore - behavior is typed incorrectly in Typescript v4, fixed in v5+
              ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }),
          1,
        );
        scrollableRef.current?.addEventListener("scroll", handleScrollEvent);
        window.addEventListener("resize", setElementsToTrack);
        setElementsToTrack();
      }
    }, [listRef.current, scrollableRef.current]);

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
     * Logic to handle scrolling also replicated in CodeBlock and Tabs. If changing here, consider reviewing those components too.
     */
    const handleScrollDirection = React.useCallback(
      (direction: "left" | "right") => {
        if (listRef.current) {
          const elementToScrollTo = direction === "left" ? elementOutOBoundsLeft : elementOutOBoundsRight;
          if (elementToScrollTo) {
            elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          }
        }
      },
      [listRef.current, elementOutOBoundsLeft, elementOutOBoundsRight],
    );

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
              ref={listRef}
              listStyleType="none"
              element={`${element}_ITEMS`}
              display="flex"
              justifyContent="space-evenly"
              columnGap="space50"
              padding="space0"
              margin="space0"
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
            onClick={() => handleScrollDirection("left")}
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
              justifyContent="flex-start"
              padding="space0"
              margin="space0"
              borderBottomWidth={hideBottomBorder ? "borderWidth0" : "borderWidth10"}
              borderBottomStyle={hideBottomBorder ? "none" : "solid"}
              borderBottomColor={isInverse ? "colorBorderInverseWeaker" : "colorBorderWeaker"}
            >
              {children}
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
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
