import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { IconSize } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface IconWrapperProps extends HTMLPasteProps<"span"> {
  /**
   * Sets the HTML element the IconWrapper renders as.
   *
   * @default "span"
   * @type {BoxProps["as"]}
   * @memberof IconWrapperProps
   */
  as?: BoxProps["as"];
  /**
   * Sets the color of the icon.
   *
   * @default "currentColor"
   * @type {BoxProps["color"]}
   * @memberof IconWrapperProps
   */
  color?: BoxProps["color"];
  /**
   * Sets the display of the icon.
   *
   * @default "block"
   * @type {BoxProps["display"]}
   * @memberof IconWrapperProps
   */
  display?: BoxProps["display"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "ICON"
   * @type {BoxProps["element"]}
   * @memberof IconWrapperProps
   */
  element?: BoxProps["element"];
  /**
   * Sets the size of the icon.
   *
   * @default "sizeIcon30"
   * @type {IconSize}
   * @memberof IconWrapperProps
   */
  size?: IconSize;
}

const IconWrapper = React.forwardRef<HTMLElement, IconWrapperProps>(
  (
    { as = "span", color = "currentColor", display = "block", element = "ICON", size = "sizeIcon30", ...props },
    ref,
  ) => (
    <Box
      {...safelySpreadBoxProps(props)}
      as={as}
      element={element}
      lineHeight="lineHeight0"
      display={display}
      color={color}
      size={size}
      ref={ref}
      flexShrink={0}
    />
  ),
);

IconWrapper.displayName = "IconWrapper";
export { IconWrapper };
