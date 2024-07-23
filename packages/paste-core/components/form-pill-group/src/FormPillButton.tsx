import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxElementProps, BoxProps } from "@twilio-paste/box";
import { ErrorIcon } from "@twilio-paste/icons/esm/ErrorIcon";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import * as React from "react";

import { hoverPillStyles, pillStyles } from "./FormPill.styles";
import type { FormPillGroupSizeVariant, PillVariant } from "./types";
import { FormPillGroupContext } from "./useFormPillState";

interface FormPillStylesProps {
  variant?: PillVariant;
  selected?: boolean;
  element?: BoxElementProps["element"];
  children: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isHoverable?: boolean;
  isDismissable?: boolean;
  /* We can't call this `disabled` because it conflicts with the internal `CompositeItem disabled prop */
  isDisabled?: boolean;
  i18nErrorLabel?: string;
}

const sizeStyles: Record<FormPillGroupSizeVariant, Pick<BoxProps, "fontSize" | "height">> = {
  default: {
    fontSize: "fontSize20",
    height: "sizeIcon40",
  },
  large: {
    fontSize: "fontSize30",
    height: "sizeIcon50",
  },
};

export const FormPillButton = React.forwardRef<HTMLElement, FormPillStylesProps>(
  (
    {
      element = "FORM_PILL",
      selected = false,
      variant = "default",
      isHoverable = false,
      isDisabled = false,
      isDismissable = false,
      i18nErrorLabel = "(error)",
      ...props
    },
    ref,
  ) => {
    const computedStyles = React.useMemo(() => {
      const hasHoverStyles = isHoverable && !isDisabled;
      return hasHoverStyles ? { ...pillStyles[variant], ...hoverPillStyles[variant] } : pillStyles[variant];
    }, [isHoverable, isDisabled, variant]);
    const { size } = React.useContext(FormPillGroupContext);
    const { height, fontSize } = sizeStyles[size];

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        ref={ref}
        aria-selected={selected}
        aria-disabled={isDisabled}
        role="option"
        type="button"
        as="button"
        margin="space0"
        position="relative"
        borderRadius="borderRadiusPill"
        borderStyle="none"
        cursor="default"
        height={height}
        fontFamily="inherit"
        fontSize={fontSize}
        fontWeight="fontWeightMedium"
        outline="none"
        paddingLeft="space30"
        paddingRight={isDismissable ? "space80" : "space30"}
        transition="background-color 150ms ease-in, border-color 150ms ease-in, box-shadow 150ms ease-in, color 150ms ease-in"
        {...computedStyles}
      >
        <Box display="flex" alignItems="center" columnGap="space20" opacity={isDisabled ? 0.3 : 1}>
          {variant === "error" ? (
            <>
              <ErrorIcon decorative size="sizeIcon10" />
              <ScreenReaderOnly>{i18nErrorLabel}</ScreenReaderOnly>
            </>
          ) : null}
          {props.children}
        </Box>
      </Box>
    );
  },
);

FormPillButton.displayName = "FormPillButton";
