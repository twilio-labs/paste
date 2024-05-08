import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

const StyledContentWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box {...props} as="div" position="relative" ref={ref} />
));
StyledContentWrapper.displayName = "StyledContentWrapper";
const AnimatedStyledContentWrapper = animated(StyledContentWrapper);

export interface SidePanelPushContentWrapperProps extends HTMLPasteProps<"div"> {
  children: React.ReactNode;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_PANEL_PUSH_CONTENT_WRAPPER"
   * @type {BoxProps["element"]}
   * @memberof SidePanelPushContentWrapperProps
   */
  element?: BoxProps["element"];
  /**
   * Determines whether the Side Panel is open or collapsed
   *
   * @default false
   * @type {boolean}
   * @memberof SidePanelPushContentWrapperProps
   */
  collapsed?: boolean;
}

export const SidePanelPushContentWrapper = React.forwardRef<HTMLDivElement, SidePanelPushContentWrapperProps>(
  ({ collapsed = false, element = "SIDE_PANEL_PUSH_CONTENT_WRAPPER", children, ...props }, ref) => {
    const theme = useTheme();
    const { breakpointIndex } = useWindowSize();

    const styles = useSpring({
      marginRight: !collapsed ? theme.sizes.size40 : "0rem",
      config: {
        mass: 0.3,
        tension: 288,
        friction: 20,
      },
    });

    return (
      <AnimatedStyledContentWrapper
        {...safelySpreadBoxProps(props)}
        ref={ref}
        element={element}
        // when using side panels in responsive layouts, we don't want any left margin in small screen, or initial SSR render situations. So basically never apply it in those situations
        style={breakpointIndex === (undefined || 0) ? undefined : styles}
        marginRight={["space0", theme.sizes.size40]}
        minWidth="size0"
      >
        {children}
      </AnimatedStyledContentWrapper>
    );
  },
);
SidePanelPushContentWrapper.displayName = "SidePanelPushContentWrapper";
