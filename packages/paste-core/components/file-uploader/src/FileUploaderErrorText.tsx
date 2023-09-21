import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import type { HelpTextProps } from "@twilio-paste/help-text";
import * as React from "react";

import { FileUploaderContext } from "./FileUploaderContext";

export interface FileUploaderErrorTextProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  children?: HelpTextProps["children"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_ERROR_TEXT'
   * @type {HelpTextProps['element']}
   * @memberof FileUploaderErrorTextProps
   */
  element?: HelpTextProps["element"];
}

export const FileUploaderErrorText = React.forwardRef<HTMLDivElement, FileUploaderErrorTextProps>(
  ({ children, element = "FILE_UPLOADER_ERROR_TEXT", ...props }, ref) => {
    const { id } = React.useContext(FileUploaderContext);

    return (
      <Box marginTop="space50" ref={ref} element={element} {...safelySpreadBoxProps(props)} id={`${id}-error-text`}>
        <HelpText variant="error" marginTop="space0">
          {children}
        </HelpText>
      </Box>
    );
  },
);

FileUploaderErrorText.displayName = "FileUploaderErrorText";
