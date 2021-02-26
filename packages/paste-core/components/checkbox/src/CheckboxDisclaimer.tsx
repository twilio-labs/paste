import * as React from 'react';
import * as PropTypes from 'prop-types';
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
  ({children, errorText, ...props}, ref) => {
    return (
      <>
        <Box backgroundColor="colorBackground" borderRadius="borderRadius20" padding="space50">
          <Checkbox {...props} hasError={errorText != null} ref={ref}>
            {children}
          </Checkbox>
        </Box>
        {errorText && (
          <Box marginTop="space30" marginLeft="space50">
            <HelpText variant="error">{errorText}</HelpText>
          </Box>
        )}
      </>
    );
  }
);

CheckboxDisclaimer.displayName = 'CheckboxDisclaimer';

if (process.env.NODE_ENV === 'development') {
  CheckboxDisclaimer.propTypes = {
    children: PropTypes.node.isRequired,
    errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };
}

export {CheckboxDisclaimer};
