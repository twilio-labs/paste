import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
  BaseRadioCheckboxHelpText,
} from '@twilio-paste/base-radio-checkbox';
import {RadioContext} from './RadioContext';

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  children: NonNullable<React.ReactNode>;
}

type HiddenRadioProps = Pick<RadioProps, 'checked' | 'value' | 'id' | 'disabled' | 'name' | 'onChange'> & {
  ref?: any | undefined;
};
const HiddenRadio = React.forwardRef<HTMLInputElement, HiddenRadioProps>((props, ref) => (
  <Box
    as="input"
    type="radio"
    size="size0"
    border="none"
    overflow="hidden"
    padding="space0"
    margin="space0"
    whiteSpace="nowrap"
    textTransform="none"
    position="absolute"
    clip="rect(0 0 0 0)"
    ref={ref}
    {...props}
  />
));

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({id, name, value, checked, disabled, hasError, onChange, children, helpText, ...props}, ref) => {
    const helpTextId = useUID();
    const radioGroupContext = React.useContext(RadioContext);
    const state = {
      name: name != null ? name : radioGroupContext.name,
      checked: checked != null ? checked : radioGroupContext.value === value,
      disabled: disabled != null ? disabled : radioGroupContext.disabled,
      hasError: hasError != null ? hasError : radioGroupContext.hasError,
      onChange: onChange != null ? onChange : radioGroupContext.onChange,
    };

    return (
      <Box position="relative" display="inline-flex" alignItems="flex-start" flexDirection="column" verticalAlign="top">
        <HiddenRadio
          {...props}
          {...state}
          value={value}
          aria-describedby={helpTextId}
          aria-invalid={state.hasError}
          id={id}
          ref={ref}
        />
        <BaseRadioCheckboxLabel disabled={state.disabled} htmlFor={id}>
          <BaseRadioCheckboxControl borderRadius="borderRadiusCircle" disabled={state.disabled} type="radio">
            <Box
              as="span"
              backgroundColor={state.disabled && state.checked ? 'colorBackgroundStrongest' : 'colorBackgroundBody'}
              borderRadius="borderRadiusCircle"
              height="sizeSquare25"
              width="sizeSquare25"
            />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText>{children}</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && <BaseRadioCheckboxHelpText helpTextId={helpTextId}>{helpText}</BaseRadioCheckboxHelpText>}
      </Box>
    );
  }
);

Radio.displayName = 'Radio';

if (process.env.NODE_ENV === 'development') {
  Radio.propTypes = {
    id: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    onChange: PropTypes.func,
    children: PropTypes.node.isRequired,
  };
}

export {Radio};
