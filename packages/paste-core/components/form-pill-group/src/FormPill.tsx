import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps, BoxProps} from '@twilio-paste/box';
import {CompositeItem} from '@twilio-paste/reakit-library';
import type {CompositeStateReturn} from '@twilio-paste/reakit-library';
import {PillCloseIcon} from './PillCloseIcon';

interface FormPillStylesProps {
  selected?: boolean;
  element?: string;
  children: React.ReactNode;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
  isHoverable?: boolean;
}

const hoverStyles: BoxStyleProps = {
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'colorBackgroundPrimaryWeakest',
    boxShadow: 'shadowBorderPrimaryStrong',
    color: 'colorTextLinkStronger',
  },
  _selected_hover: {
    backgroundColor: 'colorBackgroundPrimaryStronger',
    color: 'colorTextWeakest',
  },
};

const FormPillStyles = React.forwardRef<HTMLElement, FormPillStylesProps>(
  ({element = 'FORM_PILL', selected = false, isHoverable, ...props}, ref) => (
    <Box
      {...safelySpreadBoxProps(props)}
      ref={ref}
      element={element}
      as="button"
      aria-selected={selected}
      role="option"
      type="button"
      alignItems="center"
      backgroundColor="colorBackgroundStrong"
      borderRadius="borderRadius10"
      borderWidth="borderWidth0"
      color="colorText"
      columnGap="space20"
      cursor="default"
      display="flex"
      fontFamily="inherit"
      fontSize="fontSize20"
      fontWeight="fontWeightSemibold"
      lineHeight="lineHeight10"
      outline="none"
      paddingX="space30"
      paddingY="space20"
      transition="background-color 100ms ease-in, box-shadow 100ms ease-in, color 100ms ease-in, border-color 100ms ease-in"
      _focusVisible={{
        backgroundColor: 'colorBackgroundPrimaryWeakest',
        boxShadow: 'shadowFocus',
        color: 'colorTextLinkStronger',
      }}
      _selected={{
        backgroundColor: 'colorBackgroundPrimaryStronger',
        color: 'colorTextWeakest',
      }}
      {...(isHoverable && {...hoverStyles})}
    >
      {props.children}
    </Box>
  )
);

FormPillStyles.displayName = 'StyledFormPill';

interface FormPillProps extends CompositeStateReturn, Pick<BoxProps, 'element'> {
  selected?: boolean;
  children: React.ReactNode;
  /** Event handler to respond to selection events */
  onSelect?: () => void;
  /** Event handler to respond to dismiss events */
  onDismiss?: () => void;
  /** Event handler to respond to focus events */
  onFocus?: () => void;
  /** Event handler to respond to blur events */
  onBlur?: () => void;
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
  ({element = 'FORM_PILL', onDismiss, onSelect, next, ...props}, ref) => {
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

    const isHoverable = onSelect != null;

    return (
      <CompositeItem
        as={FormPillStyles}
        element={element}
        {...props}
        ref={ref}
        isHoverable={isHoverable}
        onKeyDown={handleKeydown}
        onClick={onSelect}
        next={next}
      >
        {props.children}
        {onDismiss != null ? <PillCloseIcon onClick={onDismiss} /> : null}
      </CompositeItem>
    );
  }
);

FormPill.displayName = 'FormPill';
