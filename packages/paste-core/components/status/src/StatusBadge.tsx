import { badgeBaseStyles, badgeVariantStyles } from "@twilio-paste/badge";
import type { BadgeBaseProps, BadgeSizes, BadgeSpanProps } from "@twilio-paste/badge";
import { Box, BoxStyleProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { Space } from "@twilio-paste/style-props";
import * as React from "react";

import { StatusObject } from "./constants";
import type { StatusBadgeVariants } from "./types";

export type StatusBadgeProps = Omit<BadgeBaseProps, "variant" | "size"> &
  BadgeSpanProps & {
    /**
     * Overrides the default element name to apply unique styles with the Customization Provider
     *
     * @default "STATUS_BADGE"
     * @type {BadgeBaseProps["element"]}
     */
    element?: BadgeBaseProps["element"];
    /**
     * Sets the display style of the Status Badge
     *
     * @type {StatusBadgeVariants}
     */
    variant: StatusBadgeVariants;
    /**
     * Sets the size of the Status Badge
     *
     * @default "default"
     * @type {"default" | "small" | "borderless"}
     */
    size?: BadgeSizes | "borderless";
  };

const paddingX = (size: StatusBadgeProps["size"]): Space => {
  switch (size) {
    case "small":
      return "space20";
    case "borderless":
      return "space0";
    default:
      return "space30";
  }
};
const paddingY = (size: StatusBadgeProps["size"]): Space => {
  switch (size) {
    case "small":
      return "space10";
    case "borderless":
      return "space0";
    default:
      return "space20";
  }
};

const badgeStyles = { ...badgeBaseStyles, ...badgeVariantStyles.default };

const badgeBorderlessStyles: BoxStyleProps = {
  boxShadow: "none",
  backgroundColor: "transparent",
};

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
        paddingX={paddingX(size)}
        paddingY={paddingY(size)}
        display="flex"
        flexDirection="row"
        columnGap="space20"
        alignItems="center"
        {...(size === "borderless" && badgeBorderlessStyles)}
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
