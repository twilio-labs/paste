import * as React from 'react';
import {Display, IconSize, TextColor} from '@twilio-paste/style-props';
import {Box, BoxProps, safelySpreadBoxProps} from '@twilio-paste/box';

export interface IconWrapperProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'color'>,
    Pick<BoxProps, 'element' | 'variant'> {
  as?: keyof JSX.IntrinsicElements;
  display?: Display;
  size?: IconSize;
  color?: TextColor;
}

const IconWrapper: React.FC<IconWrapperProps> = ({display, color, size, ...props}) => {
  return <Box element="ICON" {...safelySpreadBoxProps(props)} as="span" color={color} display={display} size={size} />;
};

IconWrapper.defaultProps = {
  display: 'block',
  color: 'currentColor',
  size: 'sizeIcon30',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
