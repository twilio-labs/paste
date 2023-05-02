import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';

import {Menu, MenuBadgeStatus, MenuItemStatus, MenuSeparator, useMenuState} from '../src';
import type {MenuBadgeStatusProps} from '../src';

const ProcessStatusMenu: React.FC<React.PropsWithChildren<{variant: MenuBadgeStatusProps['variant']}>> = ({
  variant,
  children,
}) => {
  const menu = useMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change account" variant={variant}>
        {children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemStatus {...menu} variant="ProcessSuccess" onClick={onClick}>
          Success
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessNeutral" onClick={onClick}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessWarning" onClick={onClick}>
          Warning
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessError">
          Error
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessInProgress" onClick={onClick}>
          In progress
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDisabled" onClick={onClick}>
          Disabled
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDraft" onClick={onClick}>
          Draft
        </MenuItemStatus>
      </Menu>
    </>
  );
};
const AvailabilityStatusMenu: React.FC<React.PropsWithChildren<{variant: MenuBadgeStatusProps['variant']}>> = ({
  variant,
  children,
}) => {
  const menu = useMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change account" variant={variant}>
        {children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemStatus variant="AvailabilityAvailable" {...menu} onClick={onClick}>
          Available
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityBusy" {...menu} onClick={onClick}>
          Busy
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityUnavailable" {...menu} onClick={onClick}>
          Unavailable
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityNeutral" {...menu} onClick={onClick}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus variant="AvailabilityOffline" {...menu} onClick={onClick}>
          Break
        </MenuItemStatus>
      </Menu>
    </>
  );
};

export default {
  title: 'Components/Menu/MenuStatus',
  component: Menu,
  subcomponents: {MenuBadgeStatus, MenuItemStatus, MenuSeparator},
  parameters: {
    // Sets a delay for the component's stories
    chromatic: {delay: 3000},
  },
};
export const Process: StoryFn = () => (
  <Stack orientation="vertical" spacing="space40">
    <ProcessStatusMenu variant="ProcessError">Error</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessWarning">Warning</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessSuccess">Success</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessNeutral">Neutral</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessInProgress">In Progress</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessDisabled">Disabled</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessDraft">Draft</ProcessStatusMenu>
  </Stack>
);

export const Availability: StoryFn = () => (
  <Stack orientation="vertical" spacing="space40">
    <AvailabilityStatusMenu variant="AvailabilityAvailable">Available</AvailabilityStatusMenu>
    <AvailabilityStatusMenu variant="AvailabilityBusy">Busy</AvailabilityStatusMenu>
    <AvailabilityStatusMenu variant="AvailabilityUnavailable">Unavailable</AvailabilityStatusMenu>
    <AvailabilityStatusMenu variant="AvailabilityNeutral">Neutral</AvailabilityStatusMenu>
    <AvailabilityStatusMenu variant="AvailabilityOffline">Offline</AvailabilityStatusMenu>
  </Stack>
);
