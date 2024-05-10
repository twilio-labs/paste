import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useMergeRefs, useWindowSize } from "@twilio-paste/utils";
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

export interface SidePanelProps extends HTMLPasteProps<"div"> {
  children?: React.ReactNode;
  /**
   * Determines whether the Side Panel is open or collapsed
   *
   * @type {boolean}
   * @memberof SidebarProps
   */
  collapsed: boolean;
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
  ({ element = "SIDE_PANEL", collapsed, children, ...props }, ref) => {
    const { breakpointIndex } = useWindowSize();

    const transitions =
      breakpointIndex === 0
        ? useTransition(!collapsed, mobileTransitionStyles)
        : useTransition(!collapsed, transitionStyles);

    const screenSize = window.innerHeight;

    const sidePanelRef = React.useRef<HTMLDivElement>(null);
    const mergedSidePanelRef = useMergeRefs(sidePanelRef, ref) as React.RefObject<HTMLDivElement>;

    const [offsetY, setOffsetY] = React.useState(0);

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
                position="absolute"
                top={0}
                right={0}
                width={["100%", "unset", "unset"]}
                height="100%"
                element={element}
              >
                <AnimatedStyledSidePanelWrapper
                  {...safelySpreadBoxProps(props)}
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
                    borderStyle="solid"
                    borderRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
                    borderWidth="borderWidth10"
                    borderColor="colorBorderWeaker"
                    backgroundColor="colorBackgroundBody"
                    marginTop="space40"
                    marginBottom={["space0", "space40", "space40"]}
                    paddingBottom="space70"
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
