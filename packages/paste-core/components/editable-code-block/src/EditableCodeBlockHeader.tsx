import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import type { asTags } from "@twilio-paste/heading";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface EditableCodeBlockHeaderProps extends HTMLPasteProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6"> {
  children: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'EDITABLE_CODE_BLOCK_HEADER'
   * @type {BoxProps['element']}
   * @memberof EditableCodeBlockHeaderProps
   */
  element?: BoxProps["element"];
  as?: asTags;
}

export const EditableCodeBlockHeader = React.forwardRef<HTMLHeadingElement, EditableCodeBlockHeaderProps>(
  ({ children, element = "EDITABLE_CODE_BLOCK_HEADER", as = "h3", ...props }, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as={as}
      backgroundColor="colorBackgroundInverseStrong"
      color="colorTextInverse"
      paddingY="space50"
      paddingX="space70"
      margin="space0"
      borderTopLeftRadius="borderRadius20"
      borderTopRightRadius="borderRadius20"
      fontWeight="fontWeightSemibold"
      fontSize="fontSize30"
      borderBottomWidth="borderWidth30"
      borderBottomColor="colorBorderInverseWeakest"
      borderBottomStyle="solid"
    >
      {children}
    </Box>
  ),
);

EditableCodeBlockHeader.displayName = "EditableCodeBlockHeader";
