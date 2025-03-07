import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

function getFilteredItems(inputValue: string, addFiltersList: string[]): string[] {
  const lowerCasedInputValue = inputValue.toLowerCase();

  return addFiltersList.filter((item) => {
    return item.toLowerCase().includes(lowerCasedInputValue);
  });
}

const EmptyState = (): React.ReactElement<HTMLElement> => (
  <Box paddingY="space40" paddingX="space50">
    <Text as="span" fontStyle="italic" color="colorTextWeak">
      No results found
    </Text>
  </Box>
);

export type HostNameFilterProps = {
  label: string;
  items: string[];
  setSelectedCount: (count: number | null) => void;
  setSelectedMoreFilters: React.Dispatch<React.SetStateAction<Record<string, string | string[]>>>;
  selectedMoreFilters?: Record<string, string | string[]>;
};

export const HostNameFilter: React.FC<HostNameFilterProps> = ({
  label,
  items,
  setSelectedCount,
  setSelectedMoreFilters,
  selectedMoreFilters,
}) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, items as string[]), [inputValue, items]);

  const onSelectedItemsChange = React.useCallback(
    (comboboxItems: UseMultipleSelectionStateChange<Item>) => {
      setSelectedCount(comboboxItems?.selectedItems?.length || null);
      setSelectedMoreFilters((prev) => {
        return {
          ...prev,
          hostName: (comboboxItems.selectedItems as string[]) || [],
        };
      });
      return comboboxItems.selectedItems;
    },
    [setSelectedCount, setSelectedMoreFilters],
  );

  const state = useMultiselectCombobox({
    initialSelectedItems: (selectedMoreFilters && (selectedMoreFilters.hostName as Item[])) || [],
    onSelectedItemsChange,
  });

  React.useEffect(() => {
    state.setSelectedItems((selectedMoreFilters && (selectedMoreFilters.hostName as Item[])) || []);
  }, [selectedMoreFilters]);

  return (
    <Box>
      <MultiselectCombobox
        state={state}
        usePortal={false}
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
        <CheckboxGroup name={`recently-used-hostName-${useUID()}`} legend="Recently used">
          {(items as string[]).slice(0, 4).map((item) => {
            return (
              <Checkbox
                key={item}
                id={item + useUID()}
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
