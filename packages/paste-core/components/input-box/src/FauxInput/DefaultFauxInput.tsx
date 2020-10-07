import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {BoxShadow, BackgroundColor} from '@twilio-paste/style-props';
import {FauxInputProps, FauxInputPropTypes} from '../types';

const DefaultFauxInput: React.FC<FauxInputProps> = ({disabled, hasError, readOnly, children, type}) => {
  let backgroundColor = 'colorBackgroundBody' as BackgroundColor;
  let boxShadow = 'shadowBorder' as BoxShadow;
  let boxShadowHover = 'shadowBorderPrimaryDark' as BoxShadow;
  let boxShadowActive = 'shadowBorderPrimaryDarker' as BoxShadow;
  if (disabled && type !== 'hidden') {
    boxShadow = 'shadowBorderLight';
    boxShadowHover = 'shadowBorderLight';
    backgroundColor = 'colorBackground';
    boxShadowActive = 'shadowBorderLight';
  } else if (readOnly && type !== 'hidden') {
    boxShadowHover = 'shadowBorder';
    backgroundColor = 'colorBackground';
  } else if (hasError && type !== 'hidden') {
    boxShadow = 'shadowBorderError';
    boxShadowHover = 'shadowBorderErrorDark';
  } else if (type === 'hidden') {
    boxShadow = null;
    boxShadowHover = null;
    backgroundColor = null;
    boxShadowActive = null;
  }

  return (
    <Box
      display="flex"
      width="100%"
      backgroundColor={backgroundColor}
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
        boxShadow: boxShadowActive,
      }}
    >
      {children}
    </Box>
  );
};

DefaultFauxInput.displayName = 'DefaultFauxInput';

if (process.env.NODE_ENV === 'development') {
  DefaultFauxInput.propTypes = FauxInputPropTypes;
}

export {DefaultFauxInput};
