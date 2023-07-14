import * as React from 'react';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {ProductSupportIcon} from '@twilio-paste/icons/esm/ProductSupportIcon';

import {event} from '../lib/gtag';

export const ContactUsMenu: React.FC<React.PropsWithChildren<ContactUsMenuProps>> = () => {
  const menu = useMenuState();

  const handleClick = (category: string, action: string, label: string): void => {
    menu.hide();
    event({
      category,
      action,
      label,
    });
  };

  return (
    <>
      <MenuButton
        {...menu}
        variant="secondary_icon"
        size="reset"
        onClick={() =>
          event({
            category: 'Top Navigation',
            action: 'click-contact-us',
            label: 'Contact us',
          })
        }
      >
        <ProductSupportIcon decorative={false} title="Contact us" />
      </MenuButton>
      <Menu {...menu} aria-label="Contact us">
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions"
          onClick={() => handleClick('Contact Us', 'click-ask-question', 'Ask question')}
        >
          Ask a question
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/discussions"
          onClick={() => handleClick('Contact Us', 'click-request-feature', 'Request feature')}
        >
          Request a feature
        </MenuItem>
        <MenuItem
          {...menu}
          href="https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title="
          onClick={() => handleClick('Contact Us', 'click-report-bug', 'Report bug')}
        >
          Report a bug
        </MenuItem>
      </Menu>
    </>
  );
};
