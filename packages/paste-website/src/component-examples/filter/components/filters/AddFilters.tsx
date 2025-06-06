import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer, usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import { useUID } from "@twilio-paste/uid-library";
import React from "react";

import type { FilterListType, FilterMapType } from "../../types";
import { FilterAction } from "../FilterAction";

function getFilteredItems(inputValue: string, addFiltersList: FilterListType): FilterListType {
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

export const AddFilters: React.FC<{
  onApply?: (type: string, value: Item[]) => void;
  addFiltersList: FilterListType;
  filterMap: FilterMapType;
  recommendedFiltersList?: FilterListType;
  value: string[];
}> = ({ onApply, addFiltersList, filterMap, recommendedFiltersList, value }) => {
  const [inputValue, setInputValue] = React.useState("");

  const popover = usePopoverState({ baseId: "add-filters" });
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, addFiltersList), [inputValue, addFiltersList]);

  const onSelectedItemsChange = React.useCallback((comboboxItems: UseMultipleSelectionStateChange<Item>) => {
    return comboboxItems.selectedItems;
  }, []);

  const state = useMultiselectCombobox({
    initialSelectedItems: [],
    onSelectedItemsChange,
  });

  React.useEffect(() => {
    state.setSelectedItems(value.map((item) => filterMap[item].label));
  }, [value, popover?.visible]);

  return (
    <PopoverContainer state={popover}>
      <PopoverButton variant="secondary" size="rounded_small">
        <PlusIcon decorative />
        <span>Add filters</span>

        {value.length > 0 ? (
          <Box marginLeft="space20">
            <Badge variant="neutral_counter" as="span" size="small">
              <Box textAlign="center" minWidth="12px">
                {value.length}
              </Box>
            </Badge>
          </Box>
        ) : null}
      </PopoverButton>

      <Popover aria-label="add-filters" width="size40">
        <Box>
          <MultiselectCombobox
            state={state}
            usePortal={false}
            labelText="Search"
            selectedItemsLabelText="Selected filters"
            items={filteredItems.map((item) => filterMap[item].label)}
            emptyState={EmptyState}
            onInputValueChange={({ inputValue: newInputValue = "" }) => {
              setInputValue(newInputValue);
            }}
            onSelectedItemsChange={(comboboxItems) => {
              const { selectedItems } = comboboxItems;
              if (selectedItems) {
                state.setSelectedItems(selectedItems);
              }
            }}
          />

          {recommendedFiltersList ? (
            <Box marginTop="space70">
              <CheckboxGroup
                name={`rec-filters-${useUID()}`}
                legend="Filters"
                helpText="Info that helps a user with this field."
              >
                {recommendedFiltersList.map((item) => {
                  const labelName = filterMap[item].label;
                  return (
                    <Checkbox
                      key={labelName}
                      id={labelName + useUID()}
                      value={labelName}
                      checked={state.selectedItems.includes(labelName)}
                      onChange={(e) => {
                        let selectedCheckedItems = [];

                        if (e.target.checked) {
                          selectedCheckedItems = [...state.selectedItems, labelName];
                        } else {
                          selectedCheckedItems = state.selectedItems.filter(
                            (selectedItem) => selectedItem !== labelName,
                          );
                        }
                        state.setSelectedItems(selectedCheckedItems);
                      }}
                    >
                      {labelName}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </Box>
          ) : null}

          <FilterAction
            onApply={() => {
              if (onApply && popover) {
                onApply("add-filter", state.selectedItems);
                popover.hide();
              }
            }}
            onClear={
              state.selectedItems.length > 0
                ? () => {
                    setInputValue("");
                    state.setSelectedItems([]);
                  }
                : null
            }
          />
        </Box>
      </Popover>
    </PopoverContainer>
  );
};
