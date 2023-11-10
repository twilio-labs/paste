import { InlineControlGroup } from "@twilio-paste/inline-control-group";
import type { InlineControlGroupProps } from "@twilio-paste/inline-control-group";
import * as React from "react";

import { RadioContext } from "./RadioContext";

export interface RadioGroupProps extends Omit<InlineControlGroupProps, "fieldStyleProps"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "RADIO_GROUP"
   * @type {InlineControlGroupProps["element"]}
   * @memberof RadioGroupProps
   */
  element?: InlineControlGroupProps["element"];
  /**
   * Name for the Radio Button Group
   *
   * @type {string}
   * @memberof RadioGroupProps
   */
  name: string;
  /**
   * Pass a function for the onChange handler
   *
   * @memberof RadioGroupProps
   */
  onChange?: (value: string) => void;
  /**
   * Value for the Radio Button Group
   *
   * @type {string}
   * @memberof RadioGroupProps
   */
  value?: string;
  /**
   * Label text for the required dot in the legend
   *
   * @default "(required)"
   * @type {string}
   * @memberof RadioGroupProps
   */
  i18nRequiredLabel?: string;
}

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      name,
      element = "RADIO_GROUP",
      value,
      onChange,
      disabled = false,
      errorText,
      children,
      i18nRequiredLabel = "(required)",
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
      <RadioContext.Provider value={contextValue}>
        <InlineControlGroup
          element={element}
          {...props}
          disabled={disabled}
          errorText={errorText}
          name={name}
          ref={ref}
          i18nRequiredLabel={i18nRequiredLabel}
        >
          {children}
        </InlineControlGroup>
      </RadioContext.Provider>
    );
  },
);

RadioGroup.displayName = "RadioGroup";

export { RadioGroup };
