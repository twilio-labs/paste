import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

interface ScreenReaderOnlyProps extends HTMLPasteProps<"span"> {
  children: NonNullable<React.ReactNode>;
  id?: string;
  as?: BoxProps["as"];
}

const ScreenReaderOnly = React.forwardRef<HTMLElement, ScreenReaderOnlyProps>(
  ({ as = "span", children, ...props }, ref) => {
    return (
      <Box
        {...props}
        as={as}
        border="none"
        clip="rect(0 0 0 0)"
        height="1px"
        margin="spaceNegative10"
        overflow="hidden"
        padding="space0"
        position="absolute"
        ref={ref}
        textTransform="none"
        whiteSpace="nowrap"
        width="1px"
      >
        {children}
      </Box>
    );
  },
);
ScreenReaderOnly.displayName = "ScreenReaderOnly";

export { ScreenReaderOnly };
export type { ScreenReaderOnlyProps };
