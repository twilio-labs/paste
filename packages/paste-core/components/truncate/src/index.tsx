"use client";
import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

interface TruncateProps extends HTMLPasteProps<"span">, Pick<BoxProps, "as"> {
  children: NonNullable<React.ReactNode>;
  /**
   * An accessible label that should match the content of the truncated text. Allows users to see the truncated content.
   *
   * @type {string}
   * @memberof TruncateProps
   */
  title: string;
}

const Truncate = React.forwardRef<HTMLSpanElement, TruncateProps>(({ children, ...props }, ref) => {
  return (
    <Box
      {...props}
      as="span"
      display="inline-block"
      verticalAlign="bottom"
      textDecoration="inherit"
      maxWidth="100%"
      overflow="hidden"
      ref={ref}
      textOverflow="ellipsis"
      whiteSpace="nowrap"
    >
      {children}
    </Box>
  );
});
Truncate.displayName = "Truncate";

export { Truncate };
export type { TruncateProps };
