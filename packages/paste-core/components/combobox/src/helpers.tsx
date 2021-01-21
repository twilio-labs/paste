import type {Item as ItemType} from './types';

// This module can only be referenced with ECMAScript imports/exports by turning on the 'esModuleInterop' flag and referencing its default export
const groupBy = require('lodash.groupby');

// Creates an indexed array of items
export const getIndexedItems = (items: ItemType[]): ItemType[] => {
  return items.map((item, index) => ({...(typeof item != 'string' && {...item}), index}));
};

// Creates a grouped object of items with the original flat array index
export const getGroupedItems = (items: ItemType[], groupItemsBy: string | undefined): any => {
  // Should never happen
  if (groupItemsBy == null) {
    return null;
  }

  return groupBy(items, (item: ItemType) => (typeof item === 'string' ? 'Uncategorized' : item[groupItemsBy]));
};
