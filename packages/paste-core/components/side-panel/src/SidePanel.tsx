import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

const StyledSidePanel = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    role="dialog"
    display="flex"
    flexDirection="column"
    ref={ref}
    borderStyle="solid"
    borderRadius="borderRadius70"
    borderWidth="borderWidth10"
    borderColor="colorBorderWeaker"
    backgroundColor="colorBackgroundBody"
    marginRight="space40"
    marginY="space40"
    zIndex="zIndex50"
    position="fixed"
    top={0}
    right={0}
    bottom={0}
  />
));
StyledSidePanel.displayName = "StyledSidePanel";
const AnimatedStyledSidePanel = animated(StyledSidePanel);

const getDefaultHiddenSpringConfig = (collapsed: boolean): any => ({
  opacity: collapsed ? 0 : 1,
  width: "size40",
  transform: collapsed ? "translateX(100%)" : "translateX(0%)",
  config: { mass: 0.3, tension: 288, friction: 20 },
});

const getWideHiddenSpringConfig = (collapsed: boolean): any => ({
  opacity: collapsed ? 0 : 1,
  width: "size90",
  transform: collapsed ? "translateX(100%)" : "translateX(0%)",
  config: { mass: 0.3, tension: 200, friction: 15 },
});

export interface SidePanelProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Determines whether the Side Panel is open or collapsed
   *
   * @default false
   * @type {boolean}
   * @memberof SidebarProps
   */
  collapsed?: boolean;
  /**
   * Size of the Side Panel
   *
   * @default false
   * @type {boolean}
   * @memberof SidebarProps
   */
  size?: "default" | "wide";
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL"
   * @type {BoxProps['element']}
   * @memberof SidePanelProps
   */
  element?: BoxProps["element"];
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  ({ element = "SIDE_PANEL", size = "default", collapsed = false, children, ...props }, ref) => {
    // use useTransition instead of useAnimation to un-render the side panel content when collapsed
    const styles =
      size === "wide"
        ? useSpring(getWideHiddenSpringConfig(collapsed))
        : useSpring(getDefaultHiddenSpringConfig(collapsed));

    return (
      <AnimatedStyledSidePanel
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        width={size === "wide" ? ["100%", "size90", "size90"] : ["100%", "size40", "size40"]}
        style={styles}
      >
        {children}
      </AnimatedStyledSidePanel>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
