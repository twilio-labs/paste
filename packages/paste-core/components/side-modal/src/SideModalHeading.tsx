import type { BoxElementProps } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import type { HeadingProps } from "@twilio-paste/heading";
import * as React from "react";

export interface SideModalHeadingProps extends Omit<HeadingProps, "marginBottom" | "variant" | "as"> {
  /**
   * Child components to render into the SideModalHeading
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof SideModalHeadingProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * The element the `SideModalHeading` will render
   *
   * @default "h2"
   * @type {("h1" | "h2" | "h3" | "h4" | "h5" | "h6")}
   * @memberof SideModalHeadingProps
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL_HEADING"
   * @type {BoxElementProps["element"]}
   * @memberof SideModalHeadingProps
   */
  element?: BoxElementProps["element"];
}
const SideModalHeading = React.forwardRef<HTMLHeadingElement, SideModalHeadingProps>(
  ({ children, as = "h2", element = "SIDE_MODAL_HEADING", ...props }, ref) => {
    return (
      <Heading {...props} as={as} element={element} marginBottom="space0" variant="heading30" ref={ref}>
        {children}
      </Heading>
    );
  },
);
SideModalHeading.displayName = "SideModalHeading";

export { SideModalHeading };
