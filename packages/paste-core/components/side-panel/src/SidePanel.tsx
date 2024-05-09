import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HeightOptions } from "@twilio-paste/style-props";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

const StyledSidePanelWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    role="dialog"
    display="flex"
    ref={ref}
    aria-label={props.label}
    position="sticky"
    zIndex="zIndex30"
    top={props.top}
    right={0}
    paddingRight={["space0", "space40", "space40"]}
    width={["100%", "size40", "size40"]}
    height={((props.height as number) - (props.top as number)) as HeightOptions}
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
   * Sets the top position of the Side Panel for full height containers. Defaults to space200 for use on pages with a Topbar.
   *
   * @default "space200"
   * @type {('space0' | 'space200')}
   * @memberof SidebarProps
   */
  top?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   * @default "SIDE_PANEL"
   * @type {BoxProps['element']}
   * @memberof SidePanelProps
   */
  element?: BoxProps["element"];
}

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  ({ element = "SIDE_PANEL", collapsed = false, top = "space200", children, ...props }, ref) => {
    const { breakpointIndex } = useWindowSize();

    const transitions =
      breakpointIndex === 0
        ? useTransition(!collapsed, mobileTransitionStyles)
        : useTransition(!collapsed, transitionStyles);

    const screenSize = window.innerHeight;

    const topInPixels = top === "space200" ? 76 : 0;

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <Box
                position="absolute"
                top={0}
                right={0}
                width={["100%", "unset", "unset"]}
                height="100%"
                element="SIDE_PANEL_OUTERMOST_WRAPPER"
              >
                <AnimatedStyledSidePanelWrapper
                  {...safelySpreadBoxProps(props)}
                  ref={ref}
                  element={element}
                  style={styles}
                  height={screenSize}
                  top={topInPixels}
                >
                  <Box
                    display="flex"
                    maxHeight="100%"
                    flexDirection="column"
                    width={["100%", "size40", "size40"]}
                    borderStyle="solid"
                    borderRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
                    borderWidth="borderWidth10"
                    borderColor="colorBorderWeaker"
                    backgroundColor="colorBackgroundBody"
                    marginTop="space40"
                    marginBottom={["space0", "space40", "space40"]}
                    paddingBottom="space70"
                    element="SIDE_PANEL_INSIDE"
                  >
                    {children}
                  </Box>
                </AnimatedStyledSidePanelWrapper>
              </Box>
            ),
        )}
      </>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
