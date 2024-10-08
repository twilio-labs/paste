import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import { ThemeShape } from "@twilio-paste/theme";
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
    const scrollableRef = React.useRef<HTMLDivElement>(null);
    const [elementOutOBoundsLeft, setElementOutOfBoundsLeft] = React.useState<HTMLDivElement | null>();
    const [elementOutOBoundsRight, setElementOutOfBoundsRight] = React.useState<HTMLDivElement | null>();

    const setElementsToTrack = React.useCallback(() => {
      if (listRef.current) {
        const currentScrollContainerRightPosition = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect()
          .right;
        const currentScrollContainerXOffset = (scrollableRef.current as HTMLDivElement)?.getBoundingClientRect().x;

        let leftOutOfBounds: HTMLDivElement | null = null;
        let rightOutOfBounds: HTMLDivElement | null = null;

        (listRef.current.childNodes as NodeListOf<HTMLDivElement>).forEach((tab) => {
          const { x, right } = tab.getBoundingClientRect();
          if (x < currentScrollContainerXOffset - 10 && tab !== elementOutOBoundsLeft) {
            leftOutOfBounds = tab;
          } else if (
            right > currentScrollContainerRightPosition + 10 &&
            !rightOutOfBounds &&
            tab !== elementOutOBoundsRight
          ) {
            rightOutOfBounds = tab;
          }
        });

        setElementOutOfBoundsLeft(leftOutOfBounds);
        setElementOutOfBoundsRight(rightOutOfBounds);
      }
    }, [listRef.current, elementOutOBoundsLeft, elementOutOBoundsRight]);

    // Scroll to the selected tab if it exists on mount
    React.useEffect(() => {
      if (listRef.current) {
        setTimeout(
          () =>
            listRef.current
              ?.querySelector(`[aria-current="page"]`)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore - behavior is typed incorrectly in Typescript v4, fixed in v5+
              ?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" }),
          1,
        );
        scrollableRef.current?.addEventListener("scroll", setElementsToTrack);
        window.addEventListener("resize", setElementsToTrack);
        setElementsToTrack();
      }
    }, [listRef.current]);

    const handleScrollDirection = React.useCallback(
      (direction: "left" | "right") => {
        if (listRef.current) {
          if (direction === "left" && elementOutOBoundsLeft) {
            elementOutOBoundsLeft.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            return;
          }
          if (direction === "right" && elementOutOBoundsRight) {
            elementOutOBoundsRight.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
            return;
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
              justifyContent={isFullWidth ? "space-evenly" : "flex-start"}
              columnGap={!isFullWidth ? "space50" : "space0"}
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
          />
        </Box>
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
