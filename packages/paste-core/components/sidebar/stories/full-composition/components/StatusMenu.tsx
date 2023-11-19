import {
  StatusMenu,
  StatusMenuBadge,
  StatusMenuItemChild,
  StatusMenuItemRadio,
  useStatusMenuState,
} from "@twilio-paste/status";
import type { ValueOf } from "@twilio-paste/types";
import * as React from "react";

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
export const StatusMenuExample: React.FC = () => {
  const [availability, setConnectivity] = React.useState<ValueOf<typeof ConnectivityObject>>(
    ConnectivityObject.Available,
  );
  const menu = useStatusMenuState();
  const onClick = (status): void => {
    setConnectivity(ConnectivityObject[status]);
    menu.hide();
  };
  return (
    <>
      <StatusMenuBadge {...menu} i18nButtonLabel="Change account" variant={availability.variant}>
        {availability.children} | 3h 50min
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
