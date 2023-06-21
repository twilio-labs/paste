import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';

import {SidebarContext} from '../SidebarContext';

export interface SidebarNavigationSeparatorProps
  extends React.HTMLAttributes<HTMLHRElement>,
    Pick<BoxProps, 'element'> {
  className?: never;
}

const SidebarNavigationSeparator = React.forwardRef<HTMLHRElement, SidebarNavigationSeparatorProps>(
  ({element = 'SIDEBAR_NAVIGATION_SEPARATOR', ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        display={collapsed ? 'none' : 'block'}
        aria-orientation="horizontal"
        element={element}
        marginY="space50"
        as="hr"
        borderWidth="borderWidth0"
        borderColor="colorBorderInverseWeaker"
        borderStyle="solid"
        borderBottomWidth="borderWidth10"
        ref={ref}
      />
    );
  }
);

SidebarNavigationSeparator.displayName = 'SidebarNavigationSeparator';

SidebarNavigationSeparator.propTypes = {
  element: PropTypes.string,
};

export {SidebarNavigationSeparator};
