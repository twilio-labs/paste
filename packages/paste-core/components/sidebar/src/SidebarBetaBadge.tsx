import { badgeBaseStyles, useResizeChildIcons } from "@twilio-paste/badge";
import type { BadgeProps } from "@twilio-paste/badge";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import * as React from "react";

const SidebarBetaBadgeSpanStyles: BoxProps = {
  ...badgeBaseStyles,
  paddingX: "space20",
  paddingY: "space10",
  boxShadow: "shadowBorderInverseNewWeaker",
  backgroundColor: "colorBackgroundInverseStrong",
  color: "colorTextInverseNew",
};
const SidebarBetaBadgeButtonStyles: BoxProps = {
  ...SidebarBetaBadgeSpanStyles,
  boxShadow: "shadowBorderBottomInverseNewWeaker",
  // The following styles are copied from getBadgeButtonStyles() in the Badge package
  cursor: "pointer",
  _hover: { top: "1px", boxShadow: "none" },
  _focus: { top: "1px", boxShadow: "shadowFocusInverse" }, // shadowFocus in Badge
};

export type SidebarBetaBadgeProps = Omit<BadgeProps, "as" | "variant" | "size"> & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDEBAR_BETA_BADGE"
   * @type {BadgeProps["element"]}
   */
  element?: BadgeProps["element"];
  /**
   * The HTML element ro render the Badge as.
   *
   * @default "span"
   * @type {("span" | "button")}
   */
  as: "span" | "button";
};

export const SidebarBetaBadge = React.forwardRef<HTMLElement, SidebarBetaBadgeProps>(
  ({ children, as, element = "SIDEBAR_BETA_BADGE", onClick, ...props }, ref) => {
    const resizedChildren = useResizeChildIcons(children);
    const styles = as === "button" ? SidebarBetaBadgeButtonStyles : SidebarBetaBadgeSpanStyles;
    // We don't want the provided onClick to function if as = span
    const handleOnClick = as === "button" ? onClick : undefined;

    return (
      <Box {...safelySpreadBoxProps(props)} {...styles} as={as} ref={ref} element={element} onClick={handleOnClick}>
        {resizedChildren}
      </Box>
    );
  },
);

SidebarBetaBadge.displayName = "SidebarBetaBadge";
