import { Label } from "@twilio-paste/label";
import type { LabelProps } from "@twilio-paste/label";
import * as React from "react";

import { FileUploaderContext } from "./FileUploaderContext";

export type FileUploaderLabelProps = Omit<React.ComponentPropsWithRef<"label">, "children"> & {
  children: LabelProps["children"];
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILE_UPLOADER_LABEL'
   * @type {LabelProps['element']}
   */
  element?: LabelProps["element"];
};

export const FileUploaderLabel = React.forwardRef<HTMLLabelElement, FileUploaderLabelProps>(
  ({ children, element = "FILE_UPLOADER_LABEL", ...props }, ref) => {
    const { id, disabled, required } = React.useContext(FileUploaderContext);

    return (
      <Label disabled={disabled} htmlFor={id} element={element} required={required} ref={ref} {...props}>
        {children}
      </Label>
    );
  },
);

FileUploaderLabel.displayName = "FileUploaderLabel";
