import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {BoxShadow} from '@twilio-paste/style-props';
import {FieldWrapperProps, FieldWrapperPropTypes} from '../shared/types';

const InverseFieldWrapper: React.FC<FieldWrapperProps> = ({disabled, element, hasError, readOnly, children, type}) => {
  let boxShadow = 'shadowBorderInverse' as BoxShadow;
  let boxShadowHover = 'shadowBorderInverseLightest' as BoxShadow;
  if (disabled) {
    boxShadow = 'shadowBorderInverseDarker';
    boxShadowHover = 'shadowBorderInverseDarker';
  } else if (readOnly) {
    boxShadowHover = 'shadowBorderInverse';
  } else if (hasError) {
    boxShadow = 'shadowBorderErrorLight';
  } else if (type === 'hidden') {
    boxShadow = null;
  }

  return (
    <Box
      display="flex"
      element={element}
      width="100%"
      backgroundColor={readOnly || disabled ? 'colorBackgroundInverseLight' : 'colorBackgroundInverse'}
      boxShadow={boxShadow}
      borderRadius="borderRadius20"
      color={'colorTextInverse'}
      transition="box-shadow 100ms ease-in"
      cursor={disabled ? 'not-allowed' : 'text'}
      _hover={{
        boxShadow: boxShadowHover,
      }}
      _focusWithin={{
        backgroundColor: 'colorBackgroundInverse',
        boxShadow: 'shadowFocusInverse',
      }}
      _active={{
        boxShadow: boxShadowHover,
      }}
    >
      {children}
    </Box>
  );
};

InverseFieldWrapper.displayName = 'FieldWrapper';

if (process.env.NODE_ENV === 'development') {
  InverseFieldWrapper.propTypes = FieldWrapperPropTypes;
}

export {InverseFieldWrapper};
