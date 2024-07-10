import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { CompositeItem } from "@twilio-paste/reakit-library";
import type { CompositeStateReturn } from "@twilio-paste/reakit-library";
import * as React from "react";

import { selectedWrapperStyles, wrapperStyles } from "./FormPill.styles";
import { FormPillButton } from "./FormPillButton";
import { PillCloseIcon } from "./PillCloseIcon";
import type { PillVariant } from "./types";

export interface FormPillProps extends CompositeStateReturn {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default 'FORM_PILL'
   * @type {BoxProps['element']}
   * @memberof FormPillProps
   */
  element?: BoxProps["element"];
  /**
   * Set if a pill is in a selected state
   *
   * @type {boolean}
   * @memberof FormPillProps
   */
  selected?: boolean;
  /**
   * Set if a pill is disabled
   *
   * @type {boolean}
   * @memberof FormPillProps
   */
  disabled?: boolean;
  children: React.ReactNode;
  /**
   * Sets the variant of the pill
   *
   * @default 'default'
   * @type {PillVariant}
   * @memberof FormPillProps
   */
  variant?: PillVariant;
  /**
   * Event handler called when a pill is selected
   *
   * @memberof FormPillProps
   */
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Event handler called when a pill is dismissed
   *
   * @memberof FormPillProps
   */
  onDismiss?: (event: React.MouseEvent<Element> | React.KeyboardEvent<Element>) => void;
  /**
   * Event handler called when a pill is focused
   *
   * @memberof FormPillProps
   */
  onFocus?: () => void;
  /**
   * Event handler called when a pill is blurred
   *
   * @memberof FormPillProps
   */
  onBlur?: () => void;
  /**
   * Alternative text for the error icon in the error variant
   *
   * @default '(error)'
   * @type {string}
   * @memberof FormPillProps
   */
  i18nErrorLabel?: string;
  fontSize?: BoxProps["fontSize"];
}

/**
 * FormPill represents and entity inside of a data collection. It is used as a child of FormPillGroup and should be used
 * in conjunction with the useFormPillGroupState hook
 *
 * @example
 * <FormPill
 *  {...pillState}
 *  onDismiss={() => {
 *    console.log('removed the first pill');
 *  }}
 *  onSelect={() => {}}
 *  onFocus={() => {}}
 *  onBlur={() => {}}
 * >
 *
 * @see https://paste.twilio.design/components/form-pill-group
 */
export const FormPill = React.forwardRef<HTMLElement, FormPillProps>(
  (
    {
      element = "FORM_PILL",
      onDismiss,
      onSelect,
      next,
      selected,
      variant = "default",
      disabled = false,
      i18nErrorLabel,
      fontSize,
      ...props
    },
    ref,
  ) => {
    if (selected && disabled) {
      throw new Error("[Paste FormPill] FormPills cannot be selected and disabled at the same time.");
    }

    const isHoverable = onSelect != null;
    const isDismissable = onDismiss != null;

    let computedStyles = {};

    if (isHoverable) {
      computedStyles = selected ? selectedWrapperStyles[variant] : wrapperStyles[variant];
    }

    // Handles delete and backspace keypresses
    const handleKeydown = React.useCallback(
      (event: React.KeyboardEvent) => {
        if ((event.key === "Backspace" || event.key === "Delete") && typeof onDismiss === "function") {
          onDismiss(event);

          // Focus the next pill upon removing the current one
          if (typeof next === "function") {
            next();
          }
        }
      },
      [onDismiss, next],
    );
    return (
      <Box
        element={`${element}_WRAPPER`}
        position="relative"
        display="inline-block"
        borderRadius="borderRadiusPill"
        fontSize={fontSize}
        {...computedStyles}
      >
        <CompositeItem
          {...safelySpreadBoxProps(props)}
          element={element}
          ref={ref}
          as={FormPillButton}
          focusable={disabled}
          onKeyDown={disabled ? undefined : handleKeydown}
          onClick={disabled ? undefined : onSelect}
          next={next}
          isDisabled={disabled}
          isDismissable={isDismissable}
          isHoverable={isHoverable}
          selected={selected}
          variant={variant}
          i18nErrorLabel={i18nErrorLabel}
          fontSize={fontSize}
        >
          {props.children}
        </CompositeItem>
        {isDismissable && !disabled ? (
          <PillCloseIcon
            element={`${element}_CLOSE`}
            onClick={onDismiss}
            selected={selected}
            variant={variant}
            pillIsHoverable={isHoverable}
          />
        ) : null}
      </Box>
    );
  },
);

FormPill.displayName = "FormPill";
