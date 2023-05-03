import * as React from 'react';
import type {Meta, StoryFn} from '@storybook/react';
import {Heading} from '@twilio-paste/heading';
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
    href: {
      control: false,
    },
    as: {
      control: false,
    },
    element: {
      control: false,
    },
  },
} as Meta<typeof StatusBadge>;

const Template: StoryFn<typeof StatusBadge> = ({variant}) => (
  <>
    <Heading as="h2" variant="heading40">
      Span
    </Heading>
    <Stack orientation="horizontal" spacing="space40">
      <StatusBadge as="span" variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="span" variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="span" variant={variant}>
        {variant}
      </StatusBadge>
    </Stack>
    <Heading as="h2" variant="heading40">
      Anchor
    </Heading>
    <Stack orientation="horizontal" spacing="space40">
      <StatusBadge as="a" href="#" variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="a" href="#" variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="a" href="#" variant={variant}>
        {variant}
      </StatusBadge>
    </Stack>
    <Heading as="h2" variant="heading40">
      Button
    </Heading>
    <Stack orientation="horizontal" spacing="space40">
      <StatusBadge as="button" onClick={() => {}} variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="button" onClick={() => {}} variant={variant}>
        {variant}
      </StatusBadge>
      <StatusBadge as="button" onClick={() => {}} variant={variant}>
        {variant}
      </StatusBadge>
    </Stack>
  </>
);

export const ProcessSuccessStatusBade = Template.bind({});
ProcessSuccessStatusBade.args = {
  variant: 'ProcessSuccess',
};
export const ProcessErrorStatusBade = Template.bind({});
ProcessErrorStatusBade.args = {
  variant: 'ProcessError',
};
export const ProcessWarningStatusBade = Template.bind({});
ProcessWarningStatusBade.args = {
  variant: 'ProcessWarning',
};
export const ProcessNeutralStatusBade = Template.bind({});
ProcessNeutralStatusBade.args = {
  variant: 'ProcessNeutral',
};
export const ProcessInProgressStatusBade = Template.bind({});
ProcessInProgressStatusBade.args = {
  variant: 'ProcessInProgress',
};
export const ProcessDisabledStatusBade = Template.bind({});
ProcessDisabledStatusBade.args = {
  variant: 'ProcessDisabled',
};
export const ProcessDraftStatusBade = Template.bind({});
ProcessDraftStatusBade.args = {
  variant: 'ProcessDraft',
};
export const AvailabilityAvailableStatusBade = Template.bind({});
AvailabilityAvailableStatusBade.args = {
  variant: 'AvailabilityAvailable',
};
export const AvailabilityBusyStatusBade = Template.bind({});
AvailabilityBusyStatusBade.args = {
  variant: 'AvailabilityBusy',
};
export const AvailabilityUnavailableStatusBade = Template.bind({});
AvailabilityUnavailableStatusBade.args = {
  variant: 'AvailabilityUnavailable',
};
export const AvailabilityNeutralStatusBade = Template.bind({});
AvailabilityNeutralStatusBade.args = {
  variant: 'AvailabilityNeutral',
};
export const AvailabilityOfflineStatusBade = Template.bind({});
AvailabilityOfflineStatusBade.args = {
  variant: 'AvailabilityOffline',
};
