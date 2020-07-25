import * as React from 'react';
import {uid, useUID} from 'react-uid';
import _ from 'lodash';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {FormLabel} from '@twilio-paste/form';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {useCombobox, Combobox, ComboboxInputWrapper, ComboboxListbox, ComboboxListboxOption} from '../src';

const items = [
  'Alert',
  'Anchor',
  'Button',
  'Card',
  'Heading',
  'A component with a really really really really really really really really long name',
  'List',
  'Modal',
  'Paragraph',
];

const iconItems = [
  {label: 'Alert', iconRight: true},
  {label: 'Anchor'},
  {label: 'Button', iconLeft: true},
  {label: 'Card', iconRight: true},
  {label: 'Heading'},
  {label: 'List', iconRight: true},
  {label: 'Modal', iconLeft: true},
  {label: 'Paragraph', iconRight: true},
];

const objectItems = [
  {code: 'AD', label: 'Andorra', phone: '376'},
  {code: 'AE', label: 'United Arab Emirates', phone: '971'},
  {code: 'AF', label: 'Afghanistan', phone: '93'},
  {code: 'AG', label: 'Antigua and Barbuda', phone: '1-268'},
  {code: 'AI', label: 'Anguilla', phone: '1-264'},
  {code: 'AL', label: 'Albania', phone: '355'},
  {code: 'AM', label: 'Armenia', phone: '374'},
  {code: 'AO', label: 'Angola', phone: '244'},
  {code: 'AQ', label: 'Antarctica', phone: '672'},
  {code: 'AR', label: 'Argentina', phone: '54'},
  {code: 'AS', label: 'American Samoa', phone: '1-684'},
  {code: 'AT', label: 'Austria', phone: '43'},
];

const groupedItems = [
  {group: 'Components', label: 'Alert'},
  {group: 'Components', label: 'Anchor'},
  {group: 'Components', label: 'Button'},
  {group: 'Components', label: 'Card'},
  {group: 'Components', label: 'Heading'},
  {group: 'Components', label: 'List'},
  {group: 'Components', label: 'Modal'},
  {group: 'Components', label: 'Paragraph'},
  {group: 'Primitives', label: 'Box'},
  {group: 'Primitives', label: 'Text'},
  {group: 'Primitives', label: 'Non-modal dialog'},
  {group: 'Layout', label: 'Grid'},
  {label: 'Design Tokens'},
];

const CustomInputCombobox: React.FC<{}> = () => {
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
  } = useCombobox({items});
  const fieldID = useUID();
  return (
    <Box position="relative">
      <FormLabel htmlFor={fieldID} {...getLabelProps()}>
        Choose a component:
      </FormLabel>
      <ComboboxInputWrapper {...getComboboxProps({role: 'combobox'})}>
        <input
          id={fieldID}
          type="text"
          {...getInputProps()}
          {...getToggleButtonProps({tabIndex: 0})}
          value={selectedItem || ''}
        />
      </ComboboxInputWrapper>
      <ComboboxListbox {...getMenuProps()}>
        {isOpen &&
          items.map((item, index) => (
            <ComboboxListboxOption
              {...getItemProps({item, index})}
              highlighted={highlightedIndex === index}
              key={uid(item)}
            >
              {item}
            </ComboboxListboxOption>
          ))}
      </ComboboxListbox>
    </Box>
  );
};

