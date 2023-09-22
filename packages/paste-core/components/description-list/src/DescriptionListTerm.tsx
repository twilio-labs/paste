import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';

export interface DescriptionListTermProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
}

const DescriptionListTerm = React.forwardRef<HTMLElement, DescriptionListTermProps>(
  ({ element = 'DESCRIPTION_LIST_TERM', children, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="dt"
        ref={ref}
        element={element}
        fontWeight="fontWeightSemibold"
        color="colorText"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        margin="space0"
      >
        {children}
      </Box>
    );
  },
);

DescriptionListTerm.displayName = 'DescriptionListTerm';

export { DescriptionListTerm };
