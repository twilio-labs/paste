import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";

export type Orientation = "horizontal" | "vertical";

export type TimelineProps = { children: React.ReactNode; orientation?: "horizontal" | "vertical" };

export type TimelineItemProps = {
  children: React.ReactNode;
  title: string;
  icon?: any;
  timestamp?: string;
  collapsible?: boolean;
  collapsibleHeading?: string;
};

export interface TimelineItemIconProps extends IconWrapperProps {
  title?: string;
  icon?: Omit<GenericIconProps, "decorative">;
}
