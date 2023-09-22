import { SupportIcon } from "@twilio-paste/icons/esm/SupportIcon";
import { Menu, MenuButton, MenuItem, useMenuState } from "@twilio-paste/menu";
import * as React from "react";

export const SupportMenu: React.FC = () => {
  const menu = useMenuState();
  return (
    <>
      <MenuButton {...menu} variant="secondary_icon" size="reset">
        <SupportIcon decorative={false} title="Support" />
      </MenuButton>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu}>Support Center</MenuItem>
        <MenuItem {...menu} href="http://www.google.com">
          Developer Docs
        </MenuItem>
      </Menu>
    </>
  );
};
