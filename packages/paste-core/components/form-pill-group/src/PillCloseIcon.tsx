import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {selectedCloseStyles, closeStyles} from './FormPill.styles';
import type {PillVariant} from './types';

interface PillCloseIconProps {
  onClick?: () => void;
  selected?: boolean;
  variant?: PillVariant;
  element?: BoxProps['element'];
}

export const PillCloseIcon: React.FC<PillCloseIconProps> = ({
  element = 'FORM_PILL_CLOSE',
  onClick = () => {},
  selected = false,
  variant = 'default',
}) => {
  const computedStyles = selected ? selectedCloseStyles[variant] : closeStyles[variant];

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
