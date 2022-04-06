import * as React from 'react';
import {useUID, useUIDSeed} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {Input} from '@twilio-paste/input';
import {Label} from '@twilio-paste/label';
import {FormPill, FormPillGroup, useFormPillState} from '@twilio-paste/form-pill-group';
import {ComboboxListbox, ComboboxListboxGroup, ComboboxListboxOption} from '@twilio-paste/combobox';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {ComboboxPrimitive, useComboboxPrimitive, useMultiSelectPrimitive} from '../src';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Combobox',
  component: ComboboxPrimitive,
};

export const DropdownCombobox = (): React.ReactNode => {
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
  } = useComboboxPrimitive({items});
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </Label>
      <Box {...getComboboxProps({role: 'combobox'})}>
        <Input
          id={uid}
          type="text"
          {...getToggleButtonProps({tabIndex: 0})}
          {...getInputProps()}
          value={selectedItem || ''}
        />
      </Box>
      <ul {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <li
              style={highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}}
              // eslint-disable-next-line react/no-array-index-key
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

export const AutocompleteCombobox = (): React.ReactNode => {
  const [inputItems, setInputItems] = React.useState(items);
  const {
    getComboboxProps,
    getInputProps,
    getItemProps,
    getLabelProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
  } = useComboboxPrimitive({
    items: inputItems,
    onInputValueChange: ({inputValue}) => {
      if (inputValue != null) {
        setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
      }
    },
  });
  const uid = useUID();
  return (
    <>
      <Label htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </Label>
      <Box display="flex" {...getComboboxProps()}>
        <Input id={uid} type="text" {...getInputProps()} />
        <Button {...getToggleButtonProps()} aria-label="toggle menu" variant="primary">
          <ChevronDownIcon size="sizeIcon30" decorative={false} title="toggle menu" />
        </Button>
      </Box>
      <ul {...getMenuProps()}>
        {isOpen &&
          inputItems.map((item, index) => (
            <li
              style={highlightedIndex === index ? {backgroundColor: '#bde4ff'} : {}}
              // eslint-disable-next-line react/no-array-index-key
              key={`${item}${index}`}
              {...getItemProps({item, index})}
            >
              {item}
            </li>
          ))}
      </ul>
    </>
  );
};

export const ComboboxNonHooks = (): React.ReactNode => {
  return (
    <ComboboxPrimitive>
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        getMenuProps,
        getRootProps,
        getToggleButtonProps,
        highlightedIndex,
        inputValue,
        isOpen,
      }) => (
        <Box>
          <Label {...getLabelProps()}>Choose a component:</Label>
          <Box
            display="flex"
            // @ts-ignore
            {...getRootProps({}, {suppressRefError: true})}
          >
            <Input {...getInputProps()} type="text" />
            <Button {...getToggleButtonProps()} variant="primary" aria-label={'toggle menu'}>
              <ChevronDownIcon size="sizeIcon30" decorative={false} title="toggle menu" />
            </Button>
          </Box>
          <ul {...getMenuProps()}>
            {isOpen
              ? items
                  .filter((item) => !inputValue || item.includes(inputValue))
                  .map((item, index) => (
                    <li
                      {...getItemProps({
                        key: item,
                        index,
                        item,
                        style: {
                          backgroundColor: highlightedIndex === index ? '#bde4ff' : undefined,
                        },
                      })}
                    >
                      {item}
                    </li>
                  ))
              : null}
          </ul>
        </Box>
      )}
    </ComboboxPrimitive>
  );
};

export const BasicMultiCombobox: React.FC = () => {
  const seed = useUIDSeed();
  const [filteredItems, setFilteredItems] = React.useState([...items]);

  const formPillState = useFormPillState();

  const {getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems} =
    useMultiSelectPrimitive({});

  const handleSelectItemOnClick = React.useCallback(
    (selectedItem) => {
      addSelectedItem(selectedItem);

      setFilteredItems((currentFilteredItems) => currentFilteredItems.filter((item) => item !== selectedItem));
    },
    [addSelectedItem, setFilteredItems]
  );

  const handleRemoveItemOnClick = React.useCallback(
    (selectedItem) => {
      removeSelectedItem(selectedItem);

      setFilteredItems((currentFilteredItems) => [...currentFilteredItems, selectedItem].sort());
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
    selectItem,
  } = useComboboxPrimitive({
    items: filteredItems,
    initialInputValue: '',
    onSelectedItemChange: ({selectedItem: selected}) => {
      if (selected != null) {
        handleSelectItemOnClick(selected);
      }

      selectItem(null as unknown as string);
    },
  });
  const uid = useUID();

  return (
    <>
      <Box marginBottom="space40" position="relative">
        <Label htmlFor={uid} {...getLabelProps()}>
          Choose a component
        </Label>
        <Box {...getComboboxProps({role: 'combobox'})}>
          <Input
            id={uid}
            type="text"
            {...getInputProps({
              ...getDropdownProps({
                preventKeyAction: isOpen,
                ...getToggleButtonProps({tabIndex: 0}),
              }),
            })}
            value={selectedItem || ''}
          />
        </Box>
        <ComboboxListbox hidden={!isOpen} {...getMenuProps()}>
          <ComboboxListboxGroup>
            {filteredItems.map((filteredItem, index) => (
              <ComboboxListboxOption
                highlighted={highlightedIndex === index}
                variant="default"
                {...getItemProps({item: filteredItem, index, key: seed(`filtered-item-${filteredItem}`)})}
              >
                {filteredItem}
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
                key: `selected-item-${item}`,
              })}
              tabIndex={null}
              {...formPillState}
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

ComboboxNonHooks.story = {
  name: 'Combobox - non-hooks',
};
