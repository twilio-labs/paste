import * as React from 'react';
import {useComboboxPrimitive} from '@twilio-paste/combobox-primitive';
import type {UseComboboxPrimitiveStateChange, UseComboboxPrimitiveReturnValue} from '@twilio-paste/combobox-primitive';
import isEmpty from 'lodash/isEmpty';

import type {ComboboxProps} from '../types';

type DefaultStateProps = {
  onInputValueChange: ComboboxProps['onInputValueChange'];
  onIsOpenChange: ComboboxProps['onIsOpenChange'];
  onSelectedItemChange: ComboboxProps['onSelectedItemChange'];
  onHighlightedIndexChange: ComboboxProps['onHighlightedIndexChange'];
  itemToString: ComboboxProps['itemToString'];
  initialIsOpen: ComboboxProps['initialIsOpen'];
  inputValue: ComboboxProps['inputValue'];
  selectedItem: ComboboxProps['selectedItem'];
  initialSelectedItem: ComboboxProps['initialSelectedItem'];
  items: ComboboxProps['items'];
};

const getDefaultState = ({
  onInputValueChange,
  onIsOpenChange,
  onSelectedItemChange,
  onHighlightedIndexChange,
  itemToString,
  initialIsOpen,
  inputValue,
  selectedItem,
  initialSelectedItem,
  items,
}: DefaultStateProps): Partial<UseComboboxPrimitiveReturnValue<any>> => {
  return useComboboxPrimitive({
    initialSelectedItem,
    items,
    onHighlightedIndexChange: React.useCallback(
      (changes: UseComboboxPrimitiveStateChange<string>) => {
        if (onHighlightedIndexChange) {
          onHighlightedIndexChange(changes);
        }
      },
      [onHighlightedIndexChange]
    ),
    onInputValueChange,
    onIsOpenChange,
    onSelectedItemChange,
    ...(itemToString != null && {itemToString}),
    ...(initialIsOpen != null && {initialIsOpen}),
    ...(inputValue != null && {inputValue}),
    ...(selectedItem != null && {selectedItem}),
  });
};

export const extractPropsFromState = ({
  state,
  ...props
}: DefaultStateProps & {state?: Partial<UseComboboxPrimitiveReturnValue<any>>}): Partial<
  UseComboboxPrimitiveReturnValue<any>
> => {
  if (state != null && !isEmpty(state)) {
    return state;
  }

  return getDefaultState(props);
};
