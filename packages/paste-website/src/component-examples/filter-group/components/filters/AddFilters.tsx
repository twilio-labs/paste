import { Box } from "@twilio-paste/box";
import { MultiselectCombobox } from "@twilio-paste/combobox";
import type { usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import React from "react";

const items = ["Alert", "Anchor", "Button", "Card", "Heading", "List", "Modal", "Paragraph", "Popover", "Tooltip"];

function getFilteredItems(inputValue): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const SampleEmptyState = (): React.ReactElement => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

export const AddFilters: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (
    type: string,
    value: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    },
  ) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  return (
    <Box>
      <MultiselectCombobox
        labelText="Choose a Paste component"
        selectedItemsLabelText="Selected Paste components"
        helpText="Paste components are the building blocks of your product UI."
        items={filteredItems}
        initialSelectedItems={items.slice(1, 3)}
        emptyState={SampleEmptyState}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(selectedItems) => {
          console.log(selectedItems);
        }}
      />
    </Box>
  );
};
