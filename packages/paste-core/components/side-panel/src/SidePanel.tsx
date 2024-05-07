import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

const StyledSidePanel = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    role="dialog"
    display="flex"
    flexDirection="column"
    width={["100%", "size40", "size40"]}
    ref={ref}
    aria-label={props.label}
    borderStyle="solid"
    borderRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
    borderWidth="borderWidth10"
    borderColor="colorBorderWeaker"
    backgroundColor="colorBackgroundBody"
    margin={["space0", "space40", "space40"]}
    marginTop="space40"
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

/*
 * const getHiddenSpringConfig = (collapsed: boolean, sidePanelWidth: string): any => ({
 *   opacity: collapsed ? 0 : 1,
 *   width: sidePanelWidth,
 *   transform: collapsed ? "translateX(100%)" : "translateX(0%)",
 *   config,
 *   left: "unset",
 * });
 */

/*
 * const getMobileSpringConfig = (collapsed: boolean): any => ({
 *   opacity: collapsed ? 0 : 1,
 *   width: "100%",
 *   transform: collapsed ? "translateY(100%)" : "translateY(0%)",
 *   config,
 *   left: 0,
 * });
 */

const transitionStyles = {
  from: { opacity: 0, transform: "translateX(100%)" },
  enter: { opacity: 1, transform: "translateX(0%)" },
  leave: { opacity: 0, transform: "translateX(100%)" },
  config,
};

const mobileTransitionStyles = {
  from: { opacity: 0, transform: "translateY(100%)" },
  enter: { opacity: 1, transform: "translateY(0%)" },
  leave: { opacity: 0, transform: "translateY(100%)" },
  config,
};

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
    // handle initial focus

    const { breakpointIndex } = useWindowSize();

    const transitions =
      breakpointIndex === 0
        ? useTransition(!collapsed, mobileTransitionStyles)
        : useTransition(!collapsed, transitionStyles);

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <AnimatedStyledSidePanel {...safelySpreadBoxProps(props)} ref={ref} element={element} style={styles}>
                {children}
              </AnimatedStyledSidePanel>
            ),
        )}
      </>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
