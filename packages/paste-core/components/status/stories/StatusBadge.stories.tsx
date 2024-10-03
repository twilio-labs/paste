import type { Meta, StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import * as React from "react";

import { StatusBadge } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Status/StatusBadge",
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

const Template: StoryFn<typeof StatusBadge> = ({ variant }) => (
  <Box display="flex" flexDirection="column" rowGap="space60">
    <StatusBadge as="span" variant={variant} size="default">
      {variant}
    </StatusBadge>
    <StatusBadge as="span" variant={variant} size="small">
      {variant}
    </StatusBadge>
    <StatusBadge as="span" variant={variant} size="borderless">
      {variant}
    </StatusBadge>
  </Box>
);

export const ProcessSuccessStatusBadge = Template.bind({});
ProcessSuccessStatusBadge.args = {
  variant: "ProcessSuccess",
};
export const ProcessErrorStatusBadge = Template.bind({});
ProcessErrorStatusBadge.args = {
  variant: "ProcessError",
};
export const ProcessWarningStatusBadge = Template.bind({});
ProcessWarningStatusBadge.args = {
  variant: "ProcessWarning",
};
export const ProcessNeutralStatusBadge = Template.bind({});
ProcessNeutralStatusBadge.args = {
  variant: "ProcessNeutral",
};
export const ProcessInProgressStatusBadge = Template.bind({});
ProcessInProgressStatusBadge.args = {
  variant: "ProcessInProgress",
};
export const ProcessDisabledStatusBadge = Template.bind({});
ProcessDisabledStatusBadge.args = {
  variant: "ProcessDisabled",
};
export const ProcessDraftStatusBadge = Template.bind({});
ProcessDraftStatusBadge.args = {
  variant: "ProcessDraft",
};
export const ConnectivityAvailableStatusBadge = Template.bind({});
ConnectivityAvailableStatusBadge.args = {
  variant: "ConnectivityAvailable",
};
export const ConnectivityBusyStatusBadge = Template.bind({});
ConnectivityBusyStatusBadge.args = {
  variant: "ConnectivityBusy",
};
export const ConnectivityUnavailableStatusBadge = Template.bind({});
ConnectivityUnavailableStatusBadge.args = {
  variant: "ConnectivityUnavailable",
};
export const ConnectivityNeutralStatusBadge = Template.bind({});
ConnectivityNeutralStatusBadge.args = {
  variant: "ConnectivityNeutral",
};
export const ConnectivityOfflineStatusBadge = Template.bind({});
ConnectivityOfflineStatusBadge.args = {
  variant: "ConnectivityOffline",
};
