import type {HelpTextVariants} from '@twilio-paste/help-text';
import type {InputVariants} from '@twilio-paste/input';
import groupBy from 'lodash/groupBy';

import type {Item} from './types';

type IndexedItem = Item & {
  index: number;
};
/*
 * Converts items into an array of objects with a key for the index
 * Examples:
 * ['a', 'b'] -> [{label: 'a', index: 0}, {label: 'b', index: 1}]
 * [{label: 'a'}] -> [{label: 'a', index: 0}]
 */
export const getIndexedItems = (items: Item[]): IndexedItem[] => {
  return items.map((item, index) => {
    if (typeof item === 'string') {
      return {label: item, index};
    }
    return {...item, index};
  });
};

// Creates a grouped object of items with the original flat array index
export const getGroupedItems = (items: IndexedItem[], groupItemsBy: string): any => {
  return groupBy(items, (item: Item) => (typeof item === 'string' ? 'Uncategorized' : item[groupItemsBy]));
};

export const getHelpTextVariant = (variant: InputVariants, hasError: boolean | undefined): HelpTextVariants => {
  if (hasError && variant === 'inverse') {
    return 'error_inverse';
  }
  if (hasError) {
    return 'error';
  }
  if (variant === 'inverse') {
    return 'inverse';
  }
  return 'default';
};