storiesOf('Components|Combobox', module)
  .addDecorator(withKnobs)
  .add('Combobox', () => {
    return (
      <>
        <Combobox
          items={iconItems}
          labelText="Choose a component:"
          helpText="This is the help text"
          optionTemplate={(item: any) => (
            <MediaObject verticalAlign="center">
              {item.iconLeft ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} title="information" />
                </MediaFigure>
              ) : null}

              <MediaBody>{item.label}</MediaBody>
              {item.iconRight ? (
                <MediaFigure spacing="space20">
                  <InformationIcon decorative={false} title="information" />
                </MediaFigure>
              ) : null}
            </MediaObject>
          )}
          itemToString={item => (item ? String(item.label) : null)}
        />
      </>
    );
  })
  .add('Combobox - Autocomplete', () => {
    const [inputItems, setInputItems] = React.useState(items);
    return (
      <>
        <Combobox
          autocomplete
          items={inputItems}
          helpText="This is the help text"
          labelText="Choose a component:"
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) {
              setInputItems(items.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
            }
          }}
        />
      </>
    );
  })
  .add('Combobox - Required', () => {
    return (
      <>
        <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" required />
      </>
    );
  })
  .add('Combobox - Error', () => {
    return (
      <>
        <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" hasError />
      </>
    );
  })
  .add('Combobox - Disabled', () => {
    return (
      <>
        <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" disabled />
      </>
    );
  })
  .add('Combobox - Insert before and after', () => {
    return (
      <>
        <Combobox
          items={items}
          insertBefore={<div>$10.99</div>}
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon decorative={false} title="Get more info" />
            </Anchor>
          }
          labelText="Choose a component:"
          helpText="This is the help text"
        />
      </>
    );
  })
  .add('Combobox - Object', () => {
    const [inputItems, setInputItems] = React.useState(objectItems);
    return (
      <>
        <Combobox
          autocomplete
          items={inputItems}
          labelText="Choose a country:"
          helpText="This is the help text"
          optionTemplate={(item: any) => (
            <div>
              {item.code} | {item.label} | {item.phone}
            </div>
          )}
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) {
              setInputItems(
                _.filter(objectItems, (item: any) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
              );
            }
          }}
          itemToString={item => (item ? item.label : null)}
        />
      </>
    );
  })
  .add('Combobox - Custom Input', () => {
    return <CustomInputCombobox />;
  })
  .add('Combobox - overflow long value', () => {
    const [inputItems, setInputItems] = React.useState(items);
    return (
      <Box maxWidth="size40">
        <Combobox
          items={inputItems}
          helpText="This is the help text"
          labelText="Choose a component:"
          initialSelectedItem={inputItems[5]}
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) {
              setInputItems(items.filter(item => item.toLowerCase().startsWith(inputValue.toLowerCase())));
            }
          }}
        />
      </Box>
    );
  })
  .add('Combobox - Controlled', () => {
    const [value, setValue] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState();
    const [inputItems, setInputItems] = React.useState(objectItems);
    return (
      <>
        <Combobox
          autocomplete
          items={inputItems}
          labelText="Choose a country:"
          helpText="This is the help text"
          optionTemplate={(item: any) => (
            <div>
              {item.code} | {item.label} | {item.phone}
            </div>
          )}
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) {
              setInputItems(
                _.filter(objectItems, (item: any) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
              );
              setValue(inputValue);
            }
          }}
          itemToString={item => (item ? item.label : null)}
          selectedItem={selectedItem}
          onSelectedItemChange={changes => {
            setSelectedItem(changes.selectedItem);
          }}
          inputValue={value}
        />
        <Box paddingTop="space70">
          Input value state: {JSON.stringify(value)}
          <br />
          Selected item state: {JSON.stringify(selectedItem)}
        </Box>
      </>
    );
  })
  .add('Combobox - Option groups', () => {
    return (
      <Combobox
        groupItemsBy="group"
        items={groupedItems}
        labelText="Choose a component:"
        helpText="This is group"
        optionTemplate={(item: any) => <div>{item.label}</div>}
        itemToString={item => (item ? item.label : null)}
      />
    );
  })
  .add('Combobox - Option groups typeahead', () => {
    const [inputItems, setInputItems] = React.useState(groupedItems);
    return (
      <Combobox
        autocomplete
        groupItemsBy="group"
        items={inputItems}
        labelText="Choose a component:"
        helpText="This is the help text"
        optionTemplate={(item: any) => <div>{item.label}</div>}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(
              _.filter(groupedItems, (item: any) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
            );
          }
        }}
        itemToString={item => (item ? item.label : null)}
      />
    );
  });
