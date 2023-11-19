import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { HiddenRadio } from "./HiddenRadio";
import type { HiddenRadioState } from "./HiddenRadio";
import { RadioButtonContext } from "./RadioButtonContext";
import { StyledRadioButtonLabel } from "./StyledRadioButtonLabel";

export interface RadioButtonProps extends HTMLPasteProps<"input"> {
  /**
   * ID for the Radio Button
   *
   * @type {string}
   * @memberof RadioButtonProps
   */
  id?: string;
  /**
   * Value for the Radio Button
   *
   * @type {string}
   * @memberof RadioButtonProps
   */
  value?: string;
  /**
   * Name for the Radio Button Group
   *
   * @type {string}
   * @memberof RadioButtonProps
   */
  name?: string;
  /**
   * Sets the Radio Button as checked
   *
   * @type {boolean}
   * @memberof RadioButtonProps
   */
  checked?: boolean;
  /**
   * Sets the Radio Button as the default checked option
   *
   * @type {boolean}
   * @memberof RadioButtonProps
   */
  defaultChecked?: boolean;
  /**
   * Make the Radio Button disabled
   *
   * @type {boolean}
   * @memberof RadioButtonProps
   */
  disabled?: boolean;
  /**
   * Adds an error state to the Radio Button
   *
   * @type {boolean}
   * @memberof RadioButtonProps
   */
  hasError?: boolean;
  /**
   * Contents of the Radio Button
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof RadioButtonProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "RADIO_BUTTON"
   * @type {BoxProps["element"]}
   * @memberof RadioButtonProps
   */
  element?: BoxProps["element"];
}

/*
 * Usage scenarios permuted:
 * A) defaultChecked is passed to Radio
 * B) checked is passed to Radio
 * C) both defaultChecked and checked is passed to Radio (throw error)
 * D) value is passed down from context and neither (default)checked is set
 * E) value is passed down from context and defaultChecked is set (context wins)
 * F) value is passed down from context and checked is set (context wins)
 * G) value is passed from context and both are set (context wins)
 */

const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      id,
      name,
      element = "RADIO_BUTTON",
      value,
      checked,
      defaultChecked,
      disabled,
      hasError,
      onChange,
      children,
      ...props
    },
    ref,
  ) => {
    if (checked != null && defaultChecked != null) {
      throw new Error(
        `[Paste RadioButton] Do not provide both 'defaultChecked' and 'checked' to RadioButton at the same time. Please consider if you want this component to be controlled or uncontrolled.`,
      );
    }

    const radioGroupContext = React.useContext(RadioButtonContext);
    const radioId = id ? id : useUID();
    // We shouldn't change between controlled and uncontrolled after mount, so we memo this for safety
    const isControlled = React.useMemo(() => checked !== undefined || radioGroupContext.value !== "", []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange) {
          onChange(event);
        } else {
          radioGroupContext.onChange(event);
        }
      },
      [onChange, radioGroupContext.onChange],
    );

    const state: HiddenRadioState = {
      name: name != null ? name : radioGroupContext.name,
      disabled: disabled != null ? disabled : radioGroupContext.disabled,
      hasError: hasError != null ? hasError : radioGroupContext.hasError,
    };

    /*
     * We can only provide `<input type="radio">` with either 'checked' or 'defaultChecked', not both.
     * So we conditionally provide the correct prop here.
     */
    if (isControlled) {
      // Use context's value first
      if (radioGroupContext.value !== "") {
        state.checked = radioGroupContext.value === value;
      } else {
        // Then checked prop on this radio
        state.checked = checked;
      }
    } else {
      // Lastly fall back to default checked if state isn't controlled
      state.defaultChecked = defaultChecked;
    }

    return (
      <Box
        element={element}
        // @ts-expect-error Use a styled component to modify the Button's styles
        as={StyledRadioButtonLabel}
      >
        <HiddenRadio
          {...safelySpreadBoxProps(props)}
          {...state}
          value={value}
          aria-invalid={state.hasError}
          onChange={handleChange}
          id={radioId}
          ref={ref}
        />
        <Button variant={state.hasError ? "destructive_secondary" : "secondary"} as="span" disabled={state.disabled}>
          {children}
        </Button>
      </Box>
    );
  },
);

RadioButton.displayName = "RadioButton";

export { RadioButton };
