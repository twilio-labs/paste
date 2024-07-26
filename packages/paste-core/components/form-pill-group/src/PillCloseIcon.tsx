import { Box } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { CloseIcon } from "@twilio-paste/icons/esm/CloseIcon";
import merge from "deepmerge";
import * as React from "react";

import {
  baseCloseStyles,
  closeColorStyles,
  closeInheritColorStyles,
  selectedBaseCloseStyles,
  selectedCloseColorStyles,
} from "./FormPill.styles";
import type { PillVariant } from "./types";
import { FormPillGroupContext } from "./useFormPillState";

interface PillCloseIconProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  selected?: boolean;
  variant?: PillVariant;
  element?: BoxProps["element"];
  pillIsHoverable?: boolean;
}

export const PillCloseIcon: React.FC<React.PropsWithChildren<PillCloseIconProps>> = ({
  element = "FORM_PILL_CLOSE",
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClick = () => {},
  selected = false,
  variant = "default",
  pillIsHoverable = false,
}) => {
  const { size } = React.useContext(FormPillGroupContext);

  const baseStyles = selected ? selectedBaseCloseStyles[variant] : baseCloseStyles[variant];
  let colorStyles = selected ? selectedCloseColorStyles[variant] : closeColorStyles[variant];

  if (pillIsHoverable) {
    colorStyles = closeInheritColorStyles;
  }

  const computedStyles = merge(baseStyles, colorStyles);

  return (
    <Box
      element={element}
      onClick={onClick}
      {...computedStyles}
      position="absolute"
      right={0}
      top={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={size === "large" ? "sizeIcon50" : "sizeIcon40"}
      width={size === "large" ? "sizeIcon50" : "sizeIcon40"}
      borderRadius="borderRadiusCircle"
      borderWidth="borderWidth10"
      borderStyle="solid"
      borderColor="transparent"
      transition="color 150ms ease-in, border-color 150ms ease-in, background-color 150ms ease-in"
    >
      <CloseIcon decorative size={size === "large" ? "sizeIcon20" : "sizeIcon10"} color="inherit" />
    </Box>
  );
};

PillCloseIcon.displayName = "PillCloseIcon";
