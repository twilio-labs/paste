import * as React from 'react';
import type {BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronUpIcon} from '@twilio-paste/icons/esm/ChevronUpIcon';
import type {HTMLPasteProps} from '@twilio-paste/types';

export interface IncrementButtonProps extends HTMLPasteProps<'button'> {
  i18nStepUpLabel?: string;
  element?: BoxProps['element'];
}

export const IncrementButton = React.forwardRef<HTMLButtonElement, IncrementButtonProps>(
  ({i18nStepUpLabel = 'step value up', element, ...props}, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        element={`${element}_INCREMENT_BUTTON`}
        variant="reset"
        size="reset"
        type="button"
        // @ts-expect-error remove when Reset Button types extends BoxProps
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
  }
);
IncrementButton.displayName = 'Increment';
