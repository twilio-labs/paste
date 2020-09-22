import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

export const ContactUsMenu: React.FC<{}> = () => {
  const menu = useMenuState();

  const handleClick = (category: string, label: string): void => {
    menu.hide();
    trackCustomEvent({
      category,
      action: 'Click',
      label,
    });
  };

  return (
    <>
      <MenuButton {...menu} variant="link">
        Contact us <ChevronDownIcon decorative />
      </MenuButton>
      <Menu {...menu} aria-label="Contact us">
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions"
          onClick={() => handleClick('Contact Menu', 'Ask a question')}
        >
          Ask a question
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions"
          onClick={() => handleClick('Contact Menu', 'Request a feature')}
        >
          Request a feature
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title="
          onClick={() => handleClick('Contact Menu', 'Report a bug')}
        >
          Report a bug
        </MenuItem>
      </Menu>
    </>
  );
};
