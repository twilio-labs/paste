import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import type { HelpTextProps } from "@twilio-paste/help-text";
import * as React from "react";

import { FileUploaderContext } from "./FileUploaderContext";

export interface FileUploaderHelpTextProps extends Omit<React.ComponentPropsWithRef<"div">, "children"> {
  children?: HelpTextProps["children"];
  /**
   *  Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_HELP_TEXT'
   * @type {HelpTextProps['element']}
   * @memberof FileUploaderHelpTextProps
   */
  element?: HelpTextProps["element"];
}

export const FileUploaderHelpText = React.forwardRef<HTMLDivElement, FileUploaderHelpTextProps>(
  ({ children, element = "FILE_UPLOADER_HELP_TEXT", ...props }, ref) => {
    const { id } = React.useContext(FileUploaderContext);

    return (
      <Box ref={ref} element={element} {...safelySpreadBoxProps(props)} id={`${id}-help-text`}>
        <HelpText marginTop="space0">{children}</HelpText>
      </Box>
    );
  },
);

FileUploaderHelpText.displayName = "FileUploaderHelpText";
