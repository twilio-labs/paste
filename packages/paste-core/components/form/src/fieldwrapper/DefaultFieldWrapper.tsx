import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {BoxShadow} from '@twilio-paste/style-props';
import {FieldWrapperProps, FieldWrapperPropTypes} from '../shared/types';

const DefaultFieldWrapper: React.FC<FieldWrapperProps> = ({disabled, hasError, readOnly, children, type}) => {
  let boxShadow = 'shadowBorder' as BoxShadow;
  let boxShadowHover = 'shadowBorderPrimaryDark' as BoxShadow;
  if (disabled) {
    boxShadow = 'shadowBorderLight';
    boxShadowHover = 'shadowBorderLight';
  } else if (readOnly) {
    boxShadowHover = 'shadowBorder';
  } else if (hasError) {
    boxShadow = 'shadowBorderError';
    boxShadowHover = 'shadowBorderErrorDark';
  } else if (type === 'hidden') {
    boxShadow = null;
  }

  return (
    <Box
      display="flex"
      width="100%"
      backgroundColor={readOnly || disabled ? 'colorBackground' : 'colorBackgroundBody'}
      boxShadow={boxShadow}
      borderRadius="borderRadius20"
      transition="box-shadow 100ms ease-in"
      cursor={disabled ? 'not-allowed' : 'text'}
      _hover={{
        boxShadow: boxShadowHover,
      }}
      _focusWithin={{
        boxShadow: 'shadowFocus',
      }}
      _active={{
        boxShadow: disabled ? 'shadowBorderLight' : 'shadowBorderPrimaryDarker',
      }}
    >
      {children}
    </Box>
  );
};

DefaultFieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  DefaultFieldWrapper.propTypes = FieldWrapperPropTypes;
}

export {DefaultFieldWrapper};
