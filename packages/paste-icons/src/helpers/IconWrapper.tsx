import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps, BoxStyleProps} from '@twilio-paste/box';
import type {IconSize} from '@twilio-paste/style-props';

export interface IconWrapperProps extends BoxElementProps, Pick<BoxStyleProps, 'display' | 'color'> {
  size?: IconSize;
}

const IconWrapper: React.FC<IconWrapperProps> = ({display, color, size, ...props}) => {
  return <Box {...safelySpreadBoxProps(props)} lineHeight="lineHeight0" display={display} color={color} size={size} />;
};

IconWrapper.defaultProps = {
  as: 'span',
  display: 'block',
  color: 'currentColor',
  size: 'sizeIcon30',
};

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
