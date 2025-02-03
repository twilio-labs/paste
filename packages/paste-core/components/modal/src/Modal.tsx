import { animated, useTransition } from "@twilio-paste/animation-library";
import { Box, getCustomElementStyles, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps } from "@twilio-paste/box";
import { ModalDialogPrimitiveContent, ModalDialogPrimitiveOverlay } from "@twilio-paste/modal-dialog-primitive";
import { css, styled } from "@twilio-paste/styling-library";
import { pasteBaseStyles } from "@twilio-paste/theme";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { ModalContext } from "./ModalContext";

type Sizes = "default" | "wide";

export const ModalDialogOverlay = animated(
  // @ts-expect-error Just like in box I can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
  styled(ModalDialogPrimitiveOverlay)<{ variant?: Sizes }>(
    css({
      position: "fixed",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: "colorBackgroundOverlay",
      zIndex: "zIndex80",
    }),
    /*
     * import Paste Theme Based Styles due to portal positioning.
     * reach portal is a sibling to the main app, so you are now
     * no longer a child of the theme provider. We need to re-set
     * some of the base styles that we rely on inheriting from
     * such as font-family and line-height so that compositions
     * of paste components in the modal are styled correctly.
     */
    pasteBaseStyles,
    getCustomElementStyles,
  ),
);

export interface ModalDialogContentProps {
  size?: Sizes;
  children: React.ReactNode;
  element?: BoxElementProps["element"];
}

export const ModalDialogContent = animated(
  styled(ModalDialogPrimitiveContent)<ModalDialogContentProps>(({ size }) =>
    css({
      width: "100%",
      maxWidth: size === "wide" ? "size80" : "size60",
      maxHeight: "90%",
      minHeight: "170px",
      backgroundColor: "colorBackgroundBody",
      borderRadius: "borderRadius30",
      boxShadow: "shadowElevation20",
      display: "flex",
      flexDirection: "column",
    }),
  ),
);

export interface ModalProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'MODAL'
   * @type {BoxProps['element']}
   * @memberof ModalProps
   */
  element?: BoxElementProps["element"];
  /**
   * Determins the state of the Modal.
   *
   * @type {boolean}
   * @memberof ModalProps
   */
  isOpen: boolean;
  /**
   * Function to call when whenever the user hits "Escape" or clicks outside the dialog. It's important to close the Modal `onDismiss`.
   *
   * @memberof ModalProps
   */
  onDismiss: VoidFunction;
  /**
   * Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.
   *
   * @type {boolean}
   * @default true
   * @memberof ModalProps
   */
  allowPinchZoom?: boolean;
  /**
   * Control whether the Modal is default width or wide.
   *
   * @type {Sizes}
   * @memberof ModalProps
   */
  size: Sizes;
  /**
   * By default the first focusable element will receive focus when the Modal opens but you can provide a ref to focus instead.
   *
   * @type {Sizes}
   * @memberof ModalProps
   */
  initialFocusRef?: React.RefObject<any>;
  /**
   * Accessible title for the Modal.
   *
   * @type {string}
   * @memberof ModalProps
   */
  ariaLabelledby: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAnimationStates = (): any => ({
  from: { opacity: 0, transform: `scale(0.675)` },
  enter: { opacity: 1, transform: `scale(1)` },
  leave: { opacity: 0, transform: `scale(0.675)` },
  // https://www.react-spring.dev/docs/advanced/config
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
});

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      element = "MODAL",
      isOpen,
      onDismiss,
      allowPinchZoom = true,
      initialFocusRef,
      ariaLabelledby,
      size,
      ...props
    },
    ref,
  ) => {
    const transitions = useTransition(isOpen, getAnimationStates());

    return (
      <ModalContext.Provider value={{ onDismiss }}>
        {transitions(
          (styles, item) =>
            item && (
              <ModalDialogOverlay
                onDismiss={onDismiss}
                allowPinchZoom={allowPinchZoom}
                initialFocusRef={initialFocusRef}
                style={{ opacity: styles.opacity }}
                data-paste-element={`${element}_OVERLAY`}
                variant={size}
              >
                <Box
                  // @ts-expect-error Render overlay as box for customization
                  as={ModalDialogContent}
                  aria-labelledby={ariaLabelledby}
                  {...safelySpreadBoxProps(props)}
                  element={element}
                  ref={ref}
                  style={styles}
                  size={size}
                  variant={size}
                >
                  {children}
                </Box>
              </ModalDialogOverlay>
            ),
        )}
      </ModalContext.Provider>
    );
  },
);
Modal.displayName = "Modal";

export { Modal };
