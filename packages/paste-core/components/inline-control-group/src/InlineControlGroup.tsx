import * as React from 'react';
import {Box, safelySpreadBoxProps, type BoxProps, type BoxStyleProps} from '@twilio-paste/box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface InlineControlGroupProps
  extends Pick<BoxProps, 'element'>,
    Omit<HTMLPasteProps<'fieldset'>, 'onChange'> {
  children: React.ReactNode;
  disabled?: boolean;
  errorText?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  legend: string | NonNullable<React.ReactNode>;
  orientation?: 'vertical' | 'horizontal';
  required?: boolean;
  i18nRequiredLabel?: string;
  fieldStyleProps?: BoxStyleProps;
}

const InlineControlGroup = React.forwardRef<HTMLFieldSetElement, InlineControlGroupProps>(
  (
    {
      children,
      disabled,
      element = 'INLINE_CONTROL_GROUP',
      errorText,
      helpText,
      legend,
      orientation = 'vertical',
      required,
      i18nRequiredLabel,
      fieldStyleProps, // Only used in Visual Picker
      ...props
    },
    ref
  ) => {
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
        <Box element={`${element}_SET`} marginRight="space20">
          <Box display={fieldStyleProps && orientation === 'horizontal' ? 'inline-flex' : 'block'}>
            {React.Children.map(children, (child, index) => {
              return (
                <Box
                  element={`${element}_FIELD`}
                  display={orientation === 'horizontal' ? 'inline-block' : 'block'}
                  marginTop={
                    fieldStyleProps?.marginTop
                      ? // eslint-disable-next-line unicorn/no-nested-ternary
                        index === 0 && orientation === 'vertical'
                        ? 'space40'
                        : fieldStyleProps?.marginTop
                      : 'space40'
                  }
                  marginRight={
                    fieldStyleProps?.marginRight
                      ? fieldStyleProps?.marginRight
                      : // eslint-disable-next-line unicorn/no-nested-ternary
                      orientation === 'horizontal'
                      ? 'space70'
                      : null
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
  }
);

InlineControlGroup.displayName = 'InlineControlGroup';

export {InlineControlGroup};
