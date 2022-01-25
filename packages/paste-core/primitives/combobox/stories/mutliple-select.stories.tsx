import * as React from 'react';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import lodash from 'lodash';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {FormPill, FormPillGroup, useFormPillState} from '@twilio-paste/form-pill-group';
import {ComboboxListbox, ComboboxListboxGroup, ComboboxListboxOption} from '@twilio-paste/combobox';
import {ComboboxPrimitive, useComboboxPrimitive, useMultiSelectPrimitive} from '../src';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Combobox/useMultiSelectPrimitive',
  component: ComboboxPrimitive,
};

export const BasicMultiCombobox: React.FC = () => {
  const seed = useUIDSeed();
  const [inputValue, setInputValue] = React.useState('');
  const [filteredItems, setFilteredItems] = React.useState([...items].sort());

  const formPillState = useFormPillState();

  const {
    getSelectedItemProps,
    getDropdownProps,
    addSelectedItem,
    removeSelectedItem,
    selectedItems,
  } = useMultiSelectPrimitive({
    onSelectedItemsChange: (changes) => {
      if (changes.type.includes('add')) {
        const [toRemove] = lodash.difference(changes.selectedItems, selectedItems);
        setFilteredItems((state) => state.filter((item) => item !== toRemove));
      } else if (changes.type.includes('remove')) {
        const [toAdd] = lodash.difference(selectedItems, changes.selectedItems);
        setFilteredItems((state) => [...state, toAdd as string].sort());
      }
    },
  });

  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    selectItem,
  } = useComboboxPrimitive({
    items: filteredItems,
    onInputValueChange: ({inputValue: value}) => {
      setInputValue(value);
    },
    onSelectedItemChange: ({selectedItem: selected}) => {
      if (selected != null) {
        addSelectedItem(selected);

        setInputValue('');
      }
      selectItem(null);
    },
  });

  React.useEffect(() => {
    setFilteredItems((state) => {
      if (inputValue) {
        const filtered = state.filter((s) => s.toLowerCase().includes(inputValue.toLowerCase()));
        if (filtered.length > 0) {
          return filtered;
        }

        return state;
      }
      return [...items.filter((item) => !selectedItems.includes(item)).sort()];
    });
  }, [inputValue]);

  const dropdownProps = getDropdownProps({
    preventKeyAction: isOpen,
    ...getToggleButtonProps({tabIndex: 0}),
  });

  return (
    <>
      <Box marginBottom="space40" position="relative">
        <Label htmlFor={seed('multi-select-primitive-input')} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={seed('multi-select-primitive-input')}
            type="text"
            {...getInputProps({
              ...dropdownProps,
            })}
            value={inputValue}
          />
        </Box>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps()}>
          <ComboboxListboxGroup>
            {filteredItems.map((item, index) => (
              <ComboboxListboxOption
                variant="default"
                highlighted={highlightedIndex === index}
                key={seed(item)}
                {...getItemProps({item, index})}
              >
                {item}
              </ComboboxListboxOption>
            ))}
          </ComboboxListboxGroup>
        </ComboboxListbox>
      </Box>
      <FormPillGroup {...formPillState} aria-label="Selected components">
        {selectedItems.map((item, index) => {
          return (
            <FormPill
              {...getSelectedItemProps({
                selectedItem,
                index,
                ref: dropdownProps.ref,
              })}
              tabIndex={null}
              {...formPillState}
              key={seed(`selected-item-${item}`)}
              onDismiss={() => {
                removeSelectedItem(item);
              }}
            >
              {item}
            </FormPill>
          );
        })}
      </FormPillGroup>
    </>
  );
};
