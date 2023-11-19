import type { BoxElementProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HeadingProps } from "@twilio-paste/heading";
import * as React from "react";

export interface ModalHeadingProps extends Omit<HeadingProps, "marginBottom" | "variant" | "as"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'h2'
   * @type {"h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
   * @memberof ModalHeadingProps
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MODAL_HEADING'
   * @type {BoxProps['element']}
   * @memberof ModalHeadingProps
   */
  element?: BoxElementProps["element"];
}
const ModalHeading = React.forwardRef<HTMLHeadingElement, ModalHeadingProps>(
  ({ children, as = "h2", element = "MODAL_HEADING", ...props }, ref) => {
    return (
      <Heading {...props} as={as} element={element} marginBottom="space0" variant="heading30" ref={ref}>
        {children}
      </Heading>
    );
  },
);
ModalHeading.displayName = "ModalHeading";

export { ModalHeading };
