import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {CompositeItem} from '@twilio-paste/reakit-library';
import type {CompositeStateReturn} from '@twilio-paste/reakit-library';
import {PillCloseIcon} from './PillCloseIcon';

interface FormPillStylesProps {
  selected?: boolean;
  element?: string;
  children: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
}

const FormPillStyles = React.forwardRef<HTMLElement, FormPillStylesProps>(
  ({element = 'FORM_PILL', selected = false, ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as="button"
      type="button"
      role="option"
      cursor="pointer"
      aria-selected={selected}
      backgroundColor={selected ? 'colorBackgroundPrimaryWeakest' : 'colorBackground'}
      borderWidth="borderWidth10"
      borderColor="colorBorderWeak"
      borderStyle="solid"
      borderRadius="borderRadius20"
      paddingX="space30"
      paddingY="space20"
      height="30px"
      display="flex"
      columnGap="space20"
      alignItems="center"
      _hover={{
        boxShadow: 'shadowBorderPrimaryStronger',
      }}
      _focus={{
        boxShadow: 'shadowBorderPrimaryStronger',
      }}
    >
      {props.children}
    </Box>
  )
);

export interface FormPillProps extends CompositeStateReturn {
  selected?: boolean;
  element?: string;
  children: React.ReactNode;
  onSelect?: () => void;
  onDismiss?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export const FormPill = React.forwardRef<HTMLElement, FormPillProps>(({onDismiss, onSelect, next, ...props}, ref) => {
  // Handles delete and backspace keypresses
  const handleKeydown = React.useCallback(
    (event) => {
      if ((event.key === 'Backspace' || event.key === 'Delete') && typeof onDismiss === 'function') {
        onDismiss();

        // Focus the next pill upon removing the current one
        if (typeof next === 'function') {
          next();
        }
      }
    },
    [onDismiss, next]
  );

  return (
    <CompositeItem as={FormPillStyles} {...props} ref={ref} onKeyDown={handleKeydown} onClick={onSelect} next={next}>
      {props.children}
      {onDismiss != null ? <PillCloseIcon onClick={onDismiss} /> : null}
    </CompositeItem>
  );
});
