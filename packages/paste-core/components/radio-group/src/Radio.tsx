import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
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
  defaultChecked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
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

HiddenRadio.displayName = 'HiddenRadio';

type HiddenRadioState = {
  name: string;
  disabled: boolean;
  hasError: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
};

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

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      id,
      name,
      element = 'RADIO',
      value,
      checked,
      defaultChecked,
      disabled,
      hasError,
      onChange,
      children,
      helpText,
      ...props
    },
    ref
  ) => {
    if (checked != null && defaultChecked != null) {
      throw new Error(
        `[Paste Radio] Do not provide both 'defaultChecked' and 'checked' to Radio at the same time. Please consider if you want this component to be controlled or uncontrolled.`
      );
    }

    const radioGroupContext = React.useContext(RadioContext);
    const helpTextId = useUID();
    // We shouldn't change between controlled and uncontrolled after mount, so we memo this for safety
    const isControlled = React.useMemo(() => checked !== undefined || radioGroupContext.value !== '', []);

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange) {
          onChange(event);
        } else {
          radioGroupContext.onChange(event);
        }
      },
      [onChange, radioGroupContext.onChange]
    );

    const state: HiddenRadioState = {
      name: name != null ? name : radioGroupContext.name,
      disabled: disabled != null ? disabled : radioGroupContext.disabled,
      hasError: hasError != null ? hasError : radioGroupContext.hasError,
    };

    /* We can only provide `<input type="radio">` with either 'checked' or 'defaultChecked', not both.
     * So we conditionally provide the correct prop here.
     */
    if (isControlled) {
      // Use context's value first
      if (radioGroupContext.value !== '') {
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
        position="relative"
        display="inline-flex"
        alignItems="flex-start"
        flexDirection="column"
        verticalAlign="top"
      >
        <HiddenRadio
          {...props}
          {...state}
          value={value}
          aria-describedby={helpTextId}
          aria-invalid={state.hasError}
          onChange={handleChange}
          id={id}
          ref={ref}
        />
        <BaseRadioCheckboxLabel disabled={state.disabled} htmlFor={id}>
          <BaseRadioCheckboxControl
            element={`${element}_CONTROL`}
            borderRadius="borderRadiusCircle"
            disabled={state.disabled}
            type="radio"
          >
            <Box
              as="span"
              element={`${element}_CONTROL_CIRCLE`}
              lineHeight="lineHeight0"
              display="block"
              color="inherit"
              size="sizeIcon10"
            >
              <svg role="img" aria-hidden width="100%" height="100%" viewBox="0 0 16 16" fill="none">
                <circle fill="currentColor" cx={8} cy={8} r={3} />
              </svg>
            </Box>
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText element={`${element}_LABEL_TEXT`}>{children}</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && (
          <BaseRadioCheckboxHelpText element={`${element}_HELP_TEXT_WRAPPER`} helpTextId={helpTextId}>
            {helpText}
          </BaseRadioCheckboxHelpText>
        )}
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
    element: PropTypes.string,
  };
}

export {Radio};
