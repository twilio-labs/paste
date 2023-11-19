import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface RequiredDotProps extends HTMLPasteProps<"span"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'REQUIRED_DOT'
   * @type {BoxProps['element']}
   * @memberof RequiredDotProps
   */
  element?: BoxProps["element"];
  i18nLabel?: string;
}

export const RequiredDot: React.FC<React.PropsWithChildren<RequiredDotProps>> = ({
  element = "REQUIRED_DOT",
  i18nLabel = "Required",
  ...props
}) => {
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      alignItems="center"
      justifyContent="center"
      as="span"
      cursor="pointer"
      display="flex"
      height="sizeIcon30"
      title={i18nLabel}
      element={`${element}_WRAPPER`}
    >
      <Box
        as="span"
        backgroundColor="colorBackgroundRequired"
        borderRadius="borderRadiusCircle"
        display="block"
        height="4px"
        width="4px"
        element={element}
      >
        <ScreenReaderOnly>{i18nLabel}</ScreenReaderOnly>
      </Box>
    </Box>
  );
};

RequiredDot.displayName = "RequiredDot";
