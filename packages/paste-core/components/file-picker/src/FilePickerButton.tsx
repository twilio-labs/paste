import { Box } from "@twilio-paste/box";
import type { ButtonProps } from "@twilio-paste/button";
import { Button } from "@twilio-paste/button";
import * as React from "react";

export type FilePickerButtonProps = ButtonProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FILEPICKER_BUTTON'
   * @type {ButtonProps['element']}
   */
  element?: ButtonProps["element"];
};

const FilePickerButton = React.forwardRef<HTMLButtonElement, FilePickerButtonProps>(
  ({ children, element, disabled, ...props }, ref) => {
    return (
      <Box whiteSpace="nowrap">
        <Button {...props} element={element} ref={ref} size="default" disabled={disabled} as="span" type="button">
          {children}
        </Button>
      </Box>
    );
  },
);

FilePickerButton.displayName = "FilePickerButton";

export { FilePickerButton };
