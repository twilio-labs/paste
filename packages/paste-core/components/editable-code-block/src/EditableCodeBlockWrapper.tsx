import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

const StyledEditableCodeBlockWrapper = styled(Box)(
  css({
    backgroundColor: "rgb(1, 22, 39)", // Matches the Night Owl background theme
    borderRadius: "borderRadius70",
    overflow: "hidden",
  }),
);

export interface EditableCodeBlockWrapperProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'EDITABLE_CODE_BLOCK_WRAPPER'
   * @type {BoxProps['element']}
   * @memberof EditableCodeBlockWrapperProps
   */
  element?: BoxProps["element"];
}

export const EditableCodeBlockWrapper = React.forwardRef<HTMLDivElement, EditableCodeBlockWrapperProps>(
  ({ children, element = "EDITABLE_CODE_BLOCK_WRAPPER", ...props }, ref) => {
    return (
      <StyledEditableCodeBlockWrapper {...safelySpreadBoxProps(props)} element={element} ref={ref}>
        {children}
      </StyledEditableCodeBlockWrapper>
    );
  },
);

EditableCodeBlockWrapper.displayName = "EditableCodeBlockWrapper";
