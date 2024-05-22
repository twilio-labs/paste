import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { InputBox } from "@twilio-paste/input-box";
import type { InputBoxTypes } from "@twilio-paste/input-box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useMergeRefs } from "@twilio-paste/utils";
import * as React from "react";

import { DecrementButton } from "./DecrementButton";
import { IncrementButton } from "./IncrementButton";
import { safelySpreadFormControlProps } from "./utils";

export type InputVariants = "default" | "inverse";

export interface InputProps extends HTMLPasteProps<"input"> {
  /**
   * Disables the input.
   *
   * @type {boolean}
   * @memberof InputProps
   */
  disabled?: boolean;
  /**
   * Sets the input to an error state.
   *
   * @type {boolean}
   * @memberof InputProps
   */
  hasError?: boolean;
  height?: never;
  /**
   * Sets the id of the input. Should match the `htmlFor` of Label.
   *
   * @type {string}
   * @memberof InputProps
   */
  id?: string;
  /**
   * Used to add a suffix to an input. Often used with text or an icon.
   *
   * @type {React.ReactNode}
   * @memberof InputProps
   */
  insertAfter?: React.ReactNode;
  /**
   * Used to add a prefix to an input. Often used with text or an icon.
   *
   * @type {React.ReactNode}
   * @memberof InputProps
   */
  insertBefore?: React.ReactNode;
  /**
   * Sets the name of the input.
   *
   * @type {string}
   * @memberof InputProps
   */
  name?: string;
  /**
   * Sets the placeholder of the input.
   *
   * @type {string}
   * @memberof InputProps
   */
  placeholder?: string;
  /**
   * Sets the input to readonly.
   *
   * @type {boolean}
   * @memberof InputProps
   */
  readOnly?: boolean;
  /**
   * Sets the input as required.
   *
   * @type {boolean}
   * @memberof InputProps
   */
  required?: boolean;
  size?: never;
  style?: never;
  /**
   * Sets the type of the input.
   *
   * @type {InputBoxTypes}
   * @memberof InputProps
   */
  type: InputBoxTypes;
  /**
   * Sets the value of the input.
   *
   * @type {InputVariants}
   * @memberof InputProps
   */
  value?: string;
  /**
   *
   * @type {InputVariants}
   * @memberof InputProps
   */
  variant?: InputVariants;
  width?: never;
  /**
   *
   * @type {"space0"}
   * @memberof InputProps
   */
  padding?: "space0";
  /**
   *
   * @type {BoxStyleProps["paddingRight"]}
   * @memberof InputProps
   */
  paddingRight?: BoxStyleProps["paddingRight"];
  /**
   *
   * @type {BoxStyleProps["cursor"]}
   * @memberof InputProps
   */
  cursor?: BoxStyleProps["cursor"];
  /**
   * Provides an accessible label for the increment button on inputs of type "number" when using non-English languages.
   *
   * @type {string}
   * @memberof InputProps
   */
  i18nStepUpLabel?: string;
  /**
   * Provides an accessible label for the decrement button on inputs of type "number" when using non-English languages.
   *
   * @type {string}
   * @memberof InputProps
   */
  i18nStepDownLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'INPUT'
   * @type {BoxProps['element']}
   * @memberof InputProps
   */
  element?: BoxProps["element"];
}

interface TypeProps {
  type: InputBoxTypes;
  inputmode?: string | undefined;
  pattern?: string | undefined;
}

export const InputElement = React.forwardRef<HTMLInputElement, InputProps>(({ element, ...props }, ref) => {
  return (
    <Box
      appearance="none"
      as="input"
      backgroundColor="transparent"
      border="none"
      borderRadius="borderRadius20"
      boxShadow="none"
      color="inherit"
      cursor={(props.type === "date" || props.type === "time") && !props.readOnly && !props.disabled ? "text" : "auto"}
      display="block"
      element={element}
      fontFamily="inherit"
      fontSize="fontSize30"
      fontWeight="fontWeightMedium"
      lineHeight="lineHeight20"
      margin="space0"
      outline="none"
      paddingBottom="space30"
      paddingLeft="space40"
      paddingRight="space40"
      paddingTop="space30"
      resize="none"
      width="100%"
      variant={props.variant}
      ref={ref}
      _placeholder={{
        color: props.variant === "inverse" ? "colorTextInverseWeaker" : "colorTextWeak",
        fontStyle: "italic",
      }}
      _focus_placeholder={{
        color: props.variant === "inverse" ? "colorTextInverseWeaker" : "colorTextWeak",
      }}
      _disabled={{
        color: props.variant === "inverse" ? "colorTextInverseWeakest" : "colorTextWeaker",
        cursor: "not-allowed",
        "-webkit-text-fill-color": props.variant === "inverse" ? "colorTextInverseWeakest" : "colorTextWeaker",
        "-webkit-opacity": "1",
      }}
      __webkit_datetime_edit={{
        display: "flex",
      }}
      __webkit_calendar_picker_indicator_hover={{
        cursor: props.readOnly || props.disabled ? "default" : "pointer",
      }}
      // Hide native number input stepper buttons
      __webkit_inner_spin_button={{
        display: "none",
        margin: "space0",
      }}
      __webkit_outer_spin_button={{
        display: "none",
        margin: "space0",
      }}
      {...{ "-moz-appearance": "textfield" }}
      {...props}
    />
  );
});

