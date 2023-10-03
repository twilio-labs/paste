import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface DetailTextProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'DETAIL_TEXT'
   * @type {BoxProps['element']}
   * @memberof DetailTextProps
   */
  element?: BoxProps["element"];
  /**
   * The HTML tag to render the Detail Text as
   *
   * @default 'div'
   * @type {BoxProps['as']}
   * @memberof DetailTextProps
   */
  as?: BoxProps["as"];
  /**
   * The marginTop of the DetailText. Currently we only allow space0 to remove top margin.
   *
   * @default 'space30'
   * @type {('space0' | 'space30')}
   * @memberof DetailTextProps
   */
  marginTop?: "space0" | "space30";
}

export const DetailText = React.forwardRef<HTMLDivElement, DetailTextProps>(
  ({ element = "DETAIL_TEXT", as = "div", children, marginTop = "space30", ...props }, ref) => {
    return (
      <Box
        as={as}
        ref={ref}
        element={element}
        {...safelySpreadBoxProps(props)}
        marginTop={marginTop}
        color="colorTextWeak"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        fontWeight="fontWeightMedium"
      >
        {children}
      </Box>
    );
  },
);

DetailText.displayName = "DetailText";
