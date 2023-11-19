import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface ModalBodyProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MODAL_BODY'
   * @type {BoxProps['element']}
   * @memberof ModalBodyProps
   */
  element?: BoxElementProps["element"];
}

const ModalBody = React.forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ children, element = "MODAL_BODY", ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        overflowY="auto"
        padding="space90"
        paddingTop="space0"
        as="div"
        element={element}
        ref={ref}
      >
        {children}
      </Box>
    );
  },
);
ModalBody.displayName = "ModalBody";

export { ModalBody };
