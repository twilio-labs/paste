import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Card} from '@twilio-paste/card';
import {Text} from '@twilio-paste/text';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
import {useTheme} from '@twilio-paste/theme';
import {Combobox} from '../src';

const items = ['a', 'b', 'c'];

interface GroupedItem {
  letter: string;
  number: number;
}

const groupedItems = [
  {letter: 'a', number: 1},
  {letter: 'a', number: 2},
  {letter: 'b', number: 3},
  {letter: 'b', number: 4},
  {letter: 'b', number: 5},
  {letter: 'c', number: 6},
  {letter: 'd', number: 7},
];

const ShowCustomization: React.FC<React.ReactNode> = ({children}): React.ReactElement => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space50">
      <Card>{children}</Card>
      <Card>
        <CustomizationProvider
          theme={currentTheme}
          elements={{
            COMBOBOX_WRAPPER: {backgroundColor: 'colorBackgroundDark', fontFamily: 'fontFamilyCode'},
            COMBOBOX: {backgroundColor: 'colorBackgroundPrimaryLightest'},
            COMBOBOX_ELEMENT: {cursor: 'pointer'},
            COMBOBOX_CHEVRON_WRAPPER: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
            COMBOBOX_LISTBOX: {backgroundColor: 'colorBackgroundPrimaryLighter'},
            COMBOBOX_LIST: {backgroundColor: 'colorBackgroundPrimaryLight'},
            COMBOBOX_GROUPNAME: {fontFamily: 'fontFamilyText', cursor: 'help'},
            COMBOBOX_GROUPNAME_TEXT: {fontWeight: 'fontWeightLight'},
            COMBOBOX_LIST_ITEM: {backgroundColor: 'colorBackgroundPrimaryDark'},
            COMBOBOX_LIST_ITEM_TEXT: {color: 'colorTextWeakest', fontWeight: 'fontWeightBold'},
            HELP_TEXT: {color: 'colorTextWarningStrong'},
            COMBOBOX_PREFIX: {backgroundColor: 'colorBackgroundRequired', borderRadius: 'borderRadius20'},
            COMBOBOX_SUFFIX: {backgroundColor: 'colorBackgroundSubaccount', borderRadius: 'borderRadiusCircle'},
          }}
        >
          {children}
        </CustomizationProvider>
      </Card>
      <Card>
        <CustomizationProvider
          baseTheme="default"
          elements={{
            FOO_WRAPPER: {backgroundColor: 'colorBackgroundDark', fontFamily: 'fontFamilyCode'},
            FOO: {backgroundColor: 'colorBackgroundPrimaryLightest'},
            FOO_ELEMENT: {cursor: 'pointer'},
            FOO_CHEVRON_WRAPPER: {backgroundColor: 'colorBackgroundBrandHighlightWeakest'},
            FOO_LISTBOX: {backgroundColor: 'colorBackgroundPrimaryLighter'},
            FOO_LIST: {backgroundColor: 'colorBackgroundPrimaryLight'},
            FOO_GROUPNAME: {fontFamily: 'fontFamilyText', cursor: 'help'},
            FOO_GROUPNAME_TEXT: {fontWeight: 'fontWeightLight'},
            FOO_LIST_ITEM: {backgroundColor: 'colorBackgroundPrimaryDark'},
            FOO_LIST_ITEM_TEXT: {color: 'colorTextWeakest', fontWeight: 'fontWeightBold'},
            HELP_TEXT: {color: 'colorTextWarningStrong'},
            FOO_PREFIX: {backgroundColor: 'colorBackgroundRequired', borderRadius: 'borderRadius20'},
            FOO_SUFFIX: {backgroundColor: 'colorBackgroundSubaccount', borderRadius: 'borderRadiusCircle'},
          }}
        >
          {React.cloneElement(children as React.ReactElement, {element: 'FOO'})}
        </CustomizationProvider>
      </Card>
    </Stack>
  );
};

export const CustomizedCombobox = (): React.ReactElement => (
  <ShowCustomization>
    <Combobox items={items} labelText="Choose a letter:" helpText="This is the help text" />
  </ShowCustomization>
);

CustomizedCombobox.story = {
  name: 'Default',
};

export const CustomizedComboboxGroups = (): React.ReactElement => (
  <ShowCustomization>
    <Combobox
      items={groupedItems}
      groupItemsBy="letter"
      labelText="Choose a letter:"
      helpText="This is the help text"
      optionTemplate={(item: GroupedItem) => <div>{item.number}</div>}
      itemToString={(item: GroupedItem) => (item ? item.letter : '')}
    />
  </ShowCustomization>
);
CustomizedComboboxGroups.story = {
  name: 'With groups',
};

export const CustomizedComboboxBeforeAndAfter = (): React.ReactElement => (
  <ShowCustomization>
    <Combobox
      items={groupedItems}
      groupItemsBy="letter"
      labelText="Choose a letter:"
      helpText="This is the help text"
      optionTemplate={(item: GroupedItem) => <div>{item.number}</div>}
      itemToString={(item: GroupedItem) => (item ? item.letter : '')}
      insertBefore={<Text as="span">Z</Text>}
      insertAfter={<InformationIcon decorative={false} size="sizeIcon20" title="Get more info" />}
    />
  </ShowCustomization>
);
CustomizedComboboxBeforeAndAfter.story = {
  name: 'With prefix and suffix',
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Combobox/Customization',
  component: CustomizedCombobox,
};
