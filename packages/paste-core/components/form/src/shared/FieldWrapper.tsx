import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box} from '@twilio-paste/box';
import {BoxShadow} from '@twilio-paste/style-props';
import {FormInputTypes} from './types';

interface FieldWrapperProps {
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
  type?: FormInputTypes;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({disabled, hasError, readOnly, children, type}) => {
  let boxShadow = 'shadowBorderInput';
  if (disabled) {
    boxShadow = 'shadowBorderInputDisabled';
  } else if (hasError) {
    boxShadow = 'shadowBorderInputError';
  } else if (type === 'hidden') {
    boxShadow = 'none';
  }

  return (
    <Box
      display="flex"
      width="100%"
      backgroundColor={readOnly || disabled ? 'colorBackground' : 'colorBackgroundBody'}
      boxShadow={boxShadow as BoxShadow}
      borderRadius="borderRadius20"
      transition="box-shadow 100ms ease-in"
      cursor={disabled ? 'not-allowed' : 'text'}
      _hover={{
        boxShadow: hasError ? 'shadowBorderInputErrorHover' : 'shadowBorderInputHover',
      }}
      _focusWithin={{
        boxShadow: 'shadowFocus',
      }}
    >
      {children}
    </Box>
  );
};

FieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  FieldWrapper.propTypes = {
    disabled: PropTypes.bool,
    hasError: PropTypes.bool,
    readOnly: PropTypes.bool,
  };
}

export {FieldWrapper};
