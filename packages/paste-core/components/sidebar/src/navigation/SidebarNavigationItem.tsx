import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {Button} from '@twilio-paste/button';
import {Truncate} from '@twilio-paste/truncate';
import type {ButtonProps} from '@twilio-paste/button';

import {SidebarContext} from '../SidebarContext';
import {SidebarNavigationDisclosureContext} from './SidebarNavigationDisclosureContext';
import {
  sidebarNavigationItemStyles,
  sidebarNavigationItemNestedStyles,
  sidebarNavigationItemSelectedStyles,
  sidebarNavigationItemCollapsedStyles,
} from './styles';

export interface SidebarNavigationItemProps extends React.HTMLAttributes<HTMLElement> {
  as?: ButtonProps['as'];
  href?: ButtonProps['href'];
  onClick?: ButtonProps['onClick'];
  i18nExternalLinkLabel?: ButtonProps['i18nExternalLinkLabel'];
  children: string;
  element?: BoxProps['element'];
  selected?: boolean;
  icon?: React.ReactNode;
}

const SidebarNavigationItem = React.forwardRef<HTMLButtonElement, SidebarNavigationItemProps>(
  ({element = 'SIDEBAR_NAVIGATION_ITEM', selected, children, icon, ...props}, ref) => {
    const theme = useTheme();
    const {collapsed} = React.useContext(SidebarContext);
    const {disclosure} = React.useContext(SidebarNavigationDisclosureContext);
    // If there is any disclosure context, that indicates that this component is nested
    const isNested = disclosure != null;

    const styles = React.useMemo(
      () => ({
        ...(isNested ? sidebarNavigationItemNestedStyles(theme) : sidebarNavigationItemStyles),
        ...(collapsed && sidebarNavigationItemCollapsedStyles),
        ...(selected && sidebarNavigationItemSelectedStyles),
        display: collapsed && !icon ? 'none' : 'flex',
      }),
      [theme, isNested, selected, collapsed, icon]
    );

    return (
      <Button
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        type="button"
        variant="reset"
        size="reset"
        fullWidth
        {...(styles as any)}
      >
        <Box display="flex" justifyContent="center">
          {icon}
        </Box>
        {collapsed ? null : <Truncate title={children}>{children}</Truncate>}
      </Button>
    );
  }
);
SidebarNavigationItem.displayName = 'SidebarNavigationItem';
SidebarNavigationItem.propTypes = {
  children: PropTypes.string.isRequired,
  element: PropTypes.string,
  selected: PropTypes.bool,
};

export {SidebarNavigationItem};
