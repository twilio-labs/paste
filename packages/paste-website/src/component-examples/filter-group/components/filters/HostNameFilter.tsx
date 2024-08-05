import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { Text } from "@twilio-paste/text";
import React from "react";

import { slugify } from "../../helpers";

function getFilteredItems(inputValue: string, addFiltersList: string[]): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return addFiltersList.filter((item) => {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const EmptyState = (): React.ReactElement => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

const hostNameFilters = [
  "Luffy Lawson",
  "Brooks Benson",
  "Tony Tony Turner",
  "Sanji Stevens",
  "Robin Rye",
  "Nami Nelson",
  "Tony Tony Turner",
];

export const HostNameFilter: React.FC<{
  label: string;
  setSelectedCount: (count: number | null) => void;
}> = ({ label, setSelectedCount }) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, hostNameFilters), [inputValue]);

  const onSelectedItemsChange = React.useCallback(
    (comboboxItems: UseMultipleSelectionStateChange<Item>) => {
      setSelectedCount(comboboxItems?.selectedItems?.length || null);
      return comboboxItems.selectedItems;
    },
    [setSelectedCount],
  );

  const state = useMultiselectCombobox({
    initialSelectedItems: [],
    onSelectedItemsChange,
  });

  return (
    <Box>
      <MultiselectCombobox
        state={state}
        labelText={label}
        selectedItemsLabelText="Selected Host name filters"
        items={filteredItems}
        emptyState={EmptyState}
        onInputValueChange={({ inputValue: newInputValue = "" }) => {
          setInputValue(newInputValue);
        }}
        onSelectedItemsChange={(comboboxItems) => {
          const { selectedItems } = comboboxItems;
          if (selectedItems) {
            const sluggedItems = selectedItems.map((item) => slugify(item as string));
            state.setSelectedItems(sluggedItems);
          }
        }}
      />

      <Box marginTop="space70">
        <CheckboxGroup name="recently-used-host-name" legend="Recently used">
          {hostNameFilters.slice(0, 4).map((item) => {
            return (
              <Checkbox
                key={item}
                id={item}
                value={item}
                checked={state.selectedItems.includes(item)}
                onChange={(e) => {
                  let selectedCheckedItems = [];

                  if (e.target.checked) {
                    selectedCheckedItems = [...state.selectedItems, item];
                  } else {
                    selectedCheckedItems = state.selectedItems.filter((selectedItem) => selectedItem !== item);
                  }
                  state.setSelectedItems(selectedCheckedItems);
                }}
              >
                {item}
              </Checkbox>
            );
          })}
        </CheckboxGroup>
      </Box>

      <Box marginTop="space70">
        <Button
          variant="link"
          onClick={() => {
            state.setSelectedItems([]);
          }}
        >
          Clear all
        </Button>
      </Box>
    </Box>
  );
};
