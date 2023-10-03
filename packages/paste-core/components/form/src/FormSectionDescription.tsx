import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { FormSectionContext } from "./FormSectionContext";

export interface FormSectionDescriptionProps extends HTMLPasteProps<"div"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_SECTION_DESCRIPTION'
   * @type {BoxProps['element']}
   * @memberof FormSectionDescriptionProps
   */
  element?: BoxProps["element"];
  children: React.ReactNode;
}

export const FormSectionDescription = React.forwardRef<HTMLDivElement, FormSectionDescriptionProps>(
  ({ children, element = "FORM_SECTION_DESCRIPTION", ...props }, ref) => {
    const { id: sectionId } = React.useContext(FormSectionContext);

    return (
      <Box
        ref={ref}
        {...safelySpreadBoxProps(props)}
        element={element}
        color="colorTextWeak"
        fontSize="fontSize30"
        lineHeight="lineHeight20"
        id={`${sectionId}-section-description`}
      >
        {children}
      </Box>
    );
  },
);

FormSectionDescription.displayName = "FormSectionDescription";
