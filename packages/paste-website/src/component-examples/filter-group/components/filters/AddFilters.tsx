import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { MultiselectCombobox, useMultiselectCombobox } from "@twilio-paste/combobox";
import type { Item } from "@twilio-paste/combobox/dist/types";
import type { UseMultipleSelectionStateChange } from "@twilio-paste/dropdown-library";
import { FormPill, type useFormPillState } from "@twilio-paste/form-pill-group";
import { PlusIcon } from "@twilio-paste/icons/esm/PlusIcon";
import { Popover, PopoverButton, PopoverContainer, usePopoverState } from "@twilio-paste/popover";
import { Text } from "@twilio-paste/text";
import React from "react";

import { slugify } from "../../helpers";
import type { FilterListType, FilterMapType } from "../../types";

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
  pillState: ReturnType<typeof useFormPillState>;
  addFiltersList: FilterListType;
  filterMap: FilterMapType;
  recommendedFiltersList?: FilterListType;
}> = ({ onApply, pillState, addFiltersList, filterMap, recommendedFiltersList }) => {
  const [inputValue, setInputValue] = React.useState("");
  const filteredItems = React.useMemo(() => getFilteredItems(inputValue, addFiltersList), [inputValue, addFiltersList]);
  const popover = usePopoverState({ baseId: "add-filters" });
  const formattedItems = filteredItems.map((item) => filterMap[item].label);

  const onSelectedItemsChange = React.useCallback((comboboxItems: UseMultipleSelectionStateChange<Item>) => {
    return comboboxItems.selectedItems;
  }, []);

  const state = useMultiselectCombobox({
    initialSelectedItems: [],
    onSelectedItemsChange,
  });

  return (
    <PopoverContainer state={popover}>
      <PopoverButton
        variant="reset"
        size="reset"
        // @ts-expect-error types are wrong
        borderRadius="borderRadiusPill"
      >
        <FormPill {...pillState}>
          <PlusIcon decorative />
          <span>Add filters</span>
        </FormPill>
      </PopoverButton>

      <Popover aria-label="add-filters" width="size40">
        <Box>
          <MultiselectCombobox
            state={state}
            labelText="Add filter"
            selectedItemsLabelText="Selected filters"
            items={formattedItems}
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
              <CheckboxGroup
                name="rec-filters"
                legend="Recommended filters"
                helpText="Info that helps a user with this field."
              >
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
                          selectedCheckedItems = state.selectedItems.filter((selectedItem) => selectedItem !== item);
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
      </Popover>
    </PopoverContainer>
  );
};
