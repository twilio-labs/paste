import * as React from 'react';
import type {StoryFn} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';
import type {ValueOf} from '@twilio-paste/types';

import {Menu, MenuBadgeStatus, MenuItem, MenuItemRadio, MenuItemStatus, MenuSeparator, useMenuState} from '../src';
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
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={variant}>
        {children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessSuccess">Success</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessNeutral">Neutral</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessWarning">Warning</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessError">Error</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessInProgress">In progress</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessDisabled">Disabled</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick} variant="default">
          <MenuItemStatus variant="ProcessDraft">Draft</MenuItemStatus>
        </MenuItem>
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
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={variant}>
        {children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={onClick}>
          <MenuItemStatus variant="ConnectivityAvailable">Available</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick}>
          <MenuItemStatus variant="ConnectivityBusy">Busy</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick}>
          <MenuItemStatus variant="ConnectivityUnavailable">Unavailable</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick}>
          <MenuItemStatus variant="ConnectivityNeutral">Neutral</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={onClick}>
          <MenuItemStatus variant="ConnectivityOffline">Break</MenuItemStatus>
        </MenuItem>
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
  const [availability, setConnectivity] = React.useState<ValueOf<typeof ConnectivityObject>>(
    ConnectivityObject.Available
  );
  const menu = useMenuState({visible: true});
  const onClick = (status): void => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Available'}
          value="available"
          {...menu}
          onClick={() => onClick('Available')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityAvailable">{ConnectivityObject.Available.children}</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Busy'}
          value="busy"
          {...menu}
          onClick={() => onClick('Busy')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityBusy">{ConnectivityObject.Busy.children}</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Unavailable'}
          value="unavailable"
          {...menu}
          onClick={() => onClick('Unavailable')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityUnavailable">{ConnectivityObject.Unavailable.children}</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Neutral'}
          value="neutral"
          {...menu}
          onClick={() => onClick('Neutral')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityNeutral">{ConnectivityObject.Neutral.children}</MenuItemStatus>
        </MenuItemRadio>
        <MenuItemRadio
          name="availability"
          checked={availability.children === 'Offline'}
          value="offline"
          {...menu}
          onClick={() => onClick('Offline')}
          variant="default"
        >
          <MenuItemStatus variant="ConnectivityOffline">{ConnectivityObject.Offline.children}</MenuItemStatus>
        </MenuItemRadio>
      </Menu>
    </>
  );
};

const ProcessObject = {
  Success: {
    variant: 'ProcessSuccess',
    children: 'Complete',
  },
  Neutral: {
    variant: 'ProcessNeutral',
    children: 'In review',
  },
  Warning: {
    variant: 'ProcessWarning',
    children: 'Needs attention',
  },
  Error: {
    variant: 'ProcessError',
    children: 'Rejected',
  },
  InProgress: {
    variant: 'ProcessInProgress',
    children: 'In progress',
  },
  Disabled: {
    variant: 'ProcessDisabled',
    children: 'Paused',
  },
  Draft: {
    variant: 'ProcessDraft',
    children: 'Draft',
  },
} as const;
const WorkingProcessStatusMenu: React.FC = () => {
  const [process, setProcess] = React.useState(ProcessObject.Success);
  const menu = useMenuState({visible: true});
  const onClick = (status): void => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <MenuBadgeStatus {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </MenuBadgeStatus>
      <Menu {...menu} aria-label="Preferences">
        <MenuItem {...menu} onClick={() => onClick('Success')} variant="default">
          <MenuItemStatus variant="ProcessSuccess">{ProcessObject.Success.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Neutral')} variant="default">
          <MenuItemStatus variant="ProcessNeutral">{ProcessObject.Neutral.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Warning')} variant="default">
          <MenuItemStatus variant="ProcessWarning">{ProcessObject.Warning.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Error')} variant="default">
          <MenuItemStatus variant="ProcessError">{ProcessObject.Error.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('InProgress')} variant="default">
          <MenuItemStatus variant="ProcessInProgress">{ProcessObject.InProgress.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Disabled')} variant="default">
          <MenuItemStatus variant="ProcessDisabled">{ProcessObject.Disabled.children}</MenuItemStatus>
        </MenuItem>
        <MenuItem {...menu} onClick={() => onClick('Draft')} variant="default">
          <MenuItemStatus variant="ProcessDraft">{ProcessObject.Draft.children}</MenuItemStatus>
        </MenuItem>
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
