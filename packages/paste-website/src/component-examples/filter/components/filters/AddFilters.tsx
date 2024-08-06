import { Badge } from "@twilio-paste/badge";
import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer, usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import React from "react";

import { slugify } from "../../helpers";
import type { FilterListType, FilterMapType } from "../../types";
import { FilterAction } from "../FilterAction";

function getFilteredItems(inputValue: string, addFiltersList: FilterListType): FilterListType {
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
    <PopoverContainer state={popover}>
      <PopoverButton
        variant="secondary"
        size="rounded_small"
        // @ts-expect-error types are wrong
        borderRadius="borderRadiusPill"
      >
        <PlusIcon decorative />
        <span>Add filters</span>

        {value.length > 0 ? (
          <Box marginLeft="space20">
            <Badge variant="neutral_counter" as="span" size="small">
              {value.length}
            </Badge>
          </Box>
        ) : null}
      </PopoverButton>

      <Popover aria-label="add-filters" width="size40">
        <Box>
          <MultiselectCombobox
            state={state}
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
                const sluggedItems = selectedItems.map((item) => slugify(item as string));
                state.setSelectedItems(sluggedItems);
              }
            }}
          />

          {recommendedFiltersList ? (
            <Box marginTop="space70">
              <CheckboxGroup name="rec-filters" legend="Filters" helpText="Info that helps a user with this field.">
                {recommendedFiltersList.map((item) => {
                  const labelName = filterMap[item].label;
                  return (
                    <Checkbox
                      key={labelName}
                      id={labelName}
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
            clearCondition={state.selectedItems.length > 0}
            onClear={() => {
              setInputValue("");
              state.setSelectedItems([]);
            }}
          />
        </Box>
      </Popover>
    </PopoverContainer>
  );
};
