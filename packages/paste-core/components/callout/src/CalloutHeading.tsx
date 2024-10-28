import type { BoxProps } from "@twilio-paste/box";
import type { asTags } from "@twilio-paste/heading";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface CalloutHeadingProps extends HTMLPasteProps<asTags> {
  /**
   *
   * @default "h3"
   * @type {asTags}
   * @memberof CalloutHeadingProps
   */
  as?: asTags;
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CALLOUT_HEADING"
   * @type {BoxProps["element"]}
   * @memberof CalloutHeadingProps
   */
  element?: BoxProps["element"];
}

export const CalloutHeading = React.forwardRef<HTMLHeadingElement, CalloutHeadingProps>(
  ({ element = "CALLOUT_HEADING", children, as = "h3", ...props }, ref) => (
    <Text
      {...safelySpreadTextProps(props)}
      as={as}
      ref={ref}
      element={element}
      color="currentColor"
      fontWeight="fontWeightSemibold"
    >
      {children}
    </Text>
  ),
);

CalloutHeading.displayName = "CalloutHeading";
