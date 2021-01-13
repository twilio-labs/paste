import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {FormLabel, FormInput} from '@twilio-paste/form';
import {ComboboxPrimitive, useComboboxPrimitive} from '../src';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Combobox',
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
      <FormLabel htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </FormLabel>
      <Box {...getComboboxProps({role: 'combobox'})}>
        <FormInput
          id={uid}
          type="text"
          {...getInputProps()}
          {...getToggleButtonProps({tabIndex: 0})}
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
      setInputItems(items.filter((item) => item.toLowerCase().startsWith(inputValue.toLowerCase())));
    },
  });
  const uid = useUID();
  return (
    <>
      <FormLabel htmlFor={uid} {...getLabelProps()}>
        Choose a component:
      </FormLabel>
      <Box display="flex" {...getComboboxProps()}>
        <FormInput id={uid} type="text" {...getInputProps()} />
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
          <FormLabel {...getLabelProps()}>Choose a component:</FormLabel>
          <Box
            display="flex"
            // @ts-ignore
            {...getRootProps({}, {suppressRefError: true})}
          >
            <FormInput type="text" {...getInputProps()} />
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
                          backgroundColor: highlightedIndex === index ? '#bde4ff' : null,
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

ComboboxNonHooks.story = {
  name: 'Combobox - non-hooks',
};
