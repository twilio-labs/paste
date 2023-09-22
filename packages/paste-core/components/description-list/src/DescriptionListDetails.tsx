import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';

export interface DescriptionListDetailsProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionListDetails = React.forwardRef<HTMLElement, DescriptionListDetailsProps>(
  ({ element = 'DESCRIPTION_LIST_DETAILS', children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="dd"
        ref={ref}
        element={element}
        margin="space0"
        color="colorText"
        fontWeight="fontWeightNormal"
        lineHeight="lineHeight30"
        fontSize="fontSize30"
        overflowWrap="break-word"
      >
        {children}
      </Box>
    );
  },
);

DescriptionListDetails.displayName = 'DescriptionListDetails';

export { DescriptionListDetails };
