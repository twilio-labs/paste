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
  rowVirtualizer,
}) => {
  const UIDSeed = useUIDSeed();

  // If no groupings, return plain list
  if (groupItemsBy == null) {
    // If there's an option template, disable virtualization
    // because calcing dynamic heights is hard
    // TODO: virtualize
    return optionTemplate != null ? (
      <ComboboxListboxGroup element={element}>
        {items.map((item, index) => (
          <ComboboxListboxOption
            {...getItemProps({item, index})}
            element={element}
            highlighted={highlightedIndex === index}
            key={UIDSeed(`item-${index}`)}
            variant="default"
          >
            {optionTemplate(item)}
          </ComboboxListboxOption>
        ))}
      </ComboboxListboxGroup>
    ) : (
      <ComboboxListboxGroup element={element}>
        <li role="presentation" key="total-size" style={{height: rowVirtualizer!.totalSize}} />
        {rowVirtualizer!.virtualItems.map((virtualItem: VirtualItem) => {
          const itemIndex = virtualItem.index;
          const item = items[itemIndex];
          return (
            <ComboboxListboxOption
              // @ts-ignore
              ref={(currentElement) => virtualItem.measureRef(currentElement)}
              {...getItemProps({item, index: itemIndex})}
              element={element}
              highlighted={highlightedIndex === itemIndex}
              key={UIDSeed(`item-${itemIndex}`)}
              variant="default"
              virtualItem={virtualItem}
              aria-setsize={items.length}
              aria-posinset={items.indexOf(item)}
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
            key={UIDSeed(groupKey)}
            groupName={isUncategorized ? undefined : groupKey}
            groupLabelTemplate={groupLabelTemplate}
          >
            {groupedItems[groupedItemKey].map((item: {[key: string]: any}) => (
              <ComboboxListboxOption
                {...getItemProps({item, index: item.index})}
                element={element}
                highlighted={highlightedIndex === item.index}
                key={UIDSeed(`${groupKey}-${item.index}`)}
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
