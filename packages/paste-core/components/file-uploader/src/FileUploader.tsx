import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { FileUploaderContext } from "./FileUploaderContext";

export interface FileUploaderProps extends Omit<HTMLPasteProps<"input">, "onChange"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER'
   * @type {BoxProps['element']}
   * @memberof FileUploaderProps
   */
  element?: BoxProps["element"];
  /**
   * Disables the FileUploader
   *
   * @type {boolean}
   * @memberof FileUploaderProps
   */
  disabled?: boolean;
  /**
   * The id of the FileUploader. Used to create ids for the elements within the FileUploader.
   *
   * @type {string}
   * @memberof FileUploaderProps
   */
  id?: string;
  /**
   * The name for the input within the FileUploader
   *
   * @type {string}
   * @memberof FileUploaderProps
   */
  name: string;
  /**
   * If the FileUploader is required.
   *
   * @type {boolean}
   * @memberof FileUploaderProps
   */
  required?: boolean;
}

export const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
  ({ element = "FILE_UPLOADER", disabled, id: idProp, name, required = false, ...props }, ref) => {
    const id = idProp ? idProp : useUID();

    return (
      <FileUploaderContext.Provider value={{ disabled, id, name, required }}>
        <Box ref={ref} element={element} {...safelySpreadBoxProps(props)} maxWidth="size60">
          {props.children}
        </Box>
      </FileUploaderContext.Provider>
    );
  },
);

FileUploader.displayName = "FileUploader";
