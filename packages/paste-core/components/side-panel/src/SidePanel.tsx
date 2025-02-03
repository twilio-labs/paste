import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { useMergeRefs, useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelProps } from "./types";

const StyledSidePanelWrapper = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => (
  <Box
    {...props}
    display="flex"
    ref={ref}
    position="sticky"
    zIndex="zIndex30"
    top={props.top}
    right={0}
    paddingRight={["space0", "space40", "space40"]}
    width={["100%", "size40", "size40"]}
    height={props.height}
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

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  ({ element = "SIDE_PANEL", label, children, ...props }, ref) => {
    const { sidePanelId, isOpen } = React.useContext(SidePanelContext);

    const { breakpointIndex } = useWindowSize();

    const transitions =
      breakpointIndex === 0 ? useTransition(isOpen, mobileTransitionStyles) : useTransition(isOpen, transitionStyles);

    const screenSize = window.innerHeight;

    const sidePanelRef = React.useRef<HTMLDivElement>(null);
    const mergedSidePanelRef = useMergeRefs(sidePanelRef, ref) as React.RefObject<HTMLDivElement>;

    const [offsetY, setOffsetY] = React.useState(0);

    // Get the offset of the side panel from the top of the viewport
    React.useEffect(() => {
      const boundingClientRect = sidePanelRef?.current?.getBoundingClientRect();
      setOffsetY(boundingClientRect?.y || 0);
    }, []);

    return (
      <>
        {transitions(
          (styles, item) =>
            item && (
              <Box
                {...safelySpreadBoxProps(props)} // moved this from animated wrapper... might cause something
                position="absolute"
                role="dialog"
                aria-label={label}
                top={0}
                right={0}
                width={["100%", "auto", "auto"]}
                height="100%"
                element={element}
                id={sidePanelId}
              >
                <AnimatedStyledSidePanelWrapper
                  ref={mergedSidePanelRef}
                  element={`ANIMATED_${element}_WRAPPER`}
                  style={styles}
                  height={screenSize - offsetY}
                  top={offsetY}
                >
                  <Box
                    display="flex"
                    maxHeight="100%"
                    flexDirection="column"
                    width={["100%", "size40", "size40"]}
                    borderRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
                    boxShadow="shadowElevation05"
                    backgroundColor="colorBackgroundWeaker"
                    marginTop="space40"
                    marginBottom={["space0", "space40", "space40"]}
                    paddingBottom="space70"
                    overflowY="hidden"
                    element={`INNER_${element}`}
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
