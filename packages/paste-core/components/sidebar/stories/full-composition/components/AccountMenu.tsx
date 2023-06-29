import * as React from 'react';
import {Menu, MenuButton, MenuGroup, MenuItem, useMenuState, MenuSeparator} from '@twilio-paste/menu';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

export const AccountMenu: React.FC = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="reset" size="reset">
        Account <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuGroup label="Manage account">
          <MenuItem {...menu}>General settings</MenuItem>
          <MenuItem {...menu}>Manage users</MenuItem>
          <MenuItem {...menu}>Sub accounts</MenuItem>
          <MenuItem {...menu}>Notification preferences</MenuItem>
          <MenuItem {...menu}>Audit events</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup label="Keys &amp; Credentials">
          <MenuItem {...menu}>API keys & tokens</MenuItem>
          <MenuItem {...menu}>Credentials</MenuItem>
          <MenuItem {...menu}>Connected apps</MenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};
