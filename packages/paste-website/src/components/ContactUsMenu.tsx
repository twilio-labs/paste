import * as React from 'react';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

export const ContactUsMenu: React.FC<{}> = () => {
  const menu = useMenuState();

  const handleClick = (): void => menu.hide();
  return (
    <>
      <MenuButton {...menu} variant="link">
        Contact us <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Contact us">
        <MenuItem {...menu} href="https://github.com/twilio-labs/paste/discussions" onClick={handleClick}>
          Ask a question
        </MenuItem>
        <MenuItem {...menu} href="https://github.com/twilio-labs/paste/discussions" onClick={handleClick}>
          Request a feature
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title="
          onClick={handleClick}
        >
          Report a bug
        </MenuItem>
      </Menu>
    </>
  );
};
