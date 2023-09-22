import type { BoxProps } from '@twilio-paste/box';
import { Button, type ButtonProps } from '@twilio-paste/button';
import { ChevronUpIcon } from '@twilio-paste/icons/esm/ChevronUpIcon';
import type { HTMLPasteProps } from '@twilio-paste/types';
import * as React from 'react';

export interface IncrementButtonProps extends HTMLPasteProps<'button'> {
  i18nStepUpLabel?: string;
  element?: BoxProps['element'];
  // Button component restricts tabIndex values
  tabIndex?: ButtonProps['tabIndex'];
}

export const IncrementButton = React.forwardRef<HTMLButtonElement, IncrementButtonProps>(
  ({ i18nStepUpLabel = 'step value up', element, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        element={`${element}_INCREMENT_BUTTON`}
        variant="reset"
        size="reset"
        type="button"
        borderRadius="borderRadius20"
        backgroundColor="colorBackground"
        marginRight="space30"
      >
        <ChevronUpIcon
          decorative={false}
          title={i18nStepUpLabel}
          size="sizeIcon05"
          element={`${element}_INCREMENT_ICON`}
        />
      </Button>
    );
  },
);
IncrementButton.displayName = 'Increment';
