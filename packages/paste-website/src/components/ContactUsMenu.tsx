import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
import {ProductSupportIcon} from '@twilio-paste/icons/esm/ProductSupportIcon';

export const ContactUsMenu: React.FC = () => {
  const menu = useMenuState({placement: 'right-end'});

  const handleClick = (category: string, label: string): void => {
    menu.hide();
    trackCustomEvent({
      category,
      action: 'Click',
      label,
    });
  };

  return (
    <Box backgroundColor="colorBackground" marginTop="auto" padding="space20" paddingBottom="space70">
      <MenuButton {...menu} variant="reset" size="reset" fullWidth>
        <Box as="span" display="flex" alignItems="center" padding="space40" width="100%">
          <ProductSupportIcon decorative />
          <Box as="span" marginLeft="space30" textAlign="left">
            Contact us
          </Box>
          <Box as="span" marginLeft="auto">
            <MoreIcon decorative />
          </Box>
        </Box>
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
    </Box>
  );
};
