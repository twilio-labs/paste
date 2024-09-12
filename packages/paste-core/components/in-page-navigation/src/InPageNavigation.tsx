import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { css, styled } from "@twilio-paste/styling-library";
import { ThemeShape } from "@twilio-paste/theme";
import { InPageNavigationContext } from "./InPageNavigationContext";
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

const StyledScrollTabList = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundStronger, colorBackgroundInverseStronger } = theme.backgroundColors;

  return css({
    paddingX: "space10",
    paddingBottom: "4px",
    marginBottom: "4px",
    overflowX: "auto",
    overflowY: "hidden",
    overflowScrolling: "touch",
    /* Firefox scrollbar */
    "@supports (-moz-appearance:none)": {
      paddingBottom: "0px",
      scrollbarColor: `${colorBackgroundStronger} transparent`,
      scrollbarWidth: "thin",
    },
    /* Chrome + Safari scrollbar */
    "::-webkit-scrollbar": {
      height: 4,
    },
    "::-webkit-scrollbar-track": {
      background: "transparent",
    },
    "::-webkit-scrollbar-thumb": {
      background: colorBackgroundStronger,
      borderRadius: "5px",
    },
    "::-webkit-scrollbar-thumb:hover": {
      background: colorBackgroundInverseStronger,
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
    // Scroll to the selected tab if it exists on mount
    React.useEffect(() => {
      if (listRef.current) {
        setTimeout(
          () =>
            listRef.current
              ?.querySelector(`[aria-current="page"]`)
              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore - behavior is typed incorrectly in Typescript v4, fixed in v5+
              ?.scrollIntoView({ behavior: "smooth" }),
          1,
        );
      }
    }, [listRef.current]);

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

    return (
      <InPageNavigationContext.Provider value={{ variant, orientation }}>
        <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
          <Box
            as={StyledScrollTabList as any}
            display="flex"
            flexWrap="nowrap"
            flexShrink={0}
            element={`${element}_SCROLL_WRAPPER`}
            overflowX="auto"
            overflowY="hidden"
            marginBottom={marginBottom || "space60"}
          >
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
        </Box>
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = "InPageNavigation";

export { InPageNavigation };
