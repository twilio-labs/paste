import type { IconWrapperProps } from "@twilio-paste/icons/esm/helpers/IconWrapper";
import type { GenericIconProps } from "@twilio-paste/icons/esm/types";

export type Orientation = "horizontal" | "vertical";

export type TimelineProps = { children: React.ReactNode; orientation?: "horizontal" | "vertical" };

export type TimelineItemProps = { children: React.ReactNode; timestamp: string; title: string; icon?: any };

export interface TimelineItemIconProps extends IconWrapperProps {
  title?: string;
  decorative: boolean;
  icon?: Omit<GenericIconProps, "decorative">;
}
