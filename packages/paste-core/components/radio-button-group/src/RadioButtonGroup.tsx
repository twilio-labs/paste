import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
//import type {BoxProps} from '@twilio-paste/box';
import type {InlineControlGroupProps} from '@twilio-paste/inline-control-group';
import {HelpText} from '@twilio-paste/help-text';
import {Label} from '@twilio-paste/label';

import {RadioButtonContext} from './RadioButtonContext';
import {AttachedRadioButtonGroupWrapper, UnattachedRadioButtonGroupWrapper} from './StyledRadioButtonGroupWrapper';

/*
NOTE: not sure why this was added originally. seems we use the import on line 5 above?

interface InlineControlGroupProps
  extends Pick<BoxProps, 'element'>,
    Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange'> {
  children: React.ReactNode;
  disabled?: boolean;
  errorText?: string | React.ReactNode;
  helpText?: string | React.ReactNode;
  legend: string | NonNullable<React.ReactNode>;
  orientation?: 'vertical' | 'horizontal';
  ref?: HTMLFieldSetElement;
  required?: boolean;
  i18nRequiredLabel?: string;
}
*/

export interface RadioButtonGroupProps extends InlineControlGroupProps {
  name: string;
  onChange?: (value: string) => void;
  value?: string;
  i18nRequiredLabel?: string;
  attached?: boolean;
}

const RadioButtonGroup = React.forwardRef<HTMLFieldSetElement, RadioButtonGroupProps>(
  (
    {
      name,
      element = 'RADIO_BUTTON_GROUP',
      value,
      onChange,
      disabled = false,
      errorText,
      children,
      i18nRequiredLabel = '(required)',
      helpText,
      legend,
      required,
      attached = false,
      ...rest
    },
    ref
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.value);
        }
      },
      [onChange]
    );

    const contextValue = React.useMemo(() => {
      return {
        name,
        value: value || '',
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
          rowGap="space40"
          ref={ref}
          {...safelySpreadBoxProps(rest)}
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
          <Box
            // @ts-expect-error Use a styled component to modify the Button's styles
            as={attached ? AttachedRadioButtonGroupWrapper : UnattachedRadioButtonGroupWrapper}
          >
            {children}
          </Box>
          {errorText && (
            <HelpText variant="error" marginTop="space0">
              {errorText}
            </HelpText>
          )}
        </Box>
      </RadioButtonContext.Provider>
    );
  }
);

RadioButtonGroup.displayName = 'RadioButtonGroup';

RadioButtonGroup.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  element: PropTypes.string,
  i18nRequiredLabel: PropTypes.string,
};

export {RadioButtonGroup};
