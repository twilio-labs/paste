import type { StoryFn } from "@storybook/react";
import { Stack } from "@twilio-paste/stack";
import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";

import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItem,
  StatusMenuItemChild,
  StatusMenuItemRadio,
  useStatusMenuState,
} from "../src";
import type { StatusMenuBadgeProps } from "../src";

const ProcessStatusMenu: React.FC<React.PropsWithChildren<{ variant: StatusMenuBadgeProps["variant"] }>> = ({
  variant,
  children,
}) => {
  const menu = useStatusMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={variant}>
        {children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessSuccess">Success</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessNeutral">Neutral</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessWarning">Warning</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessError">Error</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessInProgress">In-progress</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessDisabled">Disabled</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick} variant="default">
          <StatusMenuItemChild variant="ProcessDraft">Draft</StatusMenuItemChild>
        </StatusMenuItem>
      </StatusMenu>
    </>
  );
};
const ConnectivityStatusMenu: React.FC<React.PropsWithChildren<{ variant: StatusMenuBadgeProps["variant"] }>> = ({
  variant,
  children,
}) => {
  const menu = useStatusMenuState();
  const onClick = (): void => {
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={variant}>
        {children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItem {...menu} onClick={onClick}>
          <StatusMenuItemChild variant="ConnectivityAvailable">Available</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick}>
          <StatusMenuItemChild variant="ConnectivityBusy">Busy</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick}>
          <StatusMenuItemChild variant="ConnectivityUnavailable">Unavailable</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick}>
          <StatusMenuItemChild variant="ConnectivityNeutral">Neutral</StatusMenuItemChild>
        </StatusMenuItem>
        <StatusMenuItem {...menu} onClick={onClick}>
          <StatusMenuItemChild variant="ConnectivityOffline">Break</StatusMenuItemChild>
        </StatusMenuItem>
      </StatusMenu>
    </>
  );
};

const ConnectivityObject = {
  Available: {
    variant: "ConnectivityAvailable",
    children: "Available",
  },
  Busy: {
    variant: "ConnectivityBusy",
    children: "Busy",
  },
  Unavailable: {
    variant: "ConnectivityUnavailable",
    children: "Unavailable",
  },
  Neutral: {
    variant: "ConnectivityNeutral",
    children: "Neutral",
  },
  Offline: {
    variant: "ConnectivityOffline",
    children: "Offline",
  },
} as const;
const WorkingConnectivityStatusMenu: React.FC = () => {
  const [availability, setConnectivity] = React.useState<ValueOf<typeof ConnectivityObject>>(
    ConnectivityObject.Available,
  );
  const menu = useStatusMenuState({ visible: true });
  const onClick = (status): void => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === "Available"}
          value="available"
          {...menu}
          onClick={() => onClick("Available")}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityAvailable">
            {ConnectivityObject.Available.children}
          </StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === "Busy"}
          value="busy"
          {...menu}
          onClick={() => onClick("Busy")}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityBusy">{ConnectivityObject.Busy.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === "Unavailable"}
          value="unavailable"
          {...menu}
          onClick={() => onClick("Unavailable")}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityUnavailable">
            {ConnectivityObject.Unavailable.children}
          </StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === "Neutral"}
          value="neutral"
          {...menu}
          onClick={() => onClick("Neutral")}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityNeutral">{ConnectivityObject.Neutral.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          name="availability"
          checked={availability.children === "Offline"}
          value="offline"
          {...menu}
          onClick={() => onClick("Offline")}
          variant="default"
        >
          <StatusMenuItemChild variant="ConnectivityOffline">{ConnectivityObject.Offline.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
};

const ProcessObject = {
  Success: {
    variant: "ProcessSuccess",
    children: "Complete",
  },
  Neutral: {
    variant: "ProcessNeutral",
    children: "In review",
  },
  Warning: {
    variant: "ProcessWarning",
    children: "Needs attention",
  },
  Error: {
    variant: "ProcessError",
    children: "Rejected",
  },
  InProgress: {
    variant: "ProcessInProgress",
    children: "In-progress",
  },
  Disabled: {
    variant: "ProcessDisabled",
    children: "Paused",
  },
  Draft: {
    variant: "ProcessDraft",
    children: "Draft",
  },
} as const;
const WorkingProcessStatusMenu: React.FC = () => {
  const [process, setProcess] = React.useState<any>(ProcessObject.Success);
  const menu = useStatusMenuState({ visible: true });
  const onClick = (status): void => {
    setProcess(ProcessObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={process.variant}>
        {process.children}
      </StatusMenuBadge>
      <StatusMenu {...menu} aria-label="Preferences">
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="success"
          checked={process.children === ProcessObject.Success.children}
          onClick={() => onClick("Success")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessSuccess">{ProcessObject.Success.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="neutral"
          checked={process.children === ProcessObject.Neutral.children}
          onClick={() => onClick("Neutral")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessNeutral">{ProcessObject.Neutral.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="warning"
          checked={process.children === ProcessObject.Warning.children}
          onClick={() => onClick("Warning")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessWarning">{ProcessObject.Warning.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="error"
          checked={process.children === ProcessObject.Error.children}
          onClick={() => onClick("Error")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessError">{ProcessObject.Error.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="InProgress"
          checked={process.children === ProcessObject.InProgress.children}
          onClick={() => onClick("InProgress")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessInProgress">{ProcessObject.InProgress.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="disabled"
          checked={process.children === ProcessObject.Disabled.children}
          onClick={() => onClick("Disabled")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDisabled">{ProcessObject.Disabled.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
        <StatusMenuItemRadio
          {...menu}
          name="process"
          value="draft"
          checked={process.children === ProcessObject.Draft.children}
          onClick={() => onClick("Draft")}
          variant="default"
        >
          <StatusMenuItemChild variant="ProcessDraft">{ProcessObject.Draft.children}</StatusMenuItemChild>
        </StatusMenuItemRadio>
      </StatusMenu>
    </>
  );
};

export default {
  title: "Components/Status/MenuStatus",
  component: StatusMenu,
  subcomponents: { StatusMenuBadge, StatusMenuItemChild },
  parameters: {
    // Sets a delay for the component's stories
    chromatic: { delay: 3000, diffThreshold: 0.2 },
  },
};
export const Process: StoryFn = () => (
  <Stack orientation="vertical" spacing="space40">
    <ProcessStatusMenu variant="ProcessError">Error</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessWarning">Warning</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessSuccess">Success</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessNeutral">Neutral</ProcessStatusMenu>
    <ProcessStatusMenu variant="ProcessInProgress">In-progress</ProcessStatusMenu>
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
