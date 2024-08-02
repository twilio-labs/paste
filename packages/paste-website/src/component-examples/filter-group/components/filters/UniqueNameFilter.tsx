import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import type { usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import React from "react";

import { slugify } from "../../helpers";
import { FilterAction } from "../FilterAction";

function getFilteredItems(inputValue: string, uniqueNameList: string[]): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return uniqueNameList.filter((item) => {
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

const uniqueNameList = [
  "Test Room",
  "Quick Sync",
  "My 1:1",
  "Team Meeting",
  "All Hands",
  "Project Meeting",
  "Test Room 2",
];

export const UniqueNameFilter: React.FC = ({
  onApply,
  value,
  popover,
}: {
  onApply?: (type: string, value: Item[]) => void;
  value?: string[];
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const [inputValue, setInputValue] = React.useState("");

  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, uniqueNameList), [inputValue]);

  const onSelectedItemsChange = React.useCallback((comboboxItems: UseMultipleSelectionStateChange<Item>) => {
    return comboboxItems.selectedItems;
  }, []);

  const state = useMultiselectCombobox({
    initialSelectedItems: [],
    onSelectedItemsChange,
  });

  /*
   * this will be used to set the selected items when the popover is triggered,
   * for it to work, we need to fix popover closing on multiselect click
   */

  /*
   * React.useEffect(() => {
   *   if (popover.visible) {
   *  state.setSelectedItems(value.map((item) => filterMap[item].label));
   * }
   * }, [popover.visible]);
   */

  return (
    <Box>
      <MultiselectCombobox
        state={state}
        labelText="Add filter"
        selectedItemsLabelText="Selected filters"
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
        <CheckboxGroup name="recently-used-filters" legend="Recently used">
          {uniqueNameList.slice(0, 3).map((item) => {
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

      <FilterAction
        onApply={() => {
          if (onApply && popover) {
            if (state.selectedItems.length === 0) {
              popover.hide();
              return;
            }

            onApply("unique-name", state.selectedItems);
            popover.hide();
          }
        }}
        clearCondition={state.selectedItems.length > 0}
        onClear={() => {
          setInputValue("");
          state.setSelectedItems([]);
        }}
      />
    </Box>
  );
};
