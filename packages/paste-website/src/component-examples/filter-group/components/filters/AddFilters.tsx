import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import type { usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import React from "react";

const items = ["Room SID", "Unique Name", "Participants"];

function getFilteredItems(inputValue: string): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return items.filter(function filterItems(item) {
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

export const AddFilters: React.FC = ({
  onApply,
  popover,
}: {
  onApply?: (type: string, value: Item[]) => void;
  popover?: ReturnType<typeof usePopoverState>;
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue), [inputValue]);

  const onSelectedItemsChange = React.useCallback((comboboxItems: UseMultipleSelectionStateChange<Item>) => {
    const { selectedItems } = comboboxItems;
  }, []);

  const state = useMultiselectCombobox({
    initialSelectedItems: [],
    onSelectedItemsChange,
  });

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
      />

      <Box marginTop="space70">
        <CheckboxGroup
          name="rec-filters"
          legend="Recommended filters"
          helpText="Info that helps a user with this field."
        >
          {items.map((item) => (
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
          ))}
        </CheckboxGroup>
      </Box>

      <Box marginTop="space70">
        <ButtonGroup>
          <Button
            variant="primary"
            onClick={() => {
              if (onApply && popover) {
                onApply("add-filter", state.selectedItems);
                popover.hide();
              }
            }}
          >
            Apply
          </Button>
          {state.selectedItems.length > 0 ? (
            <Button
              variant="link"
              onClick={() => {
                setInputValue("");
                state.setSelectedItems([]);
              }}
            >
              Clear all
            </Button>
          ) : (
            <></>
          )}
        </ButtonGroup>
      </Box>
    </Box>
  );
};
