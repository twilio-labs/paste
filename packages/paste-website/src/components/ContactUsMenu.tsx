import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {MoreIcon} from '@twilio-paste/icons/esm/MoreIcon';
import {ProductSupportIcon} from '@twilio-paste/icons/esm/ProductSupportIcon';

interface ContactUsMenuProps {
  placement?:
    | 'auto-start'
    | 'auto'
    | 'auto-end'
    | 'top-start'
    | 'top'
    | 'top-end'
    | 'right-start'
    | 'right'
    | 'right-end'
    | 'bottom-end'
    | 'bottom'
    | 'bottom-start'
    | 'left-end'
    | 'left'
    | 'left-start'
    | undefined;
}

export const ContactUsMenu: React.FC<ContactUsMenuProps> = ({placement = 'right-end'}) => {
  const menu = useMenuState({placement});

  const handleClick = (category: string, label: string): void => {
    menu.hide();
    trackCustomEvent({
      category,
      action: 'Click',
      label,
    });
  };

  return (
    <Box marginTop="auto" padding="space20" paddingBottom="space70">
      <MenuButton {...menu} variant="reset" size="reset" fullWidth>
        <Box as="span" display="flex" alignItems="center" padding="space40" width="100%">
          <MediaObject verticalAlign="center">
            <MediaFigure spacing="space30">
              <ProductSupportIcon decorative />
            </MediaFigure>
            <MediaBody>
              <Text as="span" fontSize={['fontSize50', 'fontSize50', 'fontSize30']} lineHeight="lineHeight20">
                Contact us
              </Text>
            </MediaBody>
          </MediaObject>
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
