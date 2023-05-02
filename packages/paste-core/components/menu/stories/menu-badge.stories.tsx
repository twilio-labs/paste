import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import type {BadgeProps} from '@twilio-paste/badge';
import {Stack} from '@twilio-paste/stack';

import {Menu, MenuBadge, MenuItem, MenuSeparator, useMenuState} from '../src';

const BadgeMenu: React.FC<React.PropsWithChildren<{variant: BadgeProps['variant']}>> = ({variant, children}) => {
  const menu = useMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <MenuBadge {...menu} buttonLabel="Change account" variant={variant}>
        {children}
      </MenuBadge>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={onClick}>
          Settings
        </MenuItem>
        <MenuItem {...menu} href="http://www.google.com" onClick={onClick}>
          Has a link
        </MenuItem>
        <MenuItem {...menu} variant="destructive" href="http://www.google.com" onClick={onClick}>
          Destructive link
        </MenuItem>
        <MenuItem {...menu} disabled>
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu} onClick={onClick}>
          Keyboard shortcuts
        </MenuItem>
      </Menu>
    </>
  );
};

export default {
  title: 'Components/Menu/MenuBadge',
  component: Menu,
  subcomponents: {MenuBadge, MenuItem, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
  },
};
export const Default: StoryFn = () => (
  <Stack orientation="vertical" spacing="space40">
    <BadgeMenu variant="decorative10">Decorative 10</BadgeMenu>
    <BadgeMenu variant="decorative20">Decorative 20</BadgeMenu>
    <BadgeMenu variant="decorative30">Decorative 30</BadgeMenu>
    <BadgeMenu variant="decorative40">Decorative 40</BadgeMenu>
    <BadgeMenu variant="success">Success</BadgeMenu>
    <BadgeMenu variant="neutral">Neutral</BadgeMenu>
    <BadgeMenu variant="warning">Warning</BadgeMenu>
    <BadgeMenu variant="error">Error</BadgeMenu>
    <BadgeMenu variant="new">New</BadgeMenu>
  </Stack>
);
