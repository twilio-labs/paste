import {normalizeSearchString} from '../utils';

export const isMatch = (filterValue: string, {name, value}: {name: string; value: string}): boolean =>
  normalizeSearchString(name).includes(filterValue) || normalizeSearchString(value).includes(filterValue);
