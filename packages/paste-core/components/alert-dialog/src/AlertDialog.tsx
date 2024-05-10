import type { BoxProps } from "@twilio-paste/box";
import type { HTMLPasteProps } from "@twilio-paste/types";
import type { SpringValue } from "@react-spring/web";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import { ModalDialogOverlay } from "@twilio-paste/modal";
import { useTransition } from "@twilio-paste/animation-library";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { AlertDialogBody } from "./AlertDialogBody";
import { AlertDialogContent } from "./AlertDialogContent";
import { AlertDialogFooter } from "./AlertDialogFooter";
import { AlertDialogHeader } from "./AlertDialogHeader";

/**
 * Animation states for the Alert Dialog.
 */
const AnimationStates = {
  from: { opacity: 0, transform: `scale(0.675)` },
  enter: { opacity: 1, transform: `scale(1)` },
  leave: { opacity: 0, transform: `scale(0.675)` },
  // https://www.react-spring.dev/docs/advanced/config
  config: {
    mass: 0.5,
    tension: 370,
    friction: 26,
  },
};

export interface AlertDialogProps extends HTMLPasteProps<"div"> {
  children: NonNullable<React.ReactNode>;
  /**
   * Display a destructive Alert Dialog
   *
   * @default false
   * @type {boolean}
   * @memberof AlertDialogProps
   */
  destructive?: boolean;
  /**
   * Header for the Alert Dialog
   *
   * @type {string}
   * @memberof AlertDialogProps
   */
  heading: string;
  /**
   * Determines whether the Alert Dialog is open
   *
   * @type {boolean}
   * @memberof AlertDialogProps
   */
  isOpen: boolean;
  /**
   * Function to run when the confirm button is used
   *
   * @memberof AlertDialogProps
   */
  onConfirm: () => void;
  /**
   * Label for the confirm button
   *
   * @type {string}
   * @memberof AlertDialogProps
   */
  onConfirmLabel: string;
  /**
   * Function to run when the dismiss button is used
   *
   * @memberof AlertDialogProps
   */
  onDismiss: () => void;
  /**
   * Label for the dismiss button
   *
   * @type {string}
   * @memberof AlertDialogProps
   */
  onDismissLabel: string;
  /**
   * Disable the confirm button
   *
   * @default false
   * @type {boolean}
   * @memberof AlertDialogProps
   */
  onConfirmDisabled?: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'ALERT_DIALOG'
   * @type {BoxProps['element']}
   * @memberof AlertDialogProps
   */
  element?: BoxProps["element"];
}

interface NormalizeStylesArg {
  opacity: SpringValue<number>;
  transform: SpringValue<string>;
}

interface NormalizeStylesReturn {
  opacity: number;
  transform: string;
}

/**
 * Normalize ReactSpring styles to be used in the AlertDialog.
 *
 * @param {NormalizeStylesArg} styles - ReactSpring styles
 * @returns {NormalizeStylesReturn} - Normalized styles
 */
const normalizeStyles = (styles: NormalizeStylesArg): NormalizeStylesReturn => {
  return {
    ...styles,
    opacity: styles.opacity.get(),
    transform: styles.transform.get(),
  };
};

/**
 * An Alert Dialog is a page overlay that displays critical information, blocks interaction with the page, and only closes after an action is performed.
 *
 * @link [Alert Dialog](https://paste.twilio.design/components/alert-dialog)
 */
export const AlertDialog = React.forwardRef<HTMLDivElement, AlertDialogProps>(
  (
    {
      children,
      destructive,
      element = "ALERT_DIALOG",
      heading,
      isOpen,
      onConfirm,
      onConfirmLabel,
      onDismiss,
      onDismissLabel,
      onConfirmDisabled,
      ...props
    },
    ref,
  ) => {
    const transitions = useTransition(isOpen, AnimationStates);
    const headingID = useUID();
    const bodyID = useUID();

    return transitions((rawStyles, item) => {
      if (!item) {
        return null;
      }
      // Normalizing ReactSpring styles.
      const styles = normalizeStyles(rawStyles);

      return (
        <ModalDialogOverlay isOpen={isOpen} style={{ opacity: styles.opacity }}>
          <Box
            // @ts-expect-error Render overlay as box for customization
            as={AlertDialogContent}
            {...safelySpreadBoxProps(props)}
            aria-labelledby={headingID}
            aria-describedby={bodyID}
            element={element}
            ref={ref}
            role="alertdialog"
            style={styles}
          >
            <AlertDialogHeader headingID={headingID} element={`${element}_HEADER`}>
              {heading}
            </AlertDialogHeader>
            <AlertDialogBody bodyID={bodyID} element={`${element}_BODY`}>
              {children}
            </AlertDialogBody>
            <AlertDialogFooter
              destructive={destructive}
              element={`${element}_FOOTER`}
              onDismiss={onDismiss}
              onDismissLabel={onDismissLabel}
              onConfirm={onConfirm}
              onConfirmLabel={onConfirmLabel}
              onConfirmDisabled={onConfirmDisabled}
            />
          </Box>
        </ModalDialogOverlay>
      );
    });
  },
);

AlertDialog.displayName = "AlertDialog";