InputElement.displayName = "InputElement";

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      element = "INPUT",
      hasError,
      id,
      insertAfter,
      insertBefore,
      max,
      min,
      name,
      placeholder,
      readOnly,
      required,
      step,
      type,
      value,
      variant,
      i18nStepUpLabel,
      i18nStepDownLabel,
      ...props
    },
    ref,
  ) => {
    const typeProps: TypeProps = { type };

    const internalRef = React.useRef<HTMLInputElement>();
    const mergedRef = useMergeRefs(internalRef, ref) as React.Ref<HTMLInputElement>;

    const [showIncrement, setShowIncrement] = React.useState(true);
    const [showDecrement, setShowDecrement] = React.useState(true);

    // used for number inputs to be able to track uncontrolled number inputs value being changed by a user and it not being tracked by an applications
    const [internalValue, setInternalValue] = React.useState(value ?? props.defaultValue ?? "0");

    React.useEffect(() => {
      if (type !== "number") return;
      if (disabled) {
        setShowDecrement(false);
        setShowIncrement(false);
        return;
      }

      const numVal = Number(internalValue);
      const numStep = step && !isNaN(Number(step)) ? Number(step) : 1;
      const numMax = Number(max);
      if (isNaN(numMax)) return;
      const numMin = Number(min);
      if (isNaN(numMin)) return;

      if ((numMax - numMin) % numStep !== 0)
        // eslint-disable-next-line no-console
        console.error(
          "[Paste Input]: when using min/max, and step values with a Number Input, please make sure that the min and max are multiples of the step value.",
        );
      if (numVal < numMax && numVal + numStep <= numMax) {
        setShowIncrement(true);
      } else {
        setShowIncrement(false);
      }
      if (numVal > numMin && numVal - numStep >= numMin) {
        setShowDecrement(true);
      } else {
        setShowDecrement(false);
      }
    }, [max, min, step, disabled, type, internalValue]);

    return (
      <InputBox
        disabled={disabled}
        element={element}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
        type={type}
        variant={variant}
      >
        <InputElement
          aria-invalid={hasError}
          aria-readonly={readOnly}
          {...safelySpreadFormControlProps(props)}
          {...typeProps}
          disabled={disabled}
          element={`${element}_ELEMENT`}
          id={id}
          name={name}
          max={max}
          min={min}
          placeholder={placeholder}
          readOnly={readOnly}
          ref={mergedRef}
          required={required}
          step={step}
          value={value}
          variant={variant}
          onChange={(event) => {
            if (props.onChange != null && typeof props.onChange === "function") {
              props.onChange(event);
            }
            setInternalValue(event.target.value);
          }}
        />
        {type === "number" ? (
          <Box
            display="flex"
            flexDirection="column"
            rowGap="space10"
            justifyContent="center"
            element={`${element}_STEP_WRAPPER`}
          >
            {showIncrement ? (
              <IncrementButton
                element={element}
                onClick={() => {
                  internalRef.current?.stepUp();
                  const ev = new Event("change", { bubbles: true });
                  internalRef.current?.dispatchEvent(ev);
                  internalRef.current?.focus();
                }}
                i18nStepUpLabel={i18nStepUpLabel}
                variant={variant}
              />
            ) : (
              <Box height="12px" width="12px" element={`${element}_INCREMENT_PLACEHOLDER`} />
            )}
            {showDecrement ? (
              <DecrementButton
                element={element}
                onClick={() => {
                  internalRef.current?.stepDown();
                  const ev = new Event("change", { bubbles: true });
                  internalRef.current?.dispatchEvent(ev);
                  internalRef.current?.focus();
                }}
                i18nStepDownLabel={i18nStepDownLabel}
                variant={variant}
              />
            ) : (
              <Box height="12px" width="12px" element={`${element}_DECREMENT_PLACEHOLDER`} />
            )}
          </Box>
        ) : (
          <></>
        )}
      </InputBox>
    );
  },
);

Input.displayName = "Input";

export { Input };
export type { InputBoxTypes as InputTypes };
