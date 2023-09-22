import { badgeBaseStyles, badgeVariantStyles } from "@twilio-paste/badge";
import type { BadgeBaseProps, BadgeSpanProps } from "@twilio-paste/badge";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import * as React from "react";

import { StatusObject } from "./constants";
import type { StatusBadgeVariants } from "./types";

export type StatusBadgeProps = Omit<BadgeBaseProps, "variant"> &
  BadgeSpanProps & {
    variant: StatusBadgeVariants;
  };

const badgeStyles = { ...badgeBaseStyles, ...badgeVariantStyles.default };

const StatusBadge = React.forwardRef<HTMLElement, StatusBadgeProps>(
  ({ children, element = "STATUS_BADGE", size, variant, ...props }, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="span"
        element={element}
        variant={variant}
        {...badgeStyles}
        color={StatusObject[variant].color}
        paddingX={size === "small" ? "space20" : "space30"}
        paddingY={size === "small" ? "space10" : "space20"}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        ref={ref}
      >
        {StatusObject[variant].icon}
        {children}
      </Box>
    );
  },
);

StatusBadge.displayName = "StatusBadge";

export { StatusBadge };
