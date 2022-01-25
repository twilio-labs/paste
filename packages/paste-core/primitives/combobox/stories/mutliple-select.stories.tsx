import * as React from 'react';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import lodash from 'lodash';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {useMergeRefs} from '@twilio-paste/utils';
import {FormPill, FormPillGroup, useFormPillState} from '@twilio-paste/form-pill-group';
import {ComboboxListbox, ComboboxListboxGroup, ComboboxListboxOption} from '@twilio-paste/combobox';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
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
      let diff = [];

      if (changes.type.includes('add')) {
        const [toRemove] = lodash.difference(changes.selectedItems, selectedItems);
        setFilteredItems((state) => state.filter((item) => item !== toRemove));
      } else if (changes.type.includes('remove')) {
        diff = lodash.difference(selectedItems, changes.selectedItems);
        setFilteredItems((state) => [...state, diff[0]].sort());
      }
    },
  });

  const handleSelectItemOnClick = React.useCallback(
    ({selectedItem}) => {
      addSelectedItem(selectedItem);
    },
    [addSelectedItem]
  );

  const handleRemoveItemOnClick = React.useCallback(
    (selectedItem) => {
      removeSelectedItem(selectedItem);
    },
    [removeSelectedItem]
  );

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
  } = useComboboxPrimitive({
    items: filteredItems,
    onSelectedItemChange: ({inputValue: selectedItemOnChangeValue, type, ...args}) => {
      handleSelectItemOnClick(args);

      setInputValue('');
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

  const {ref: toggleButtonRef, ...toggleButtonProps} = getToggleButtonProps({tabIndex: 0});

  const dropdownProps = getDropdownProps({
    preventKeyAction: isOpen,
    ref: toggleButtonRef,
  });

  return (
    <>
      <Box marginBottom="space40" position="relative">
        <Label htmlFor={seed('multiselect-primitive-input')} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={seed('multiselect-primitive-input')}
            type="text"
            {...getInputProps({
              ...getDropdownProps({
                preventKeyAction: isOpen,
                ref: toggleButtonRef,
              }),
              onChange: ({target: {value}}) => {
                setInputValue(value);
              },
            })}
            {...toggleButtonProps}
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
              onDismiss={() => handleRemoveItemOnClick(item)}
            >
              {item}
            </FormPill>
          );
        })}
      </FormPillGroup>
    </>
  );
};
