import type { BoxProps } from "@twilio-paste/box";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface CalloutTextProps extends HTMLPasteProps<"p"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CALLOUT_TEXT"
   * @type {BoxProps["element"]}
   * @memberof CalloutTextProps
   */
  element?: BoxProps["element"];
}

export const CalloutText = React.forwardRef<HTMLParagraphElement, CalloutTextProps>(
  ({ element = "CALLOUT_TEXT", children, ...props }, ref) => (
    <Text
      {...safelySpreadTextProps(props)}
      as="p"
      ref={ref}
      element={element}
      color="currentColor"
      lineHeight="lineHeight40"
    >
      {children}
    </Text>
  ),
);

CalloutText.displayName = "CalloutText";
