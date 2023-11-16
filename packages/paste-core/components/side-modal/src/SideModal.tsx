import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, type BoxProps, safelySpreadBoxProps } from "@twilio-paste/box";
import { NonModalDialogPrimitive } from "@twilio-paste/non-modal-dialog-primitive";
import { StyledBase } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { SideModalContext } from "./SideModalContext";

export const AnimatedBox = animated(Box);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (): any => ({
  from: { opacity: 0, transform: `translateX(100%)` },
  enter: { opacity: 1, transform: `translateX(0%)` },
  leave: { opacity: 0, transform: `translateX(100%)` },
  // https://www.react-spring.dev/docs/advanced/config
  config: {
    mass: 0.5,
    tension: 220,
    friction: 20,
  },
});

export interface SideModalProps extends HTMLPasteProps<"div"> {
  /**
   * Child components to render into the SideModal
   *
   * @type {React.ReactNode}
   * @memberof SideModalProps
   */
  children: React.ReactNode;
  /**
   * Title of the dialog for screen readers.
   *
   * @type {string}
   * @memberof SideModalProps
   */
  "aria-label": string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "SIDE_MODAL"
   * @type {BoxProps["element"]}
   * @memberof SideModalProps
   */
  element?: BoxProps["element"];
  /**
   * Set to false to disable closing the SideModal when the "Escape" key is pressed.
   *
   * @default true
   * @type {boolean}
   * @memberof SideModalProps
   */
  hideOnEsc?: boolean;
}

export const SideModal = React.forwardRef<HTMLDivElement, SideModalProps>(
  ({ children, element = "SIDE_MODAL", hideOnEsc = true, ...props }, ref) => {
    const dialog = React.useContext(SideModalContext);
    const transitions = useTransition(dialog.visible, getAnimationStates());

    /*
     * The portal from Reakit closes/cleans up before the animation can handle the unmount.
     * To enable an unmount animation we need to hardcode `visible={true}` on NonModalDialogPrimitive
     * so that react-spring can manage cleanup. That said, I think it looks better to close instantly.
     */
    return (
      <NonModalDialogPrimitive
        {...dialog}
        {...safelySpreadBoxProps(props)}
        preventBodyScroll={false}
        hideOnClickOutside={false}
        hideOnEsc={hideOnEsc}
        element={`${element}_CONTAINER`}
        ref={ref}
        as={Box}
        zIndex="zIndex80"
        position="fixed"
        top="0 !important"
        right="0 !important"
        bottom="0 !important"
        left="auto !important"
        transform="none !important"
        _focus={{
          outline: "none",
        }}
      >
        <StyledBase>
          {transitions((styles, item) => {
            return (
              item && (
                <AnimatedBox
                  style={styles}
                  element={element}
                  display="grid"
                  gridTemplateRows="auto 1fr auto"
                  height="100vh"
                  backgroundColor="colorBackgroundBody"
                  boxShadow="shadow"
                  width="size80"
                >
                  {children}
                </AnimatedBox>
              )
            );
          })}
        </StyledBase>
      </NonModalDialogPrimitive>
    );
  },
);

SideModal.displayName = "SideModal";
