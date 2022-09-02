import type {Item as ItemType} from './types';
import type {HelpTextVariants} from '@twilio-paste/help-text';
import type {InputVariants} from '@twilio-paste/input';

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
