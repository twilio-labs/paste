import { Box } from "@twilio-paste/box";
import find from "lodash/find";
import * as React from "react";
import type { VirtualItem } from "react-virtual";

import { getGroupedItems, getIndexedItems } from "./helpers";
import { ComboboxListboxGroup } from "./styles/ComboboxListboxGroup";
import { ComboboxListboxOption } from "./styles/ComboboxListboxOption";
import type { ComboboxItemsProps } from "./types";

const ComboboxItems: React.FC<
  React.PropsWithChildren<ComboboxItemsProps> & { ref: React.Ref<HTMLUListElement & ComboboxItemsProps> }
> = React.memo(
  React.forwardRef<HTMLUListElement, ComboboxItemsProps>(
    (
      {
        items,
        element = "COMBOBOX",
        getItemProps,
        highlightedIndex,
        selectedItems,
        disabledItems,
        optionTemplate,
        groupLabelTemplate,
        canCollapseGroupLabel,
        groupItemsBy,
        totalSize,
        virtualItems,
        emptyState: EmptyState,
      },
      ref,
    ) => {
      /*
       * Use option template if provided
       * otherwise, return the items array.
       */
      const templatizedItems = React.useMemo(() => {
        return optionTemplate != null && typeof optionTemplate === "function"
          ? items.map((item) => optionTemplate(item))
          : items;
      }, [JSON.stringify(items), optionTemplate]);

      // If no groupings, return plain list
      if (groupItemsBy == null) {
        if (virtualItems.length === 0 && EmptyState != null) {
          return (
            <ComboboxListboxGroup element={element} ref={ref}>
              <Box
                as="li"
                role="option"
                position="relative"
                element={`${element}_EMPTY_STATE`}
                backgroundColor="colorBackgroundBody"
                color="colorText"
              >
                <EmptyState />
              </Box>
            </ComboboxListboxGroup>
          );
        }

        return (
          <ComboboxListboxGroup element={element} ref={ref}>
            <li role="presentation" key="total-size" style={{ margin: 0, height: totalSize }} />
            {virtualItems.map(({ measureRef, index: virtualItemIndex, start }: VirtualItem) => {
              const item = templatizedItems[virtualItemIndex];
              const disabled = disabledItems != null && disabledItems.includes(items[virtualItemIndex]);
              return (
                <ComboboxListboxOption
                  {...getItemProps({ item, index: virtualItemIndex, ref: measureRef, disabled })}
                  key={virtualItemIndex}
                  element={element}
                  highlighted={highlightedIndex === virtualItemIndex}
                  selected={selectedItems?.includes(items[virtualItemIndex])}
                  disabled={disabled}
                  variant="default"
                  startHeight={start}
                  aria-setsize={items.length}
                  aria-posinset={virtualItemIndex + 1}
                >
                  {item}
                </ComboboxListboxOption>
              );
            })}
          </ComboboxListboxGroup>
        );
      }

      /*
       * Creating indexed Items so we can use original flat array index values
       * for indexing within groups.
       */
      const groupedItems = React.useMemo(() => {
        const indexedItems = getIndexedItems(items);
        return getGroupedItems(indexedItems, groupItemsBy);
      }, [items, groupItemsBy]);

      const groupedItemKeys = Object.keys(groupedItems);

      // Empty state
      if (groupedItemKeys.length === 0 && EmptyState != null) {
        return (
          <ComboboxListboxGroup element={element} ref={ref}>
            <Box
              as="li"
              role="option"
              position="relative"
              element={`${element}_EMPTY_STATE`}
              backgroundColor="colorBackgroundBody"
              color="colorText"
            >
              <EmptyState />
            </Box>
          </ComboboxListboxGroup>
        );
      }

      return (
        <>
          {groupedItemKeys.map((groupedItemKey) => {
            const isUncategorized = groupedItemKey === "undefined";
            // Wrapped in '$' characters in case of clash with a provided group named "Uncategorized"
            const groupKey = isUncategorized ? "$$$Uncategorized$$$" : groupedItemKey;

            return (
              <ComboboxListboxGroup
                element={element}
                key={groupKey}
                groupName={isUncategorized ? undefined : groupKey}
                canCollapseGroupLabel={canCollapseGroupLabel}
                groupLabelTemplate={groupLabelTemplate}
              >
                {groupedItems[groupedItemKey].map(({ index, ...item }: Record<string, unknown>) => {
                  const disabled = disabledItems != null && find(disabledItems, item);
                  return (
                    <ComboboxListboxOption
                      {...getItemProps({ item, index, disabled })}
                      element={element}
                      highlighted={highlightedIndex === index}
                      selected={find(selectedItems, item) != null}
                      disabled={disabled}
                      key={index}
                      variant={isUncategorized ? "default" : "groupOption"}
                    >
                      {optionTemplate ? optionTemplate(item) : item}
                    </ComboboxListboxOption>
                  );
                })}
              </ComboboxListboxGroup>
            );
          })}
        </>
      );
    },
  ),
);

ComboboxItems.displayName = "ComboboxItems";

export { ComboboxItems };
