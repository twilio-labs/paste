import * as React from 'react';
import {Box, BoxElementProps, BoxStyleProps, safelySpreadBoxProps} from '@twilio-paste/box';

export interface IconWrapperProps extends BoxElementProps, Pick<BoxStyleProps, 'display' | 'size' | 'color'> {}

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
