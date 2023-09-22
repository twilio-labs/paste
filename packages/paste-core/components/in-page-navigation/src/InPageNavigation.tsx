import * as React from 'react';
import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';

import type { Variants } from './types';
import { InPageNavigationContext } from './InPageNavigationContext';

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  marginBottom?: 'space0';
  'aria-label': string;
  variant?: Variants;
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  ({ element = 'IN_PAGE_NAVIGATION', variant = 'default', marginBottom, children, ...props }, ref) => {
    const isFullWidth = variant === 'fullWidth' || variant === 'inverse_fullWidth';

    return (
      <InPageNavigationContext.Provider value={{ variant }}>
        <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
          <Box
            as="ul"
            listStyleType="none"
            element={`${element}_ITEMS`}
            display="flex"
            justifyContent={isFullWidth ? 'space-evenly' : 'flex-start'}
            margin="space0"
            marginBottom={marginBottom || 'space60'}
            padding="space0"
            columnGap={!isFullWidth ? 'space80' : 'space0'}
          >
            {children}
          </Box>
        </Box>
      </InPageNavigationContext.Provider>
    );
  },
);

InPageNavigation.displayName = 'InPageNavigation';

export { InPageNavigation };
