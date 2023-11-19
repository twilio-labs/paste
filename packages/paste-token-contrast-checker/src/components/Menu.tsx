import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from "@twilio-paste/core/menu";
import { ChevronDownIcon } from "@twilio-paste/icons/cjs/ChevronDownIcon";
import * as React from "react";

export const PlainMenu = (): JSX.Element => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Preferences <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Settings</MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
};
