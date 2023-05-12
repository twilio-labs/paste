import * as React from 'react';
import PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import type {ButtonProps} from '@twilio-paste/button';

export interface SidebarHeaderIconButtonProps extends Omit<ButtonProps, 'size' | 'variant'> {
  children: NonNullable<React.ReactNode>;
}

export const SidebarHeaderIconButton = React.forwardRef<HTMLButtonElement, SidebarHeaderIconButtonProps>(
  ({element = 'SIDEBAR_HEADER_ICON_BUTTON', ...props}, ref) => {
    return <Button {...props} size="icon" variant="inverse" element={element} ref={ref} />;
  }
);

SidebarHeaderIconButton.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarHeaderIconButton.displayName = 'SidebarHeaderIconButton';
