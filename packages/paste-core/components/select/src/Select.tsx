import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { ChevronDownIcon } from "@twilio-paste/icons/esm/ChevronDownIcon";
import { InputBox, InputChevronWrapper, getInputChevronIconColor } from "@twilio-paste/input-box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import type { Element, Variants } from "./types";

export interface SelectProps extends HTMLPasteProps<"select"> {
  /**
   * Must be `Option` or `OptionGroup`. Required.
   *
   * @type {NonNullable<React.ReactNode>}
   * @memberof SelectProps
   */
  children: NonNullable<React.ReactNode>;
  /**
   * Sets the input to an error state.
   *
   * @type {boolean}
   * @memberof SelectProps
   */
  hasError?: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SELECT"
   * @type {Element}
   * @memberof SelectProps
   */
  element?: Element;
  /**
   * Sets the id of the input. Should match the htmlFor of `Label`
   *
   * @type {string}
   * @memberof SelectProps
   */
  id?: string;
  /**
   * Add Suffix to the select input.
   *
   * @type {React.ReactNode}
   * @memberof SelectProps
   */
  insertAfter?: React.ReactNode;
  /**
   * Add Prefix to the select input.
   *
   * @type {React.ReactNode}
   * @memberof SelectProps
   */
  insertBefore?: React.ReactNode;
  /**
   * Callback function called when user selects an option.
   *
   * @memberof SelectProps
   */
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  /**
   * Sets the value of the select. Expects an array when `multiple` is present.
   *
   * @type {(string | string[])}
   * @memberof SelectProps
   */
  value?: string | string[];
  /**
   * Sets the visual style of the select.
   *
   * @default "default"
   * @type {Variants}
   * @memberof SelectProps
   */
  variant?: Variants;
}

export const SelectElement = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ element = "SELECT_ELEMENT", variant, size, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        as="select"
        ref={ref}
        size={size}
        /*
         * ensure height is reset after size, so that size doesn't set a css height via the style prop.
         * We want the size attribute on the HTML element to set the height, not the css
         */
        height={undefined}
        appearance="none"
        // must set a solid color to inherit in options for Windows
        backgroundColor={variant === "inverse" ? "colorBackgroundInverse" : "colorBackgroundBody"}
        border="none"
        borderRadius="borderRadius20"
        boxShadow="none"
        color="inherit"
        cursor="pointer"
        display="block"
        fontFamily="inherit"
        fontSize="fontSize30"
        fontWeight="fontWeightMedium"
        lineHeight="lineHeight20"
        margin="space0"
        outline="none"
        paddingBottom="space30"
        paddingLeft="space40"
        paddingRight="space100"
        paddingTop="space30"
        resize="none"
        width="100%"
        _disabled={{
          color: variant === "inverse" ? "colorTextInverseWeakest" : "colorTextWeaker",
          backgroundColor: "transparent",
          cursor: "not-allowed",
          opacity: 1,
        }}
        variant={variant}
      />
    );
  },
);

SelectElement.displayName = "SelectElement";

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      disabled,
      element = "SELECT",
      hasError,
      insertBefore,
      insertAfter,
      children,
      size,
      multiple,
      variant = "default",
      ...props
    },
    ref,
  ) => {
    const [showOptions, setShowOptions] = React.useState(false);
    React.useEffect(() => {
      setShowOptions(true);
    }, []);

    // N.B. `key` on SelectElement fixes an issue where defaultValue is not respected
    return (
      <InputBox
        disabled={disabled}
        element={element}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        variant={variant}
      >
        <Box display="flex" width="100%" position="relative">
          {showOptions ? (
            <SelectElement
              aria-invalid={hasError}
              data-not-selectize="true"
              disabled={disabled}
              ref={ref}
              element={`${element}_ELEMENT`}
              {...props}
              multiple={multiple}
              size={multiple ? size : 0}
              variant={variant}
              key="mounted"
            >
              {children}
            </SelectElement>
          ) : (
            <SelectElement key="unmounted">{}</SelectElement>
          )}
          {!multiple && (
            <InputChevronWrapper element={`${element}_CHEVRON_WRAPPER`}>
              <ChevronDownIcon
                aria-hidden="true"
                decorative
                element={`${element}_ICON`}
                color={getInputChevronIconColor(variant, disabled, false)}
                size="sizeIcon30"
              />
            </InputChevronWrapper>
          )}
        </Box>
      </InputBox>
    );
  },
);

Select.displayName = "Select";

export { Select };
