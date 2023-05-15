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
  sidebarNavigationLabelStyles,
  sidebarNavigationLabelNestedStyles,
  sidebarNavigationItemSelectedStyles,
} from './styles';

export interface SidebarNavigationItemProps
  extends Pick<ButtonProps, 'as' | 'href' | 'onClick' | 'i18nExternalLinkLabel'> {
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
    // Any disclosure context means we're nested
    const isNested = disclosure != null;

    const styles = React.useMemo(
      () => ({
        background: 'none',
        border: 'none',
        outline: 'none',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        paddingX: 'space30',
        ...(isNested ? sidebarNavigationLabelNestedStyles(theme) : sidebarNavigationLabelStyles),
        ...(selected && sidebarNavigationItemSelectedStyles),
      }),
      [theme, isNested, selected]
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
        display={collapsed && !icon ? 'none' : 'flex'}
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
