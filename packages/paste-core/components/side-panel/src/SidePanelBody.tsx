import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { ThemeShape } from "@twilio-paste/theme";
import * as React from "react";

import type { SidePanelBodyProps } from "./types";

// This wrapper applies styles that customize the scrollbar and its track
const SidePanelBodyWrapper = styled.div(({ theme }: { theme: ThemeShape }) => {
  const { colorBackgroundBody, colorBackground, colorBackgroundStrong } = theme.backgroundColors;

  return css({
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

const SidePanelBody = React.forwardRef<HTMLDivElement, SidePanelBodyProps>(
  ({ element = "SIDE_PANEL_BODY", children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as={SidePanelBodyWrapper as any}
        width="100%"
        height="100%"
        paddingLeft="space70"
        // @ts-expect-error no 18px spacing token but we need this amount of padding to offset the scrollbar (24px - 6px)
        paddingRight="18px"
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
