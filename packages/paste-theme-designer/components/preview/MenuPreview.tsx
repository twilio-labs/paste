import * as React from 'react';
import {useMenuState, MenuButton, Menu, MenuItem} from '@twilio-paste/core/menu';
import {ChevronDownIcon} from '@twilio-paste/icons/cjs/ChevronDownIcon';

const MenuPreview: React.FC<React.PropsWithChildren<unknown>> = () => {
  const menu = useMenuState();

  return (
    <>
      <MenuButton {...menu} variant="secondary">
        Open menu <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Actions">
        <MenuItem {...menu}>Call your representatives</MenuItem>
        <MenuItem {...menu}>Support black-owned businesses</MenuItem>
        <MenuItem {...menu}>Vote in national, state, and local elections</MenuItem>
      </Menu>
    </>
  );
};

export {MenuPreview};
