import * as React from 'react';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';
import {IconSize, TextColor} from '@twilio-paste/style-props';

export interface IconWrapperProps extends Pick<BoxProps, 'element' | 'variant'> {
  as?: keyof JSX.IntrinsicElements;
  size?: IconSize;
  iconColor?: TextColor;
}

const IconWrapper: React.FC<IconWrapperProps> = ({iconColor, size, ...props}) => {
  return (
    <Box
      element="ICON"
      {...safelySpreadBoxProps(props)}
      as="span"
      color={iconColor}
      display="inline-flex"
      size={size}
    />
  );
};

IconWrapper.defaultProps = {
  size: 'sizeIcon30',
  iconColor: 'currentColor',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
