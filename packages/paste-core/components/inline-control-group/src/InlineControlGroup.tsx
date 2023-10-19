import { Box, type BoxProps, type BoxStyleProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import { Label } from "@twilio-paste/label";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

export interface InlineControlGroupProps extends Omit<HTMLPasteProps<"fieldset">, "onChange"> {
  children: React.ReactNode;
  /**
   *
   * @type {boolean}
   * @memberof InlineControlGroupProps
   */
  disabled?: boolean;
  /**
   * String to render as the error text.
   *
   * @type {string | React.ReactNode}
   * @memberof InlineControlGroupProps
   */
  errorText?: string | React.ReactNode;
  /**
   * String to render as the help text.
   *
   * @type {string | React.ReactNode}
   * @memberof InlineControlGroupProps
   */
  helpText?: string | React.ReactNode;
  /**
   * String to render as the label text.
   *
   * @type {"vertical" | "horizontal"}
   * @memberof InlineControlGroupProps
   */
  legend: string | NonNullable<React.ReactNode>;
  /**
   *
   * @type {"vertical" | "horizontal"}
   * @memberof InlineControlGroupProps
   */
  orientation?: "vertical" | "horizontal";
  /**
   *
   * @type {boolean}
   * @memberof InlineControlGroupProps
   */
  required?: boolean;
  /**
   * Accessible label for the required dot on the Label.
   *
   * @type {string}
   * @memberof InlineControlGroupProps
   */
  i18nRequiredLabel?: string;
  /**
   *
   * @type {BoxStyleProps}
   * @memberof InlineControlGroupProps
   */
  fieldStyleProps?: BoxStyleProps;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default 'INLINE_CONTROL_GROUP'
   * @type {BoxProps['element']}
   * @memberof InlineControlGroupProps
   */
  element?: BoxProps["element"];
}

const InlineControlGroup = React.forwardRef<HTMLFieldSetElement, InlineControlGroupProps>(
  (
    {
      children,
      disabled,
      element = "INLINE_CONTROL_GROUP",
      errorText,
      helpText,
      legend,
      orientation = "vertical",
      required,
      i18nRequiredLabel,
      fieldStyleProps,
      ...props
    },
    ref,
  ) => {
    const isVisualPicker = Boolean(fieldStyleProps); // This prop is only used in Visual Picker

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="fieldset"
        element={element}
        margin="space0"
        padding="space0"
        minWidth="0px"
        borderWidth="borderWidth0"
        ref={ref}
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
        {helpText && <HelpText marginTop="space0">{helpText}</HelpText>}
        <Box element={`${element}_SET`} marginRight={isVisualPicker ? undefined : "space20"}>
          <Box
            display={isVisualPicker && orientation === "horizontal" ? "inline-flex" : "block"} // Sets equal heights for horizontal Visual Pickers
            width={isVisualPicker ? "100%" : undefined} // Allows vertical Visual Pickers to take up the full width of the container
          >
            {React.Children.map(children, (child, index) => {
              return (
                <Box
                  element={`${element}_FIELD`}
                  display={orientation === "horizontal" ? "inline-block" : "block"}
                  flexBasis={isVisualPicker ? "50%" : undefined} // Makes horizontal Visual Pickers grow to fill the width of the container
                  marginTop={
                    fieldStyleProps?.marginTop
                      ? // eslint-disable-next-line unicorn/no-nested-ternary
                        index === 0 && orientation === "vertical"
                        ? "space40"
                        : fieldStyleProps?.marginTop
                      : "space40"
                  }
                  marginRight={orientation === "horizontal" && !isVisualPicker ? "space70" : null}
                  marginLeft={
                    isVisualPicker && orientation === "horizontal" ? (index === 0 ? "space0" : "space30") : "space0" // Sets spacing between horizontal Visual Pickers except for the first one
                  }
                >
                  {child}
                </Box>
              );
            })}
          </Box>
          {errorText && (
            <Box element={`${element}_ERROR_TEXT_WRAPPER`} marginTop="space40">
              <HelpText variant="error">{errorText}</HelpText>
            </Box>
          )}
        </Box>
      </Box>
    );
  },
);

InlineControlGroup.displayName = "InlineControlGroup";

export { InlineControlGroup };
