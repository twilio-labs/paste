import * as React from 'react';
import {Text} from '@twilio-paste/text';
import type {BoxProps} from '@twilio-paste/box';
import {ComboboxListboxOption} from './ComboboxListboxOption';
import {ComboboxListboxGroup} from './ComboboxListboxGroup';

export interface ComboboxEmptyStateProps {
  element?: BoxProps['element'];
}

const ComboboxEmptyState = React.memo(
  React.forwardRef<HTMLUListElement, ComboboxEmptyStateProps>(({element = 'COMBOBOX', ...props}, ref) => {
    return (
      <ComboboxListboxGroup element={element} ref={ref}>
        <ComboboxListboxOption {...props} element={`${element}_EMPTY_STATE`} variant="default" disabled>
          <Text as="span" fontStyle="italic">
            No results found
          </Text>
        </ComboboxListboxOption>
      </ComboboxListboxGroup>
    );
  })
);

ComboboxEmptyState.displayName = 'ComboboxEmptyState';

export {ComboboxEmptyState};
