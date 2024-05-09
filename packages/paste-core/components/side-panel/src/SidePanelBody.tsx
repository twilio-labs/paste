import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

// This wrapper applies styles that customize the scrollbar and its track
const SidePanelBodyWrapper = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundBody, colorBackground, colorBackgroundStrong } = theme.backgroundColors;

  return css({
    /*
     * backgroundRepeat: "no-repeat",
     * overflowScrolling: "touch",
     * backgroundSize: "100% 15px, 100% 15px, 100% 5px, 100% 5px",
     * backgroundAttachment: "local, local, scroll, scroll",
     */

    // Scrollbar
    "::-webkit-scrollbar": {
      width: "6px",
    },
    // Track
    "::-webkit-scrollbar-track": {
      marginTop: "8px",
      background: colorBackgroundBody,
      borderRadius: "10px",
    },
    // Handle
    "::-webkit-scrollbar-thumb": {
      background: colorBackground,
      borderRadius: "10px",
    },
    // Handle on hover
    "::-webkit-scrollbar-thumb:hover": {
      background: colorBackgroundStrong,
    },
  });
});

export interface SidePanelBodyProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL_BODY"
   * @type {BoxProps['element']}
   * @memberof SidePanelBodyProps
   */
  element?: BoxProps["element"];
}

const SidePanelBody = React.forwardRef<HTMLDivElement, SidePanelBodyProps>(
  ({ element = "SIDE_PANEL_BODY", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={SidePanelBodyWrapper as any}
        width="100%"
        height="100%"
        paddingLeft="space40"
        // @ts-expect-error no 6px spacing token but we need this amount of padding to offset the scrollbar
        paddingRight="6px"
        // paddingBottom="space70"
        display="flex"
        ref={ref}
        element={element}
        overflowY="scroll"
      >
        {children}
      </Box>
    );
  },
);

SidePanelBody.displayName = "SidePanelBody";

export { SidePanelBody };
