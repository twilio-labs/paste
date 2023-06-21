import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {SidebarContext} from '../SidebarContext';

export interface SidebarNavigationActionProps {
  children: NonNullable<React.ReactNode>;
}

const SidebarNavigationAction = React.forwardRef<HTMLDivElement, SidebarNavigationActionProps>(
  ({children, ...props}, ref) => {
    const {collapsed} = React.useContext(SidebarContext);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        color="colorTextInverseWeak"
        display={collapsed ? 'none' : 'block'}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

SidebarNavigationAction.displayName = 'SidebarNavigationAction';

SidebarNavigationAction.propTypes = {
  children: PropTypes.node.isRequired,
};

export {SidebarNavigationAction};
