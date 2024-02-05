import { Box } from "@twilio-paste/box";
import { MultiselectCombobox } from "@twilio-paste/combobox";
import { Text } from "@twilio-paste/text";
import * as React from "react";

const comboboxItems = ["Javascript", "Python", "Go", "Java", "PHP", "C#", "Swift", "Scala", "HTML", "CSS"];

const getFilteredItems = (inputValue: string): string[] => {
  const lowerCasedInputValue = inputValue.toLowerCase();
  return comboboxItems.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
};

const SampleEmptyState = (): React.ReactElement => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

export const ComboboxShowcase: React.FC = () => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);
  return (
    <MultiselectCombobox
      labelText="Code sample languages"
      selectedItemsLabelText="Selected code sample languages"
      items={filteredItems}
      initialSelectedItems={comboboxItems.slice(1, 3)}
      emptyState={SampleEmptyState}
      onInputValueChange={({ inputValue: newInputValue = "" }) => {
        setInputValue(newInputValue);
      }}
    />
  );
};
