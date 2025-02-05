import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, getCustomElementStyles, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { ModalDialogPrimitiveContent, ModalDialogPrimitiveOverlay } from "@twilio-paste/modal-dialog-primitive";
import { css, styled } from "@twilio-paste/styling-library";
import { pasteBaseStyles, useTheme } from "@twilio-paste/theme";
import { useMergeRefs, useWindowSize } from "@twilio-paste/utils";
import * as React from "react";

import { SidePanelContext } from "./SidePanelContext";
import type { SidePanelProps } from "./types";

const SidePanelMobileOverlay = animated(
  // @ts-expect-error the styled div color prop from emotion is clashing with our color style prop in BoxProps
  styled(ModalDialogPrimitiveOverlay)(
    css({
      backgroundColor: "colorBackgroundOverlay",
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: "100%",
      zIndex: "zIndex80",
    }),
    /*
     * import Paste Theme Based Styles due to portal positioning.
     * reach portal is a sibling to the main app, so you are now
     * no longer a child of the theme provider. We need to re-set
     * some of the base styles that we rely on inheriting from
     * such as font-family and line-height so that compositions
     * of paste components in the side panel are styled correctly.
     */
    pasteBaseStyles,
    getCustomElementStyles,
  ),
);

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
    boxSizing="content-box"
  />
));

StyledSidePanelWrapper.displayName = "StyledSidePanelWrapper";
const AnimatedStyledSidePanelWrapper = animated(StyledSidePanelWrapper);

const config = {
  mass: 0.3,
  tension: 288,
  friction: 20,
};

interface SidePanelContentsProps extends SidePanelProps {
  sidePanelId: string;
  styles: any;
}

const SidePanelContents = React.forwardRef<HTMLDivElement, SidePanelContentsProps>(
  ({ label, element, sidePanelId, styles, children, ...props }, ref) => {
    // Get the offset of the side panel from the top of the viewport
    const sidePanelRef = React.useRef<HTMLDivElement>(null);
    const mergedSidePanelRef = useMergeRefs(sidePanelRef, ref) as React.RefObject<HTMLDivElement>;
    const screenSize = window.innerHeight;
    const [offsetY, setOffsetY] = React.useState(0);
    React.useEffect(() => {
      const boundingClientRect = sidePanelRef?.current?.getBoundingClientRect();
      setOffsetY(boundingClientRect?.y || 0);
    }, []);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        position="absolute"
        role="dialog"
        as={ModalDialogPrimitiveContent as any}
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
          height={["100%", screenSize - offsetY, screenSize - offsetY]}
          top={[0, offsetY, offsetY]}
          position="relative"
          overflow="hidden"
        >
          <Box
            display="flex"
            flexDirection="column"
            width={["100%", "388px", "388px"]} // 400px - 12px
            position="absolute"
            top={0}
            left={[0, 12, 12]}
            bottom={0}
            borderStyle="solid"
            borderBottomLeftRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
            borderBottomRightRadius={["borderRadius0", "borderRadius70", "borderRadius70"]}
            borderTopRightRadius={["borderRadius60", "borderRadius70", "borderRadius70"]}
            borderTopLeftRadius={["borderRadius60", "borderRadius70", "borderRadius70"]}
            borderWidth="borderWidth10"
            borderColor="colorBorderWeaker"
            backgroundColor="colorBackgroundBody"
            marginTop={["space100", "space40", "space40"]}
            marginBottom={["space0", "space40", "space40"]}
            paddingBottom="space70"
            element={`INNER_${element}`}
          >
            {children}
          </Box>
        </AnimatedStyledSidePanelWrapper>
      </Box>
    );
  },
);
SidePanelContents.displayName = "SidePanelContents";

const SidePanel = React.forwardRef<HTMLDivElement, SidePanelProps>(
  ({ element = "SIDE_PANEL", label, children, ...props }, ref) => {
    const theme = useTheme();
    const { sidePanelId, isOpen } = React.useContext(SidePanelContext);
    // Determine whether this is the initial render in order to block enter animations
    const [isFirstRender, setIsFirstRender] = React.useState(true);
    React.useEffect(() => {
      if (isFirstRender) {
        setIsFirstRender(false);
      }
    }, [isFirstRender]);

    // Define transition styles for both breakpoints
    const transitionStyles = {
      from: isFirstRender ? undefined : { opacity: 0, width: "0px" },
      enter: { opacity: 1, width: "400px" },
      leave: { opacity: 0, width: "0px" },
      config,
    };
    const mobileTransitionStyles = {
      from: isFirstRender ? undefined : { opacity: 0, transform: "translateY(100%)" },
      enter: { opacity: 1, transform: "translateY(0%)" },
      leave: { opacity: 0, transform: "translateY(100%)" },
      config,
    };

    // Set mobile or desktop transitions based on breakpointIndex
    const { breakpointIndex } = useWindowSize();
    const desktopTransitions = useTransition(isOpen, transitionStyles);
    const mobileTransitions = useTransition(isOpen, mobileTransitionStyles);
    const transitions = React.useMemo(() => {
      if (breakpointIndex === 0) return mobileTransitions;
      return desktopTransitions;
    }, [breakpointIndex, desktopTransitions, mobileTransitions]);

    // console.log("breakpointIndex", breakpointIndex);

    return (
      <>
        {transitions(
          (styles, item) =>
            item &&
            (breakpointIndex === 0 ? (
              <SidePanelMobileOverlay
                theme={theme}
                data-paste-element={`${element}_OVERLAY`}
                style={{ opacity: styles.opacity }}
              >
                <SidePanelContents
                  {...props}
                  element={element}
                  sidePanelId={sidePanelId}
                  styles={styles}
                  label={label}
                  ref={ref}
                >
                  {children}
                </SidePanelContents>
              </SidePanelMobileOverlay>
            ) : (
              <SidePanelContents
                {...props}
                element={element}
                sidePanelId={sidePanelId}
                styles={styles}
                label={label}
                ref={ref}
              >
                {children}
              </SidePanelContents>
            )),
        )}
      </>
    );
  },
);

SidePanel.displayName = "SidePanel";

export { SidePanel };
