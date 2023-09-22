import * as React from 'react';
import { Menu, MenuButton, MenuGroup, MenuItem, useMenuState, MenuSeparator } from '@twilio-paste/menu';
import { ChevronDownIcon } from '@twilio-paste/icons/esm/ChevronDownIcon';

export const BillingMenu: React.FC = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="reset" size="reset">
        Billing <ChevronDownIcon decorative color="colorTextIcon" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuGroup label="Manage Billing">
          <MenuItem {...menu}>Billing overview</MenuItem>
          <MenuItem {...menu}>Payment history</MenuItem>
          <MenuItem {...menu}>Recurring items</MenuItem>
          <MenuItem {...menu}>Payment settings</MenuItem>
          <MenuItem {...menu}>Pricing</MenuItem>
          <MenuItem {...menu}>Preferences</MenuItem>
        </MenuGroup>
        <MenuSeparator />
        <MenuGroup label="Usage">
          <MenuItem {...menu}>Usage summary</MenuItem>
          <MenuItem {...menu}>Usage bvy subaccount</MenuItem>
          <MenuItem {...menu}>Trigger</MenuItem>
          <MenuItem {...menu}>Authorized apps</MenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};
