import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {
  baseCloseStyles,
  closeColorStyles,
  closeInheritColorStyles,
  selectedBaseCloseStyles,
  selectedCloseColorStyles,
} from './FormPill.styles';
import type {PillVariant} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const merge = require('deepmerge');

interface PillCloseIconProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  selected?: boolean;
  variant?: PillVariant;
  element?: BoxProps['element'];
  pillIsHoverable?: boolean;
}

export const PillCloseIcon: React.FC<PillCloseIconProps> = ({
  element = 'FORM_PILL_CLOSE',
  onClick = () => {},
  selected = false,
  variant = 'default',
  pillIsHoverable = false,
}) => {
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
      position="absolute"
      right={0}
      top={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="sizeIcon40"
      width="sizeIcon40"
      borderRadius="borderRadiusCircle"
      borderWidth="borderWidth10"
      borderStyle="solid"
      borderColor="transparent"
      transition="color 150ms ease-in, border-color 150ms ease-in, background-color 150ms ease-in"
      {...computedStyles}
    >
      <CloseIcon decorative size="sizeIcon10" color="inherit" />
    </Box>
  );
};
