import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, paddingTop, styled } from "@twilio-paste/styling-library";
import { type TabListProps, TabsContext } from "@twilio-paste/tabs";
import { TabPrimitiveList } from "@twilio-paste/tabs-primitive";
import { type ThemeShape, useTheme } from "@twilio-paste/theme";
import * as React from "react";

const Shadow = styled.div(({ bgColor, position }: { bgColor: string; position: "left" | "right" }) => {
  const Styles = {
    left: {
      boxShadow: `6px 12px 12px 2px ${bgColor}`,
      left: 0,
    },
    right: {
      boxShadow: `-6px 12px 12px 2px ${bgColor}`,
      right: 0,
    },
  };

  return css({
    content: "' '",
    position: "absolute",
    top: 0,
    bottom: 0,
    pointerEvents: "none",
    ...Styles[position],
  });
});

/**
 * This wrapper applies styles that customize the scrollbar and its track.
 */
const StyledTabList = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundStronger, colorBackgroundInverseStronger } = theme.backgroundColors;

  return css({
    paddingRight: "space70",
    paddingTop: "1px",
    position: "relative",
    bottom: "-1px",
    overflowX: "auto",
    overflowY: "visible",
    overflowScrolling: "touch",
    /* Firefox scrollbar */
    "@supports (-moz-appearance:none)": {
      paddingBottom: "0px",
      scrollbarColor: `${colorBackgroundStronger} transparent`,
      scrollbarWidth: "none",
    },
    /* Chrome + Safari scrollbar */
    "::-webkit-scrollbar": {
      height: 0,
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
    const tab = React.useContext(TabsContext);
    const theme = useTheme();
    //  ref to the scrollable element
    const scrollableRef = React.useRef<HTMLDivElement>(null);
    const [scrollShadow, setScrollShadow] = React.useState<"none" | "left" | "right" | "both">("none");

    // Function to handle scroll event
    const handleScroll = (): void => {
      if (scrollableRef.current) {
        // No scrollbar, so no shadow
        if (scrollableRef.current.clientWidth === scrollableRef.current.scrollWidth) {
          setScrollShadow("none");
        }
        // We're positioned on the left most side, so only show right shadow
        else if (scrollableRef.current.scrollLeft === 0) {
          setScrollShadow("right");
        } else if (
          // We're positioned on the right most side, so only show left shadow
          scrollableRef.current.scrollLeft + scrollableRef.current.clientWidth ===
          scrollableRef.current.scrollWidth
        ) {
          setScrollShadow("left");
        } else {
          // Show both shadows
          setScrollShadow("both");
        }
      }
    };

    return (
      <TabPrimitiveList {...(tab as any)} as={Box} {...props} element={element} ref={ref}>
        <Box
          element={`${element}_CHILD_WRAPPER`}
          marginX="space70"
          position="relative"
          borderBottomStyle="solid"
          borderBottomWidth="borderWidth10"
          borderBottomColor="colorBorderInverseWeaker"
        >
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
            onScroll={handleScroll}
          >
            {children}
          </Box>
          {scrollShadow === "left" || scrollShadow === "both" ? (
            <Shadow position="left" bgColor={theme.backgroundColors.colorBackgroundBodyInverse} />
          ) : null}
          {scrollShadow === "right" || scrollShadow === "both" ? (
            <Shadow position="right" bgColor={theme.backgroundColors.colorBackgroundBodyInverse} />
          ) : null}
        </Box>
      </TabPrimitiveList>
    );
  },
);

CodeBlockTabList.displayName = "CodeBlockTabList";
