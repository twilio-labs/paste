import type {Item as ItemType} from './types';

import groupBy from 'lodash/groupBy';

// Converts items into an array of objects with a key for the index
// Examples:
// ['a', 'b'] -> [{label: 'a', index: 1}, {label: 'b', index: 2}]
// [{label: 'a'}] -> [{label: 'a', index: 1}]
export const getIndexedItems = (items: ItemType[]): ItemType[] => {
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return {label: item, index};
    }
    return {...item, index};
  });
};

// Creates a grouped object of items with the original flat array index
export const getGroupedItems = (items: ItemType[], groupItemsBy: string): any => {
  return groupBy(items, (item: ItemType) => (typeof item === 'string' ? 'Uncategorized' : item[groupItemsBy]));
};
