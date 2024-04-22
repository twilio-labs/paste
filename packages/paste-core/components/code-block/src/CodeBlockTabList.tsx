import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { TabListProps } from "@twilio-paste/tabs";
import { type ThemeShape, useTheme } from "@twilio-paste/theme";
import * as React from "react";

const ShadowLeft = styled.div(({ bgColor }: { bgColor: string }) => {
  return css({
    content: "' '",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: "70px",
    pointerEvents: "none",
    background: `linear-gradient(to right, ${bgColor}, rgba(0, 0, 0, 0))}`,
  });
});

const ShadowRight = styled.div(({ bgColor }: { bgColor: string }) => {
  return css({
    content: "' '",
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: "70px",
    pointerEvents: "none",
    background: `linear-gradient(to right, rgba(0, 0, 0, 0), ${bgColor})}`,
  });
});

/**
 * This wrapper applies styles that customize the scrollbar and its track.
 */
const StyledTabList = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundStronger, colorBackgroundInverseStronger } = theme.backgroundColors;

  return css({
    paddingRight: "space70",
    position: "relative",
    bottom: "-1px",
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
  ({ children, element = "CODE_BLOCK_TAB_LIST", ...props }, fwdRef) => {
    const theme = useTheme();
    // Create a fallback ref to the scrollable element
    const scrollableRef = React.useRef<HTMLDivElement>(null);
    // Use the provided ref, or if none is provided use the fallback
    const ref = (fwdRef || scrollableRef) as React.RefObject<HTMLDivElement>;
    // State to keep track of the scroll overflow shadows to display
    const [scrollShadow, setScrollShadow] = React.useState<"none" | "left" | "right" | "both">("none");

    // Function to handle scroll event
    const handleScroll = (): void => {
      if (ref.current) {
        // No scrollbar, so no shadow
        if (ref.current.clientWidth === ref.current.scrollWidth) {
          setScrollShadow("none");
        }
        // We're positioned on the left most side, so only show right shadow
        else if (ref.current.scrollLeft === 0) {
          setScrollShadow("right");
        } else if (
          // We're positioned on the right most side, so only show left shadow
          ref.current.scrollLeft + ref.current.clientWidth ===
          ref.current.scrollWidth
        ) {
          setScrollShadow("left");
        } else {
          // Show both shadows
          setScrollShadow("both");
        }
      }
    };

    return (
      <Box
        element={`${element}_WRAPPER`}
        paddingLeft="space70"
        position="relative"
        borderBottomStyle="solid"
        borderBottomWidth="borderWidth10"
        borderBottomColor="colorBorderInverseWeaker"
      >
        <Box
          {...safelySpreadBoxProps(props)}
          as={StyledTabList as any}
          ref={ref}
          display="flex"
          flexWrap="nowrap"
          flexShrink={0}
          aria-label="label"
          element={element}
          overflowX="auto"
          overflowY="hidden"
          onScroll={handleScroll}
        >
          {children}
        </Box>
        {scrollShadow === "left" || scrollShadow === "both" ? (
          <ShadowLeft bgColor={theme.backgroundColors.colorBackgroundInverseStrong} />
        ) : null}
        {scrollShadow === "right" || scrollShadow === "both" ? (
          <ShadowRight bgColor={theme.backgroundColors.colorBackgroundInverseStrong} />
        ) : null}
      </Box>
    );
  },
);

CodeBlockTabList.displayName = "CodeBlockTabList";
