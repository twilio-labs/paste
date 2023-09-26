import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import type { TextProps, TextStyleProps } from "@twilio-paste/text";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type DisplayHeadingVariants = "displayHeading10" | "displayHeading20" | "displayHeading30";
type AsTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "header";

export interface DisplayHeadingProps
  extends HTMLPasteProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span" | "header"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DISPLAY_HEADING'
   * @type {TextProps['element']}
   * @memberof DisplayHeadingProps
   */
  element?: TextProps["element"];
  /**
   * CSS display property
   *
   * @default 'block'
   * @type {TextProps['display']}
   * @memberof DisplayHeadingProps
   */
  display?: TextProps["display"];
  /**
   * HTML element to render, e.g., `h1`, `h2`, etc.
   *
   * @type {AsTags}
   * @memberof DisplayHeadingProps
   */
  as: AsTags;
  id?: string;
  /**
   * Currently we only allow space0 to remove bottom margin
   *
   * @type {'space0'}
   * @memberof DisplayHeadingProps
   */
  marginBottom?: "space0";
  /**
   * The variant of the display heading
   *
   * @type {DisplayHeadingVariants}
   * @memberof DisplayHeadingProps
   */
  variant: DisplayHeadingVariants;
}

const getDisplayHeadingProps = (
  displayHeadingVariant?: DisplayHeadingVariants,
  marginBottom?: "space0",
): TextStyleProps => {
  switch (displayHeadingVariant) {
    case "displayHeading10":
      return {
        marginBottom: marginBottom || "space170",
        fontSize: "fontSizeDisplay30",
        fontWeight: "fontWeightExtrabold",
        lineHeight: "lineHeightDisplay30",
      };
    case "displayHeading30":
      return {
        marginBottom: marginBottom || "space90",
        fontSize: "fontSizeDisplay10",
        fontWeight: "fontWeightExtrabold",
        lineHeight: "lineHeightDisplay10",
      };
    case "displayHeading20":
    default:
      return {
        marginBottom: marginBottom || "space130",
        fontSize: "fontSizeDisplay20",
        fontWeight: "fontWeightExtrabold",
        lineHeight: "lineHeightDisplay20",
      };
  }
};

const DisplayHeading = React.forwardRef<HTMLHeadingElement, DisplayHeadingProps>(
  ({ element = "DISPLAY_HEADING", as, children, display = "block", id, marginBottom, variant, ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        {...getDisplayHeadingProps(variant, marginBottom)}
        as={as}
        display={display}
        element={element}
        id={id}
        color="colorText"
        fontFamily="fontFamilyDisplay"
        variant={variant}
        ref={ref}
      >
        {children}
      </Text>
    );
  },
);

DisplayHeading.displayName = "DisplayHeading";

export { DisplayHeading };
