import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';

export interface DecrementButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  i18nStepDownLabel?: string;
  element?: BoxProps['element'];
}

export const DecrementButton = React.forwardRef<HTMLButtonElement, DecrementButtonProps>(
  ({i18nStepDownLabel = 'step value down', element, ...props}, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        element={`${element}_DECREMENT_BUTTON`}
        variant="reset"
        size="reset"
        type="button"
        // @ts-expect-error remove when Reset Button types extends BoxProps
        borderRadius="borderRadius20"
        backgroundColor="colorBackground"
        marginRight="space30"
      >
        <ChevronDownIcon
          decorative={false}
          title={i18nStepDownLabel}
          size="sizeIcon05"
          element={`${element}_DECREMENT_ICON`}
        />
      </Button>
    );
  }
);
DecrementButton.displayName = 'Decrement';
