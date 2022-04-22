import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxElementProps, BoxStyleProps} from '@twilio-paste/box';
import type {IconSize} from '@twilio-paste/style-props';

export interface IconWrapperProps extends BoxElementProps, Pick<BoxStyleProps, 'display' | 'color'> {
  size?: IconSize;
}

const IconWrapper = React.forwardRef<HTMLElement, IconWrapperProps>(
  ({as = 'span', color = 'currentColor', display = 'block', element = 'ICON', size = 'sizeIcon30', ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      as={as}
      element={element}
      lineHeight="lineHeight0"
      display={display}
      color={color}
      size={size}
      ref={ref}
    />
  )
);

IconWrapper.displayName = 'IconWrapper';
export {IconWrapper};
