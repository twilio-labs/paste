import * as React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import {Stack} from '@twilio-paste/stack';

import {StatusBadge} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Badge/StatusBadge',
  component: StatusBadge,
  argTypes: {
    variant: {
      control: false,
    },
    element: {
      control: false,
    },
  },
} as Meta<typeof StatusBadge>;

const Template: StoryFn<typeof StatusBadge> = ({variant}) => (
  <Stack orientation="horizontal" spacing="space40">
    <StatusBadge as="span" variant={variant}>
      {variant}
    </StatusBadge>
  </Stack>
);

export const ProcessSuccessStatusBadge = Template.bind({});
ProcessSuccessStatusBadge.args = {
  variant: 'ProcessSuccess',
};
export const ProcessErrorStatusBadge = Template.bind({});
ProcessErrorStatusBadge.args = {
  variant: 'ProcessError',
};
export const ProcessWarningStatusBadge = Template.bind({});
ProcessWarningStatusBadge.args = {
  variant: 'ProcessWarning',
};
export const ProcessNeutralStatusBadge = Template.bind({});
ProcessNeutralStatusBadge.args = {
  variant: 'ProcessNeutral',
};
export const ProcessInProgressStatusBadge = Template.bind({});
ProcessInProgressStatusBadge.args = {
  variant: 'ProcessInProgress',
};
export const ProcessDisabledStatusBadge = Template.bind({});
ProcessDisabledStatusBadge.args = {
  variant: 'ProcessDisabled',
};
export const ProcessDraftStatusBadge = Template.bind({});
ProcessDraftStatusBadge.args = {
  variant: 'ProcessDraft',
};
export const ConnectivityAvailableStatusBadge = Template.bind({});
ConnectivityAvailableStatusBadge.args = {
  variant: 'ConnectivityAvailable',
};
export const ConnectivityBusyStatusBadge = Template.bind({});
ConnectivityBusyStatusBadge.args = {
  variant: 'ConnectivityBusy',
};
export const ConnectivityUnavailableStatusBadge = Template.bind({});
ConnectivityUnavailableStatusBadge.args = {
  variant: 'ConnectivityUnavailable',
};
export const ConnectivityNeutralStatusBadge = Template.bind({});
ConnectivityNeutralStatusBadge.args = {
  variant: 'ConnectivityNeutral',
};
export const ConnectivityOfflineStatusBadge = Template.bind({});
ConnectivityOfflineStatusBadge.args = {
  variant: 'ConnectivityOffline',
};
