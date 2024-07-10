import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps , BoxProps} from "@twilio-paste/box";
import { Composite } from "@twilio-paste/reakit-library";
import type { CompositeProps } from "@twilio-paste/reakit-library";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

/** The size variants for the FormPillGroup component. */
export type FormPillGroupSizeVariant = "default" | "L";

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

/** The response from the calculateSizeStyles function. */
type CalculateSizeStylesResponse = Pick<BoxProps, "columnGap" | "rowGap" | "fontSize">;

/**
 * Calculates the styles for the FormPillGroup based on the size prop.
 *
 * Exported only to be used in tests.
 * @private
 */
export function calculateSizeStyles(size: FormPillGroupSizeVariant): CalculateSizeStylesResponse {
  if (size === "L") {
    return {
      columnGap : "space30",
      rowGap : "space30",
      fontSize : "fontSize30",
    }
  }
  return {
    columnGap : "space20",
    rowGap : "space20",
    fontSize : undefined,
  }
}

const FormPillGroupStyles = React.forwardRef<HTMLUListElement, FormPillGroupProps>(
  ({ element = "FORM_PILL_GROUP", display = "flex", size = "default", ...props }, ref) => {
    const {
      columnGap,
      rowGap,
      fontSize,
    } = calculateSizeStyles(size)
    return (
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
        rowGap={rowGap}
        columnGap={columnGap}
        fontSize={fontSize}
      >
        {props.children}
      </Box>
    );
  }
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
