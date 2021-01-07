import * as React from 'react';
import {useUID} from '@twilio-paste/uid-library';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {FormLabel, FormInput} from '@twilio-paste/form';
import {ComboboxPrimitive, useComboboxPrimitive} from '../src';

const items = ['Alert', 'Anchor', 'Button', 'Card', 'Heading', 'List', 'Modal', 'Paragraph'];

/* eslint-disable react/no-array-index-key */
const ComboxBoxPrimitive: React.FC = () => {
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

const AutocompleteComboboxPrimitive: React.FC = () => {
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
      setInputItems(items.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
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

const NonHookComboboxPrimitive: React.FC = () => {
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
                  .filter(item => !inputValue || item.includes(inputValue))
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
/* eslint-enable */

storiesOf('Primitives|Combobox', module)
  .addDecorator(withKnobs)
  .add('Dropdown Combobox', () => {
    return <ComboxBoxPrimitive />;
  })
  .add('Autocomplete Combobox', () => {
    return <AutocompleteComboboxPrimitive />;
  })
  .add('Combobox - non-hooks', () => {
    return <NonHookComboboxPrimitive />;
  });
