import * as React from 'react';
import { useUID } from '@twilio-paste/uid-library';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import type { HTMLPasteProps } from '@twilio-paste/types';

import { RadioButtonContext } from './RadioButtonContext';
import { HiddenRadio } from './HiddenRadio';
import type { HiddenRadioState } from './HiddenRadio';
import { StyledRadioButtonLabel } from './StyledRadioButtonLabel';

export interface RadioButtonProps extends HTMLPasteProps<'input'> {
  id?: string;
  value?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  children: NonNullable<React.ReactNode>;
  element?: BoxProps['element'];
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
      element = 'RADIO_BUTTON',
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
    const isControlled = React.useMemo(() => checked !== undefined || radioGroupContext.value !== '', []);

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
        <Button variant={state.hasError ? 'destructive_secondary' : 'secondary'} as="span" disabled={state.disabled}>
          {children}
        </Button>
      </Box>
    );
  },
);

RadioButton.displayName = 'RadioButton';

export { RadioButton };
