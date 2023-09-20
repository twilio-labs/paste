import * as React from 'react';
import {Box} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {BackgroundColor, TextColor} from '@twilio-paste/style-props';

import type {Variants} from './types';
import {useInputBoxContext} from './InputBoxContext';

type StateOptions = 'default' | 'disabled' | 'readOnly';

const getChevronWrapperState = (disabled: boolean, readOnly: boolean): StateOptions =>
  // eslint-disable-next-line unicorn/no-nested-ternary
  disabled ? 'disabled' : readOnly ? 'readOnly' : 'default';

const IconColors: {[variant in Variants]: {[key in StateOptions]: TextColor}} = {
  default: {
    default: 'colorTextIcon',
    disabled: 'colorTextWeaker',
    readOnly: 'colorTextWeaker',
  },
  inverse: {
    default: 'colorTextIconInverse',
    disabled: 'colorTextInverseWeakest',
    readOnly: 'colorTextInverseWeakest',
  },
};

/**
 * Helper to get the correct icon color for the dropdown chevron.
 *
 * @param variant
 * @param disabled
 * @param readOnly
 * @returns {TextColor} the icon color
 */
const getInputChevronIconColor = (
  variant: Variants | undefined = 'default',
  disabled: boolean | undefined = false,
  readOnly: boolean | undefined = false
): TextColor => {
  return IconColors[variant][getChevronWrapperState(disabled, readOnly)];
};

const BackgroundColorStyles: {[variant: string]: {[key: string]: BackgroundColor}} = {
  default: {
    default: 'colorBackground',
    disabled: 'colorBackground',
    readOnly: 'colorBackground',
  },
  inverse: {
    default: 'colorBackgroundInverseStrong',
    disabled: 'colorBackgroundInverse',
    readOnly: 'colorBackgroundInverseStrong',
  },
};

export interface InputChevronWrapperProps {
  children: NonNullable<React.ReactNode>;
  /*
   * Requiring element here instead of extending directly from BoxProps.
   * This ensures an element prop is always passed on these composite components.
   */
  element: BoxProps['element'];
}

const InputChevronWrapper = React.forwardRef<HTMLDivElement, React.PropsWithChildren<InputChevronWrapperProps>>(
  ({children, element = 'CHEVRON_WRAPPER'}, ref) => {
    const {disabled, readOnly, variant} = useInputBoxContext();

    return (
      <Box
        backgroundColor={BackgroundColorStyles[variant][getChevronWrapperState(disabled, readOnly)]}
        borderRadius="borderRadius20"
        cursor="pointer"
        alignItems="center"
        display="inline-flex"
        position="absolute"
        pointerEvents="none"
        right="space30"
        top="50%"
        transform="translateY(-50%)"
        zIndex="zIndex10"
        element={element}
        ref={ref}
      >
        {children}
      </Box>
    );
  }
);

InputChevronWrapper.displayName = 'InputChevronWrapper';

export {InputChevronWrapper, getInputChevronIconColor};
