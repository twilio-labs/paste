import type { BadgeVariants } from "@twilio-paste/badge";
import type { TextColorOptions } from "@twilio-paste/style-props";

export type StatusBadgeVariants =
  | "ProcessError"
  | "ProcessWarning"
  | "ProcessSuccess"
  | "ProcessNeutral"
  | "ProcessInProgress"
  | "ProcessDisabled"
  | "ProcessDraft"
  | "ConnectivityAvailable"
  | "ConnectivityBusy"
  | "ConnectivityUnavailable"
  | "ConnectivityOffline"
  | "ConnectivityNeutral";

export type StatusBadges = {
  [key in StatusBadgeVariants]: {
    badgeVariant: (typeof BadgeVariants)[number];
    icon: React.ReactNode;
    color: TextColorOptions;
  };
};
