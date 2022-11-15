import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {BoxProps} from '@twilio-paste/box';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

/*
 * still left:
 * - use Context to pass down fullWidth Prop
 * - how to prove this works with a router (since stories are only on 1 URL)
 * - tests, doc, stories
 */

export interface InPageNavigationProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children?: React.ReactNode;
  element?: BoxProps['element'];
  fullWidth?: boolean; // this is what 'fitted' was in Tabs. is good?
  // union type of label/labelledby
}

const InPageNavigation = React.forwardRef<HTMLDivElement, InPageNavigationProps>(
  ({element = 'IN_PAGE_NAVIGATION', fullWidth, children, ...props}, ref) => {
    return (
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
          {/* {React.cloneElement(children as React.ReactElement<any>, {fullWidth})} */}
          {children}
        </Box>
      </Box>
    );
  }
);

InPageNavigation.displayName = 'InPageNavigation';

InPageNavigation.propTypes = {
  children: PropTypes.node,
  element: PropTypes.string,
};

export {InPageNavigation};
