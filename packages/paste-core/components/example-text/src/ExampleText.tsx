import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ExampleTextProps extends HTMLPasteProps<"samp"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default 'EXAMPLE_TEXT'
   * @type {BoxProps['element']}
   * @memberof ExampleTextProps
   */
  element?: BoxProps["element"];
}

const ExampleText = React.forwardRef<HTMLDivElement, ExampleTextProps>(
  ({ element = "EXAMPLE_TEXT", children, ...props }, ref) => {
    return (
      <Box as="samp" display="inline-block" element={`${element}_WRAPPER`}>
        <Box
          {...safelySpreadBoxProps(props)}
          as="kbd"
          display="inline-block"
          backgroundColor="colorBackground"
          fontFamily="fontFamilyText"
          fontWeight="fontWeightMedium"
          fontSize="fontSize30"
          lineHeight="lineHeight40"
          borderRadius="borderRadius20"
          paddingX="space30"
          element={element}
          ref={ref}
        >
          {children}
        </Box>
      </Box>
    );
  },
);

ExampleText.displayName = "ExampleText";

export { ExampleText };
