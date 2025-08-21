import { animated, useSpring } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { useTheme } from "@twilio-paste/theme";
import { useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelPushContentWrapperProps } from "./types";

const StyledContentWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box {...props} as="div" position="relative" ref={ref} />
));
StyledContentWrapper.displayName = "StyledContentWrapper";
const AnimatedStyledContentWrapper = animated(StyledContentWrapper);

export const SidePanelPushContentWrapper = React.forwardRef<HTMLDivElement, SidePanelPushContentWrapperProps>(
  ({ element = "SIDE_PANEL_PUSH_CONTENT_WRAPPER", children, ...props }, ref) => {
    const { isOpen } = React.useContext(SidePanelContext);
    const theme = useTheme();
    const { breakpointIndex } = useWindowSize();

    const styles = useSpring({
      marginRight: isOpen ? theme.sizes.size40 : "0rem",
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
        // when using side panels in responsive layouts, we don't want any left margin in small screen, or initial SSR render situations. So basically never apply it in those situations
        style={breakpointIndex === 0 ? undefined : styles}
        marginRight={["space0", theme.sizes.size40]}
        minWidth="size0"
        element={element}
      >
        {children}
      </AnimatedStyledContentWrapper>
    );
  },
);
SidePanelPushContentWrapper.displayName = "SidePanelPushContentWrapper";
