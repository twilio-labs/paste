import * as React from 'react';
import type {VirtualItem} from 'react-virtual/types';
import {useUIDSeed} from '@twilio-paste/uid-library';
import {ComboboxListboxOption} from './styles/ComboboxListboxOption';
import {ComboboxListboxGroup} from './styles/ComboboxListboxGroup';
import {getIndexedItems, getGroupedItems} from './helpers';
import type {ComboboxItemsProps} from './types';

const ComboboxItems: React.FC<ComboboxItemsProps> = ({
  items,
  element = 'COMBOBOX',
  getItemProps,
  highlightedIndex,
  optionTemplate,
  groupLabelTemplate,
  groupItemsBy,
  totalSize,
  virtualItems,
}) => {
  const uidSeed = useUIDSeed();

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
      <ComboboxListboxGroup element={element}>
        <li role="presentation" key="total-size" style={{height: totalSize}} />
        {virtualItems.map((virtualItem: VirtualItem) => {
          const {index: virtualItemIndex} = virtualItem;
          const item = templatizedItems[virtualItemIndex];
          return (
            <ComboboxListboxOption
              {...getItemProps({item, index: virtualItemIndex, ref: virtualItem.measureRef})}
              element={element}
              highlighted={highlightedIndex === virtualItemIndex}
              key={uidSeed(`item-${virtualItemIndex}`)}
              variant="default"
              startHeight={virtualItem.start}
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
  const indexedItems = getIndexedItems(items);
  const groupedItems = getGroupedItems(indexedItems, groupItemsBy);
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
            key={uidSeed(groupKey)}
            groupName={isUncategorized ? undefined : groupKey}
            groupLabelTemplate={groupLabelTemplate}
          >
            {groupedItems[groupedItemKey].map((item: {[key: string]: any}) => (
              <ComboboxListboxOption
                {...getItemProps({item, index: item.index})}
                element={element}
                highlighted={highlightedIndex === item.index}
                key={uidSeed(`${groupKey}-${item.index}`)}
                variant={isUncategorized ? 'default' : 'groupOption'}
              >
                {optionTemplate ? optionTemplate(item) : item}
              </ComboboxListboxOption>
            ))}
          </ComboboxListboxGroup>
        );
      })}
    </>
  );
};

export {ComboboxItems};
