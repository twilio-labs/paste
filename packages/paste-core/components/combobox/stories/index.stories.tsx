import * as React from 'react';
import _ from 'lodash';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Anchor} from '@twilio-paste/anchor';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import {Text} from '@twilio-paste/text';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {AttachIcon} from '@twilio-paste/icons/esm/AttachIcon';
import {CloseIcon} from '@twilio-paste/icons/esm/CloseIcon';
import {useCombobox, Combobox} from '../src';

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

interface IconItems {
  label: string;
  iconRight?: boolean;
  iconLeft?: undefined;
}
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

interface ObjectItem {
  code: string;
  label: string;
  phone: string;
}
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

interface GroupedItem {
  group?: string;
  label: string;
}
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

storiesOf('Components|Combobox', module)
  .addDecorator(withKnobs)
  .add('Combobox', () => {
    return (
      <Combobox
        items={iconItems}
        labelText="Choose a component:"
        helpText="This is the help text"
        optionTemplate={(item: IconItems) => (
          <MediaObject verticalAlign="center">
            {item.iconLeft ? (
              <MediaFigure spacing="space20">
                <InformationIcon decorative={false} size="sizeIcon20" title="information" />
              </MediaFigure>
            ) : null}

            <MediaBody>{item.label}</MediaBody>
            {item.iconRight ? (
              <MediaFigure spacing="space20">
                <InformationIcon decorative={false} size="sizeIcon20" title="information" />
              </MediaFigure>
            ) : null}
          </MediaObject>
        )}
        itemToString={(item: IconItems) => (item ? String(item.label) : null)}
      />
    );
  })
  .add('Combobox - Inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={iconItems}
          labelText="Choose a component:"
          helpText="This is the help text"
          optionTemplate={(item: IconItems) => (
            <MediaObject verticalAlign="center">
              {item.iconLeft ? (
                <MediaFigure spacing="space20">
                  <AttachIcon decorative={false} size="sizeIcon20" title="product" />
                </MediaFigure>
              ) : null}

              <MediaBody>{item.label}</MediaBody>
              {item.iconRight ? (
                <MediaFigure spacing="space20">
                  <AttachIcon decorative={false} size="sizeIcon20" title="product 2" />
                </MediaFigure>
              ) : null}
            </MediaObject>
          )}
          itemToString={(item: IconItems) => (item ? String(item.label) : null)}
          variant="inverse"
        />
      </Box>
    );
  })
  .add('Combobox - Autocomplete', () => {
    const [inputItems, setInputItems] = React.useState(items);
    return (
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
    );
  })
  .add('Combobox - Required', () => {
    return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" required />;
  })
  .add('Combobox - Required inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={items}
          labelText="Choose a component:"
          helpText="This is the help text"
          required
          variant="inverse"
        />
      </Box>
    );
  })
  .add('Combobox - Error', () => {
    return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" hasError />;
  })
  .add('Combobox - Error inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={items}
          labelText="Choose a component:"
          helpText="This is the help text"
          hasError
          variant="inverse"
        />
      </Box>
    );
  })
  .add('Combobox - Disabled', () => {
    return <Combobox items={items} labelText="Choose a component:" helpText="This is the help text" disabled />;
  })
  .add('Combobox - Disabled inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={items}
          labelText="Choose a component:"
          helpText="This is the help text"
          disabled
          variant="inverse"
        />
      </Box>
    );
  })
  .add('Combobox - Insert before and after', () => {
    return (
      <Combobox
        items={items}
        insertBefore={<div>$10.99</div>}
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
      />
    );
  })
  .add('Combobox - Disabled insert before and after', () => {
    return (
      <Combobox
        items={items}
        insertBefore={<div>$10.99</div>}
        insertAfter={
          <Anchor href="#" display="flex">
            <InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />
          </Anchor>
        }
        labelText="Choose a component:"
        helpText="This is the help text"
        disabled
      />
    );
  })
  .add('Combobox - Insert before and after inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={items}
          insertBefore={
            <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
              $10.99
            </Text>
          }
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          labelText="Choose a component:"
          helpText="This is the help text"
          variant="inverse"
        />
      </Box>
    );
  })
  .add('Combobox - Disabled insert before and after inverse', () => {
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Combobox
          items={items}
          insertBefore={
            <Text as="span" color="colorTextInverse" lineHeight="lineHeight20">
              $10.99
            </Text>
          }
          insertAfter={
            <Anchor href="#" display="flex">
              <InformationIcon color="colorTextInverse" decorative={false} size="sizeIcon20" title="Get more info" />
            </Anchor>
          }
          labelText="Choose a component:"
          helpText="This is the help text"
          variant="inverse"
          disabled
        />
      </Box>
    );
  })
  .add('Combobox - Object', () => {
    const [inputItems, setInputItems] = React.useState(objectItems);
    return (
      <Combobox
        autocomplete
        items={inputItems}
        labelText="Choose a country:"
        helpText="This is the help text"
        optionTemplate={(item: ObjectItem) => (
          <div>
            {item.code} | {item.label} | {item.phone}
          </div>
        )}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(
              _.filter(objectItems, (item: ObjectItem) => item.label.toLowerCase().startsWith(inputValue.toLowerCase()))
            );
          }
        }}
        itemToString={(item: ObjectItem) => (item ? item.label : null)}
      />
    );
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
    const [selectedItem, setSelectedItem] = React.useState({});
    const [inputItems, setInputItems] = React.useState(objectItems);
    return (
      <>
        <Combobox
          autocomplete
          items={inputItems}
          labelText="Choose a country:"
          helpText="This is the help text"
          optionTemplate={(item: ObjectItem) => (
            <div>
              {item.code} | {item.label} | {item.phone}
            </div>
          )}
          onInputValueChange={({inputValue}) => {
            if (inputValue !== undefined) {
              setInputItems(
                _.filter(objectItems, (item: ObjectItem) =>
                  item.label.toLowerCase().startsWith(inputValue.toLowerCase())
                )
              );
              setValue(inputValue);
            }
          }}
          itemToString={(item: ObjectItem) => (item ? item.label : null)}
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
  .add('Combobox - Controlled using state', () => {
    const [value, setValue] = React.useState('');
    const [selectedItem, setSelectedItem] = React.useState({});
    const [inputItems, setInputItems] = React.useState(objectItems);
    const {reset, ...state} = useCombobox({
      items: inputItems,
      itemToString: item => (item ? item.label : null),
      onSelectedItemChange: changes => {
        setSelectedItem(changes.selectedItem);
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
    });
    return (
      <>
        <Combobox
          state={state}
          items={inputItems}
          autocomplete
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
  })
  .add('Combobox - Open', () => {
    return (
      <Combobox
        items={objectItems}
        labelText="Choose a country:"
        initialIsOpen
        optionTemplate={(item: ObjectItem) => <div>{item.label}</div>}
        itemToString={(item: ObjectItem) => (item ? item.label : null)}
      />
    );
  })
  .add('Combobox - Option groups', () => {
    return (
      <Combobox
        groupItemsBy="group"
        items={groupedItems}
        labelText="Choose a component:"
        helpText="This is group"
        optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
        itemToString={(item: GroupedItem) => (item ? item.label : null)}
      />
    );
  })
  .add('Combobox - Option groups open', () => {
    return (
      <Combobox
        groupItemsBy="group"
        items={groupedItems}
        labelText="Choose a component:"
        helpText="This is group"
        initialIsOpen
        optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
        groupLabelTemplate={(groupName: string) => {
          if (groupName === 'Components') {
            return (
              <MediaObject verticalAlign="center">
                <MediaFigure spacing="space20">
                  <AttachIcon color="colorTextIcon" decorative={false} title="icon" />
                </MediaFigure>
                <MediaBody>{groupName}</MediaBody>
              </MediaObject>
            );
          }
          return groupName;
        }}
        itemToString={(item: GroupedItem) => (item ? item.label : null)}
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
        optionTemplate={(item: GroupedItem) => <div>{item.label}</div>}
        onInputValueChange={({inputValue}) => {
          if (inputValue !== undefined) {
            setInputItems(
              _.filter(groupedItems, (item: GroupedItem) =>
                item.label.toLowerCase().startsWith(inputValue.toLowerCase())
              )
            );
          }
        }}
        itemToString={(item: GroupedItem) => (item ? item.label : null)}
      />
    );
  });
