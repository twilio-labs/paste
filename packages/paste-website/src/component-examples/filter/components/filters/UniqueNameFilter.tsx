import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import type { usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
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
  onRemove,
}: {
  onApply?: (type: string, value: Item[]) => void;
  value?: string[];
  popover?: ReturnType<typeof usePopoverState>;
  onRemove?: () => void;
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

  const { setSelectedItems } = state;

  React.useEffect(() => {
    if (popover?.visible && value === undefined) {
      setSelectedItems([]);
    }
  }, [value, popover?.visible, setSelectedItems]);

  return (
    <Box>
      <MultiselectCombobox
        state={state}
        usePortal={false}
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
            setSelectedItems(sluggedItems);
          }
        }}
      />

      <Box marginTop="space70">
        <CheckboxGroup name={`recently-used-unique-filters-${useUID()}`} legend="Recently used">
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
                  setSelectedItems(selectedCheckedItems);
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
            onApply("uniqueName", state.selectedItems);
            popover.hide();
          }
        }}
        onClear={
          state.selectedItems.length > 0
            ? () => {
                setInputValue("");
                setSelectedItems([]);
              }
            : null
        }
        onRemove={onRemove}
      />
    </Box>
  );
};
