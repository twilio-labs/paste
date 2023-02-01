import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import type {Variants} from './types';
import {InPageNavigationContext} from './InPageNavigationContext';

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  'aria-label': string;
  variant?: Variants;
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  ({element = 'IN_PAGE_NAVIGATION', variant = 'default', children, ...props}, ref) => {
    return (
      <InPageNavigationContext.Provider value={{variant}}>
        <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
          <Box
            as="ul"
            listStyleType="none"
            element={`${element}_ITEMS`}
            display="flex"
            justifyContent={variant === 'fullWidth' ? 'space-evenly' : 'flex-start'}
            borderBottomWidth="borderWidth10"
            borderBottomColor="colorBorderWeak"
            borderBottomStyle="solid"
            margin="space0"
            marginBottom="space60"
            paddingLeft="space0"
            paddingRight={variant === 'default' ? 'space70' : 'space0'}
            columnGap={variant === 'default' ? 'space70' : 'space0'}
          >
            {children}
          </Box>
        </Box>
      </InPageNavigationContext.Provider>
    );
  }
);

InPageNavigation.displayName = 'InPageNavigation';

InPageNavigation.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['fullWidth', 'default']),
};

export {InPageNavigation};
