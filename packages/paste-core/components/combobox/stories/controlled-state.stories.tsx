import * as React from 'react';
import _ from 'lodash';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import type {StoryFn} from '@storybook/react';

import {Combobox, useCombobox} from '../src';

interface ObjectItem {
  code: string;
  label: string;
  phone: string;
}
const objectItems: ObjectItem[] = [
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox',
  component: Combobox,
};

export const ComboboxControlledUsingState: StoryFn = () => {
  const [value, setValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<ObjectItem>({} as ObjectItem);
  const [inputItems, setInputItems] = React.useState<ObjectItem[] | never[]>(objectItems as ObjectItem[]);
  const {reset, ...state} = useCombobox<ObjectItem>({
    items: inputItems,
    itemToString: (item) => (item ? item.label : ''),
    onSelectedItemChange: (changes) => {
      if (changes.selectedItem != null) {
        setSelectedItem(changes.selectedItem);
      }
    },
    onInputValueChange: ({inputValue}) => {
      if (inputValue !== undefined) {
        setInputItems(
          _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
        );
        setValue(inputValue);
      }
    },
    inputValue: value,
    selectedItem,
  });
  return (
    <>
      <Combobox
        state={{...state, reset}}
        items={inputItems}
        autocomplete
        itemToString={(item) => (item ? item.label : '')}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        insertAfter={
          <Button
            variant="link"
            size="reset"
            onClick={() => {
              reset();
            }}
          >
            <CloseIcon decorative={false} title="Clear" />
          </Button>
        }
      />
      <Box paddingTop="space70">
        Input value state: {JSON.stringify(value)}
        <br />
        Selected item state: {JSON.stringify(selectedItem)}
      </Box>
    </>
  );
};

ComboboxControlledUsingState.story = {
  name: 'Combobox - Controlled using state',
};
