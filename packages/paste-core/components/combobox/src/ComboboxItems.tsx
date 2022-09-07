import * as React from 'react';
import type {VirtualItem} from 'react-virtual';
import find from 'lodash/find';
import {ComboboxListboxOption} from './styles/ComboboxListboxOption';
import {ComboboxListboxGroup} from './styles/ComboboxListboxGroup';
import {getIndexedItems, getGroupedItems} from './helpers';
import type {ComboboxItemsProps} from './types';

const ComboboxItems = React.memo(
  React.forwardRef<HTMLUListElement, ComboboxItemsProps>(
    (
      {
        items,
        element = 'COMBOBOX',
        getItemProps,
        highlightedIndex,
        selectedItems,
        optionTemplate,
        groupLabelTemplate,
        groupItemsBy,
        totalSize,
        virtualItems,
      },
      ref
    ) => {
      // Use option template if provided
      // otherwise, return the items array.
      const templatizedItems = React.useMemo(() => {
        return optionTemplate != null && typeof optionTemplate === 'function'
          ? items.map((item) => optionTemplate(item))
          : items;
      }, [JSON.stringify(items), optionTemplate]);

      // If no groupings, return plain list
      if (groupItemsBy == null) {
        return (
          <ComboboxListboxGroup element={element} ref={ref}>
            <li role="presentation" key="total-size" style={{height: totalSize}} />
            {virtualItems.map(({measureRef, index: virtualItemIndex, start}: VirtualItem) => {
              const item = templatizedItems[virtualItemIndex];
              return (
                <ComboboxListboxOption
                  {...getItemProps({item, index: virtualItemIndex, ref: measureRef})}
                  key={virtualItemIndex}
                  element={element}
                  highlighted={highlightedIndex === virtualItemIndex}
                  selected={selectedItems?.includes(items[virtualItemIndex])}
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

      // Creating indexed Items so we can use original flat array index values
      // for indexing within groups.
      const groupedItems = React.useMemo(() => {
        const indexedItems = getIndexedItems(items);
        return getGroupedItems(indexedItems, groupItemsBy);
      }, [items, groupItemsBy]);

      const groupedItemKeys = Object.keys(groupedItems);

      return (
        <>
          {groupedItemKeys.map((groupedItemKey) => {
            const isUncategorized = groupedItemKey === 'undefined';
            // Wrapped in '$' characters in case of clash with a provided group named "Uncategorized"
            const groupKey = isUncategorized ? '$$$Uncategorized$$$' : groupedItemKey;

            return (
              <ComboboxListboxGroup
                element={element}
                key={groupKey}
                groupName={isUncategorized ? undefined : groupKey}
                groupLabelTemplate={groupLabelTemplate}
              >
                {groupedItems[groupedItemKey].map(({index, ...item}: Record<string, unknown>) => {
                  return (
                    <ComboboxListboxOption
                      {...getItemProps({item, index})}
                      element={element}
                      highlighted={highlightedIndex === index}
                      selected={find(selectedItems, item)}
                      key={index}
                      variant={isUncategorized ? 'default' : 'groupOption'}
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
    }
  )
);

ComboboxItems.displayName = 'ComboboxItems';

export {ComboboxItems};
