import {useMultiSelectPrimitive} from '@twilio-paste/combobox-primitive';
import type {UseMultiSelectPrimitiveReturnValue} from '@twilio-paste/combobox-primitive';
import isEmpty from 'lodash/isEmpty';

import type {Item, MultiselectComboboxProps} from '../types';

interface DefaultStateProps {
  initialSelectedItems: MultiselectComboboxProps['initialSelectedItems'];
  onSelectedItemsChange: MultiselectComboboxProps['onSelectedItemsChange'];
  state: MultiselectComboboxProps['state'];
}

export const extractPropsFromState = ({
  state,
  initialSelectedItems,
  onSelectedItemsChange,
}: DefaultStateProps): UseMultiSelectPrimitiveReturnValue<Item> => {
  // If they're providing their own state management, we don't need to do anything
  if (state != null && !isEmpty(state)) {
    return state;
  }

  // Otherwise, we'll use our own state management
  return useMultiSelectPrimitive<Item>({
    initialSelectedItems,
    onSelectedItemsChange,
  });
};
