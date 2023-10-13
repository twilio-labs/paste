import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface FileUploaderItemsListProps extends HTMLPasteProps<"ul"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_ITEMS_LIST'
   * @type {BoxProps['element']}
   * @memberof FileUploaderItemsListProps
   */
  element?: BoxProps["element"];
}

export const FileUploaderItemsList = React.forwardRef<HTMLUListElement, FileUploaderItemsListProps>(
  ({ children, element = "FILE_UPLOADER_ITEMS_LIST", ...props }, ref) => {
    return (
      <Box
        ref={ref}
        element={element}
        as="ul"
        margin="space0"
        padding="space0"
        rowGap="space30"
        display="flex"
        flexDirection="column"
        marginTop="space40"
        {...safelySpreadBoxProps(props)}
      >
        {children}
      </Box>
    );
  },
);

FileUploaderItemsList.displayName = "FileUploaderItemsList";
