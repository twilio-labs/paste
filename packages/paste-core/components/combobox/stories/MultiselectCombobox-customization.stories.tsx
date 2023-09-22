import type { StoryFn } from "@storybook/react";
import { Card } from "@twilio-paste/card";
import { CustomizationProvider } from "@twilio-paste/customization";
import { InformationIcon } from "@twilio-paste/icons/esm/InformationIcon";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { MultiselectCombobox } from "../src";

const items = ["a", "b", "c"];
const initialSelectedItems = [items[0], items[1]];

interface GroupedItem {
  letter: string;
  number: number;
}

const groupedItems = [
  { letter: "a", number: 1 },
  { letter: "a", number: 2 },
  { letter: "b", number: 3 },
  { letter: "b", number: 4 },
  { letter: "b", number: 5 },
  { letter: "c", number: 6 },
  { letter: "d", number: 7 },
];
const initialSelectedGroupedItems = [groupedItems[0], groupedItems[1], groupedItems[2]];

const ShowCustomization: React.FC<React.PropsWithChildren<{ isTestEnvironment: boolean }>> = ({
  isTestEnvironment,
  children,
}): React.ReactElement => {
  const currentTheme = useTheme();
  return (
    <Stack orientation="vertical" spacing="space50">
      <Card>{children}</Card>
      <Card>
        <CustomizationProvider
          disableAnimations={isTestEnvironment}
          theme={currentTheme}
          elements={{
            MULTISELECT_COMBOBOX_WRAPPER: {
              backgroundColor: "colorBackgroundWarningWeakest",
              fontFamily: "fontFamilyCode",
            },
            MULTISELECT_COMBOBOX: { backgroundColor: "colorBackground" },
            MULTISELECT_COMBOBOX_PILL_GROUP: { backgroundColor: "colorBackgroundWarning" },
            MULTISELECT_COMBOBOX_PILL: { backgroundColor: "colorBackgroundWarningWeakest" },
            MULTISELECT_COMBOBOX_ELEMENT: { cursor: "pointer" },
            MULTISELECT_COMBOBOX_CHEVRON_WRAPPER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
            MULTISELECT_COMBOBOX_LISTBOX: { backgroundColor: "colorBackgroundPrimaryWeaker" },
            MULTISELECT_COMBOBOX_LIST: { backgroundColor: "colorBackgroundPrimaryWeak" },
            MULTISELECT_COMBOBOX_GROUPNAME: { fontFamily: "fontFamilyText", cursor: "help" },
            MULTISELECT_COMBOBOX_GROUPNAME_TEXT: { fontWeight: "fontWeightLight" },
            MULTISELECT_COMBOBOX_LIST_ITEM: { backgroundColor: "colorBackgroundPrimaryStrong" },
            MULTISELECT_COMBOBOX_LIST_ITEM_TEXT: { color: "colorTextWeakest", fontWeight: "fontWeightBold" },
            MULTISELECT_COMBOBOX_HELP_TEXT: { color: "colorTextWarningStrong" },
            MULTISELECT_COMBOBOX_PREFIX: { backgroundColor: "colorBackgroundRequired", borderRadius: "borderRadius20" },
            MULTISELECT_COMBOBOX_SUFFIX: {
              backgroundColor: "colorBackgroundSubaccount",
              borderRadius: "borderRadiusCircle",
            },
          }}
        >
          {children}
        </CustomizationProvider>
      </Card>
      <Card>
        <CustomizationProvider
          disableAnimations={isTestEnvironment}
          baseTheme="default"
          elements={{
            FOO_WRAPPER: { backgroundColor: "colorBackgroundWarningWeakest", fontFamily: "fontFamilyCode" },
            FOO: { backgroundColor: "colorBackground" },
            FOO_PILL_GROUP: { backgroundColor: "colorBackgroundWarning" },
            FOO_PILL: { backgroundColor: "colorBackgroundWarningWeakest" },
            FOO_ELEMENT: { cursor: "pointer" },
            FOO_CHEVRON_WRAPPER: { backgroundColor: "colorBackgroundBrandHighlightWeakest" },
            FOO_LISTBOX: { backgroundColor: "colorBackgroundPrimaryWeaker" },
            FOO_LIST: { backgroundColor: "colorBackgroundPrimaryWeak" },
            FOO_GROUPNAME: { fontFamily: "fontFamilyText", cursor: "help" },
            FOO_GROUPNAME_TEXT: { fontWeight: "fontWeightLight" },
            FOO_LIST_ITEM: { backgroundColor: "colorBackgroundPrimaryStrong" },
            FOO_LIST_ITEM_TEXT: { color: "colorTextWeakest", fontWeight: "fontWeightBold" },
            HELP_TEXT: { color: "colorTextWarningStrong" },
            FOO_PREFIX: { backgroundColor: "colorBackgroundRequired", borderRadius: "borderRadius20" },
            FOO_SUFFIX: { backgroundColor: "colorBackgroundSubaccount", borderRadius: "borderRadiusCircle" },
          }}
        >
          {React.cloneElement(children as React.ReactElement, { element: "FOO" })}
        </CustomizationProvider>
      </Card>
    </Stack>
  );
};

export const CustomizedCombobox: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization isTestEnvironment={isTestEnvironment}>
    <MultiselectCombobox
      items={items}
      labelText="Choose a letter"
      selectedItemsLabelText="Selected letters:"
      helpText="Now I know my ABCs, next time won't you sing with me?"
      initialSelectedItems={initialSelectedItems}
    />
  </ShowCustomization>
);

CustomizedCombobox.storyName = "MultiselectCombobox - Default";

export const CustomizedComboboxGroups: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization isTestEnvironment={isTestEnvironment}>
    <MultiselectCombobox
      items={groupedItems}
      groupItemsBy="letter"
      labelText="Choose a letter"
      selectedItemsLabelText="Selected letters:"
      helpText="Now I know my ABCs, next time won't you sing with me?"
      optionTemplate={(item: GroupedItem) => <div>{item.number}</div>}
      itemToString={(item: GroupedItem) => (item ? `${item.number}` : "")}
      initialSelectedItems={initialSelectedGroupedItems}
    />
  </ShowCustomization>
);
CustomizedComboboxGroups.storyName = "MultiselectCombobox - With groups";

export const CustomizedComboboxBeforeAndAfter: StoryFn = (_args, { parameters: { isTestEnvironment } }) => (
  <ShowCustomization isTestEnvironment={isTestEnvironment}>
    <MultiselectCombobox
      items={groupedItems}
      groupItemsBy="letter"
      labelText="Choose a letter"
      selectedItemsLabelText="Selected letters:"
      helpText="Now I know my ABCs, next time won't you sing with me?"
      optionTemplate={(item: GroupedItem) => <div>{item.number}</div>}
      itemToString={(item: GroupedItem) => (item ? `${item.number}` : "")}
      insertBefore={<Text as="span">Z</Text>}
      insertAfter={<InformationIcon decorative={false} size="sizeIcon20" title="Get more info" color="colorTextIcon" />}
      initialSelectedItems={initialSelectedGroupedItems}
    />
  </ShowCustomization>
);
CustomizedComboboxBeforeAndAfter.storyName = "MultiselectCombobox - With prefix and suffix";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Combobox/Customization - MultiselectCombobox",
  component: CustomizedCombobox,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};
