import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxProps } from "@twilio-paste/box";
import { Composite } from "@twilio-paste/reakit-library";
import type { CompositeProps } from "@twilio-paste/reakit-library";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import type { FormPillGroupSizeVariant } from "./types";
import { FormPillGroupContext } from "./useFormPillState";

export interface FormPillGroupProps
  extends Omit<CompositeProps, "unstable_virtual" | "unstable_moves" | "unstable_system" | "wrapElement" | "wrap"> {
  /**
   *
   *
   * @type {string}
   * @memberof FormPillGroupProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_PILL_GROUP'
   * @type {BoxElementProps['element']}
   * @memberof FormPillGroupProps
   */
  element?: BoxElementProps["element"];
  children: React.ReactNode;
  /**
   * Visually hidden string that has instructions for how to remove and select pills with a keyboard.
   *
   * @default 'Press Delete or Backspace to remove. Press Enter to toggle selection.'
   * @type {string}
   * @memberof FormPillGroupProps
   */
  i18nKeyboardControls?: string;
  /**
   * Determines if the FormPillGroup should be rendered as a flex or inline-flex container
   *
   * @type {('flex' | 'inline-flex')}
   * @memberof FormPillGroupProps
   */
  display?: "flex" | "inline-flex";
  size?: FormPillGroupSizeVariant;
}

/**
 * Contains the style properties for the FormPillGroup component and the FormPill component.
 */
const SizeStyles: Record<FormPillGroupSizeVariant, Pick<BoxProps, "columnGap" | "rowGap">> = {
  default: {
    columnGap: "space20",
    rowGap: "space20",
  },
  large: {
    columnGap: "space30",
    rowGap: "space30",
  },
};

const FormPillGroupStyles = React.forwardRef<HTMLUListElement, FormPillGroupProps>(
  ({ element = "FORM_PILL_GROUP", display = "flex", size = "default", ...props }, ref) => {
    return (
      <FormPillGroupContext.Provider value={{ size }}>
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          ref={ref}
          role="listbox"
          lineHeight="lineHeight30"
          margin="space0"
          padding="space0"
          display={display}
          flexWrap="wrap"
          {...SizeStyles[size]}
        >
          {props.children}
        </Box>
      </FormPillGroupContext.Provider>
    );
  },
);

FormPillGroupStyles.displayName = "StyledFormPillGroup";

/**
 * FormPillGroup should be used to wrap a collection of FormPills. It should be used in conjunction with
 * useFormPillGroupState hook
 *
 * @example
 * <FormPillGroup {...pillState} aria-label="Your favorite sports:">
 *   ...
 * </FormPillGroup>
 * @see http://paste.twilio.design/components/form-pill-group
 */
export const FormPillGroup = React.forwardRef<HTMLUListElement, FormPillGroupProps>(
  (
    { i18nKeyboardControls = "Press Delete or Backspace to remove. Press Enter to toggle selection.", ...props },
    ref,
  ) => {
    const keyboardControlsId = useUID();
    return (
      <>
        <Composite as={FormPillGroupStyles} ref={ref} aria-describedby={keyboardControlsId} {...props}>
          {props.children}
        </Composite>
        <ScreenReaderOnly id={keyboardControlsId}>{i18nKeyboardControls}</ScreenReaderOnly>
      </>
    );
  },
);

FormPillGroup.displayName = "FormPillGroup";
