import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {HelpText} from '@twilio-paste/help-text';

import {Checkbox} from './Checkbox';
import type {CheckboxProps} from './Checkbox';

export interface CheckboxDisclaimerProps
  extends Omit<CheckboxProps, 'isSelectAll' | 'isSelectAllChild' | 'indeterminate' | 'helpText' | 'hasError'> {
  children: NonNullable<React.ReactNode>;
  errorText?: string | React.ReactNode;
}

const CheckboxDisclaimer = React.forwardRef<HTMLInputElement, CheckboxDisclaimerProps>(
  ({children, element = 'CHECKBOX_DISCLAIMER', errorText, ...props}, ref) => {
    return (
      <>
        <Box element={element} backgroundColor="colorBackground" borderRadius="borderRadius20" padding="space50">
          <Checkbox {...props} hasError={errorText != null} ref={ref}>
            {children}
          </Checkbox>
        </Box>
        {errorText && (
          <Box marginTop="space30" element={`${element}_ERROR_TEXT_WRAPPER`} marginLeft="space50">
            <HelpText variant="error">{errorText}</HelpText>
          </Box>
        )}
      </>
    );
  }
);

CheckboxDisclaimer.displayName = 'CheckboxDisclaimer';

export {CheckboxDisclaimer};
