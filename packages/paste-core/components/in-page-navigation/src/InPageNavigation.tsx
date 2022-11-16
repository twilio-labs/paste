import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {InPageNavigationContext} from './InPageNavigationContext';

/*
 * still left:
 * - use Context to pass down fullWidth Prop
 * - how to prove this works with a router (since stories are only on 1 URL)
 * - tests, doc, stories
 */

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children: React.ReactNode;
  element?: BoxProps['element'];
  'aria-label': string;
  variant?: 'fullWidth';
  // later on: union type of label/labelledby
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  ({element = 'IN_PAGE_NAVIGATION', variant, children, ...props}, ref) => {
    return (
      <InPageNavigationContext.Provider value={{variant}}>
        <Box {...safelySpreadBoxProps(props)} as="nav" ref={ref} element={element}>
          <Box
            as="ul"
            listStyleType="none"
            element={`${element}_ITEMS`}
            display="flex"
            borderBottomWidth="borderWidth10"
            borderBottomColor="colorBorderWeak"
            borderBottomStyle="solid"
            margin="space0"
            marginBottom="space60"
            paddingLeft="space0"
            columnGap="space70"
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
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  'aria-label': PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['fullWidth', null]),
};

export {InPageNavigation};
