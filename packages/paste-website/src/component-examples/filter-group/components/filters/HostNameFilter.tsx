import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { Text } from "@twilio-paste/text";
import React from "react";

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

export type HostNameFilterProps = {
  label: string;
  items: string[] | { label: string; value: string }[];
  setSelectedCount: (count: number | null) => void;
};

export const HostNameFilter: React.FC<HostNameFilterProps> = ({ label, items, setSelectedCount }) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, items as string[]), [inputValue, items]);

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
          state.setSelectedItems(selectedItems || []);
        }}
      />

      <Box marginTop="space70">
        <CheckboxGroup name="recently-used-host-name" legend="Recently used">
          {(items as string[]).slice(0, 4).map((item) => {
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
