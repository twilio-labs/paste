import type {Item as ItemType} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
// https://lodash.com/docs/4.17.15#groupBy
const groupBy = require('lodash/groupby');

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
