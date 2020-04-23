import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {Checkbox, CheckboxProps} from './Checkbox';
import {FormHelpText} from './FormHelpText';

export interface CheckboxDisclaimerProps
  extends Omit<CheckboxProps, 'isSelectAll' | 'isSelectAllChild' | 'indeterminate' | 'helpText' | 'hasError'> {
  children: NonNullable<React.ReactNode>;
  errorText?: string | React.ReactNode;
}

const CheckboxDisclaimer: React.FC<CheckboxDisclaimerProps> = ({children, errorText, ...props}) => {
  return (
    <>
      <Box backgroundColor="colorBackground" borderRadius="borderRadius20" padding="space50">
        <Checkbox {...props} hasError={errorText != null}>
          {children}
        </Checkbox>
      </Box>
      {errorText && (
        <Box marginTop="space30" marginLeft="space50">
          <FormHelpText variant="error">{errorText}</FormHelpText>
        </Box>
      )}
    </>
  );
};

CheckboxDisclaimer.displayName = 'CheckboxDisclaimer';

if (process.env.NODE_ENV === 'development') {
  CheckboxDisclaimer.propTypes = {
    children: PropTypes.node.isRequired,
    errorText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  };
}

export {CheckboxDisclaimer};
