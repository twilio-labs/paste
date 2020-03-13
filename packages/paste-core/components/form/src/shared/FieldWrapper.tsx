import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {BoxShadow} from '@twilio-paste/style-props';

interface FieldWrapperProps {
  disabled?: boolean;
  hasError?: boolean;
  readOnly?: boolean;
}

const FieldWrapper: React.FC<FieldWrapperProps> = ({disabled, hasError, readOnly, children}) => {
  let boxShadow = 'shadowBorderInput';
  if (disabled) {
    boxShadow = 'shadowBorderInputDisabled';
  } else if (hasError) {
    boxShadow = 'shadowBorderInputError';
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

export {FieldWrapper};
