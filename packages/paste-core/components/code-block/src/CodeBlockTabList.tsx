import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { TabListProps } from "@twilio-paste/tabs";
import type { ThemeShape } from "@twilio-paste/theme";
import * as React from "react";

const StyledTabListWrapper = styled.div(({ theme }: { theme: ThemeShape }) => {
  return css({
    paddingLeft: "space70",
    position: "relative",
    borderBottomStyle: "solid",
    borderBottomWidth: "borderWidth10",
    borderBottomColor: "colorBorderInverseWeaker",

    "::after": {
      content: "' '",
      position: "absolute",
      right: 0,
      top: 0,
      bottom: 0,
      width: "50px",
      pointerEvents: "none",
      background: `linear-gradient(to right, rgba(0, 0, 0, 0), ${theme.backgroundColors.colorBackgroundInverseStrong})}`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 15px, 100% 15px, 100% 5px, 100% 5px",
      backgroundAttachment: `local, local, scroll, scroll`,
    },
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
  ({ children, element = "CODE_BLOCK_TAB_LIST", ...props }, ref) => {
    return (
      <Box as={StyledTabListWrapper as any} element={`${element}_WRAPPER`}>
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
        >
          {children}
        </Box>
      </Box>
    );
  },
);

CodeBlockTabList.displayName = "CodeBlockTabList";
