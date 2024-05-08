import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

const StyledSidePanelWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    role="dialog"
    display="flex"
    ref={ref}
    aria-label={props.label}
    // zIndex="zIndex40"
    // position="fixed"
    position="absolute"
    top={0}
    right={0}
    bottom={0}
    paddingX={["space0", "space40", "space40"]}
    paddingBottom="space40"
    marginBottom={["space0", "space40", "space40"]}
    width={["100%", "size40", "size40"]}
    {...props}
  />
));

StyledSidePanelWrapper.displayName = "StyledSidePanelWrapper";
const AnimatedStyledSidePanelWrapper = animated(StyledSidePanelWrapper);

const config = {
  mass: 0.3,
  tension: 288,
  friction: 20,
};

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
              <AnimatedStyledSidePanelWrapper
                {...safelySpreadBoxProps(props)}
                ref={ref}
                element={element}
                style={styles}
              >
                <Box
                  display="flex"
                  height="100%"
                  // width="size40"
                  flexDirection="column"
                  width={["100%", "size40", "size40"]}
                  borderStyle="solid"
                  borderRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
                  borderWidth="borderWidth10"
                  borderColor="colorBorderWeaker"
                  backgroundColor="colorBackgroundBody"
                  // margin={["space0", "space40", "space40"]}
                  marginY="space40"
                >
                  {children}
                </Box>
              </AnimatedStyledSidePanelWrapper>
            ),
        )}
      </>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
