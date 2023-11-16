import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import type { InlineControlGroupProps } from "@twilio-paste/inline-control-group";
import { Label } from "@twilio-paste/label";
import * as React from "react";

import { RadioButtonContext } from "./RadioButtonContext";
import { AttachedRadioButtonGroupWrapper, UnattachedRadioButtonGroupWrapper } from "./StyledRadioButtonGroupWrapper";

export interface RadioButtonGroupProps extends Omit<InlineControlGroupProps, "fieldStyleProps"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "RADIO_BUTTON_GROUP"
   * @type {InlineControlGroupProps["element"]}
   * @memberof RadioButtonGroupProps
   */
  element?: InlineControlGroupProps["element"];
  /**
   * Name for the Radio Button Group
   *
   * @type {string}
   * @memberof RadioButtonGroupProps
   */
  name: string;
  /**
   * Pass a function for the onChange handler
   *
   * @memberof RadioButtonGroupProps
   */
  onChange?: (value: string) => void;
  /**
   * Value for the Radio Button Group
   *
   * @type {string}
   * @memberof RadioButtonGroupProps
   */
  value?: string;
  /**
   * Overrides the default string marking the group as required
   *
   * @default "(required)"
   * @type {string}
   * @memberof RadioButtonGroupProps
   */
  i18nRequiredLabel?: string;
  /**
   * If the group of buttons are visually attached
   *
   * @default false
   * @type {boolean}
   * @memberof RadioButtonGroupProps
   */
  attached?: boolean;
}

const RadioButtonGroup = React.forwardRef<HTMLFieldSetElement, RadioButtonGroupProps>(
  (
    {
      name,
      element = "RADIO_BUTTON_GROUP",
      value,
      onChange,
      disabled = false,
      errorText,
      children,
      i18nRequiredLabel = "(required)",
      helpText,
      legend,
      required,
      attached = false,
      ...props
    },
    ref,
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.value);
        }
      },
      [onChange],
    );

    const contextValue = React.useMemo(() => {
      return {
        name,
        value: value || "",
        disabled,
        hasError: errorText != null,
        onChange: onChangeHandler,
      };
    }, [name, value, disabled, errorText, onChangeHandler]);

    return (
      <RadioButtonContext.Provider value={contextValue}>
        <Box
          as="fieldset"
          element={element}
          margin="space0"
          padding="space0"
          border="none"
          display="flex"
          flexDirection="column"
          ref={ref}
          {...safelySpreadBoxProps(props)}
        >
          <Label
            as="legend"
            element="LEGEND"
            htmlFor={undefined}
            required={required}
            marginBottom="space0"
            disabled={disabled}
            i18nRequiredLabel={i18nRequiredLabel}
          >
            {legend}
          </Label>
          {helpText && (
            <HelpText variant="default" marginTop="space0">
              {helpText}
            </HelpText>
          )}
          <Box
            // @ts-expect-error Use a styled component to modify the Button's styles
            as={attached ? AttachedRadioButtonGroupWrapper : UnattachedRadioButtonGroupWrapper}
            marginTop="space20"
          >
            {children}
          </Box>
          {errorText && <HelpText variant="error">{errorText}</HelpText>}
        </Box>
      </RadioButtonContext.Provider>
    );
  },
);

RadioButtonGroup.displayName = "RadioButtonGroup";

export { RadioButtonGroup };
