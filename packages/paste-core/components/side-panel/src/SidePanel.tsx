import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

const StyledSidePanel = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    role="dialog"
    display="flex"
    flexDirection="column"
    width={["100%", "100%", "size40"]}
    ref={ref}
    aria-label={props.label}
    borderStyle="solid"
    borderRadius="borderRadius70"
    borderWidth="borderWidth10"
    borderColor="colorBorderWeaker"
    backgroundColor="colorBackgroundBody"
    margin="space40" // make right margin show
    zIndex="zIndex50"
    position="fixed"
    top={0}
    right={0}
    bottom={0}
  />
));

StyledSidePanel.displayName = "StyledSidePanel";
const AnimatedStyledSidePanel = animated(StyledSidePanel);

const config = {
  mass: 0.3,
  tension: 288,
  friction: 20,
};

const getHiddenSpringConfig = (collapsed: boolean, sidePanelWidth: string): any => ({
  opacity: collapsed ? 0 : 1,
  width: sidePanelWidth,
  transform: collapsed ? "translateX(100%)" : "translateX(0%)",
  config,
  left: "unset",
});

const getMobileSpringConfig = (collapsed: boolean): any => ({
  opacity: collapsed ? 0 : 1,
  width: "100%",
  transform: collapsed ? "translateX(100%)" : "translateX(0%)",
  config,
  left: 0,
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
   * Accessible label for the Side Panel
   *
   * @type {string}
   * @memberof SidebarProps
   */
  label: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL"
   * @type {BoxProps['element']}
   * @memberof SidePanelProps
   */
  element?: BoxProps["element"];
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  ({ element = "SIDE_PANEL", collapsed = false, children, ...props }, ref) => {
    // use useTransition instead of useAnimation to un-render the side panel content when collapsed
    
    // handle initial focus

    const { breakpointIndex } = useWindowSize();
    const theme = useTheme()
    const springConfig = breakpointIndex === (0 || 1) ? getMobileSpringConfig(collapsed) : getHiddenSpringConfig(collapsed, theme.sizes.size40);
    const styles = useSpring(springConfig);

    return (
      <AnimatedStyledSidePanel
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        style={styles}
      >
        {children}
      </AnimatedStyledSidePanel>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
