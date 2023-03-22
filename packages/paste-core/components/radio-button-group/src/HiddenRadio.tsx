import * as React from 'react';
import {Box} from '@twilio-paste/box';

import type {RadioButtonProps} from './RadioButton';

type HiddenRadioProps = Pick<RadioButtonProps, 'checked' | 'value' | 'id' | 'disabled' | 'name' | 'onChange'>;
export const HiddenRadio = React.forwardRef<HTMLInputElement, HiddenRadioProps>((props, ref) => (
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

export type HiddenRadioState = {
  name: string;
  disabled: boolean;
  hasError: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
};
