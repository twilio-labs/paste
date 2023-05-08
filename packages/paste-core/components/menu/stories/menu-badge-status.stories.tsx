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
const ConnectivityStatusMenu: React.FC<React.PropsWithChildren<{variant: MenuBadgeStatusProps['variant']}>> = ({
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
        <MenuItemStatus variant="ConnectivityAvailable" {...menu} onClick={onClick}>
          Available
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityBusy" {...menu} onClick={onClick}>
          Busy
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityUnavailable" {...menu} onClick={onClick}>
          Unavailable
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityNeutral" {...menu} onClick={onClick}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityOffline" {...menu} onClick={onClick}>
          Break
        </MenuItemStatus>
      </Menu>
    </>
  );
};

const ConnectivityObject = {
  Available: {
    variant: 'ConnectivityAvailable',
    children: 'Available',
  },
  Busy: {
    variant: 'ConnectivityBusy',
    children: 'Busy',
  },
  Unavailable: {
    variant: 'ConnectivityUnavailable',
    children: 'Unavailable',
  },
  Neutral: {
    variant: 'ConnectivityNeutral',
    children: 'Neutral',
  },
  Offline: {
    variant: 'ConnectivityOffline',
    children: 'Offline',
  },
} as const;
const WorkingConnectivityStatusMenu: React.FC = () => {
  const [availability, setConnectivity] = React.useState(ConnectivityObject.Available);
  const menu = useMenuState();
  const onClick = (status): void => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemStatus variant="ConnectivityAvailable" {...menu} onClick={() => onClick('Available')}>
          Available
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityBusy" {...menu} onClick={() => onClick('Busy')}>
          Busy
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityUnavailable" {...menu} onClick={() => onClick('Unavailable')}>
          Unavailable
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityNeutral" {...menu} onClick={() => onClick('Neutral')}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus variant="ConnectivityOffline" {...menu} onClick={() => onClick('Offline')}>
          Break
        </MenuItemStatus>
      </Menu>
    </>
  );
};

const ProcessObject = {
  Success: {
    variant: 'ProcessSuccess',
    children: 'Success',
  },
  Neutral: {
    variant: 'ProcessNeutral',
    children: 'Neutral',
  },
  Warning: {
    variant: 'ProcessWarning',
    children: 'Warning',
  },
  Error: {
    variant: 'ProcessError',
    children: 'Error',
  },
  InProgress: {
    variant: 'ProcessInProgress',
    children: 'In progress',
  },
  Disabled: {
    variant: 'ProcessDisabled',
    children: 'Disabled',
  },
  Draft: {
    variant: 'ProcessDraft',
    children: 'Draft',
  },
} as const;
const WorkingProcessStatusMenu: React.FC = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useMenuState();
  const onClick = (status): void => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} buttonLabel="Change account" variant={process.variant}>
        {process.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemStatus {...menu} variant="ProcessSuccess" onClick={() => onClick('Success')}>
          Success
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessNeutral" onClick={() => onClick('Neutral')}>
          Neutral
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessWarning" onClick={() => onClick('Warning')}>
          Warning
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessError" onClick={() => onClick('Error')}>
          Error
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessInProgress" onClick={() => onClick('InProgress')}>
          In progress
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDisabled" onClick={() => onClick('Disabled')}>
          Disabled
        </MenuItemStatus>
        <MenuItemStatus {...menu} variant="ProcessDraft" onClick={() => onClick('Draft')}>
          Draft
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

export const Connectivity: StoryFn = () => (
  <Stack orientation="vertical" spacing="space40">
    <ConnectivityStatusMenu variant="ConnectivityAvailable">Available</ConnectivityStatusMenu>
    <ConnectivityStatusMenu variant="ConnectivityBusy">Busy</ConnectivityStatusMenu>
    <ConnectivityStatusMenu variant="ConnectivityUnavailable">Unavailable</ConnectivityStatusMenu>
    <ConnectivityStatusMenu variant="ConnectivityNeutral">Neutral</ConnectivityStatusMenu>
    <ConnectivityStatusMenu variant="ConnectivityOffline">Offline</ConnectivityStatusMenu>
  </Stack>
);

export const WorkingConnectivity: StoryFn = () => <WorkingConnectivityStatusMenu />;
export const WorkingProcess: StoryFn = () => <WorkingProcessStatusMenu />;
