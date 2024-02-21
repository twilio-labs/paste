import type { TextStyleProps } from "@twilio-paste/text";
import { Text, safelySpreadTextProps } from "@twilio-paste/text";
import * as React from "react";

import type { HeadingProps, HeadingVariants } from "./types";

function getHeadingProps(headingVariant?: HeadingVariants, marginBottom?: "space0"): TextStyleProps {
  switch (headingVariant) {
    case "heading10":
      return {
        marginBottom: marginBottom || "space70",
        fontSize: "fontSize90",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight90",
        letterSpacing: "-.02em",
      };
    case "heading30":
      return {
        marginBottom: marginBottom || "space50",
        fontSize: "fontSize60",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight60",
        letterSpacing: "-.02em",
      };
    case "heading40":
      return {
        marginBottom: marginBottom || "space30",
        fontSize: "fontSize40",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight40",
        letterSpacing: "-.02em",
      };
    case "heading50":
      return {
        marginBottom: marginBottom || "space30",
        fontSize: "fontSize30",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight30",
        letterSpacing: "-.02em",
      };
    case "heading60":
      return {
        marginBottom: marginBottom || "space30",
        fontSize: "fontSize20",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight20",
        letterSpacing: "-.02em",
      };
    /**
     * heading20 is out of order because its also default.
     * Default is at the bottom of switch statement for readability.
     */
    case "heading20":
    default:
      return {
        marginBottom: marginBottom || "space60",
        fontSize: "fontSize70",
        fontWeight: "fontWeightSemibold",
        lineHeight: "lineHeight70",
        letterSpacing: "-.02em",
      };
  }
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ as, children, display = "block", element = "HEADING", id, marginBottom, variant, ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        {...getHeadingProps(variant, marginBottom)}
        as={as}
        display={display}
        element={element}
        id={id}
        color="colorText"
        variant={variant}
        ref={ref}
      >
        {children}
      </Text>
    );
  },
);

Heading.displayName = "Heading";
export { Heading };
