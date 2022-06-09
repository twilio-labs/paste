import type {Token} from '../types';

export const sortTokens = (tokens: Array<Token>, comparatorFn?: (a: Token, b: Token) => number): Array<Token> =>
  tokens.sort(comparatorFn);

export const normalizeSearchString = (string: string): string => string && string.toLowerCase();

export const isMatch = (filterValue: string, {name, value}: {name: string; value: string}): boolean =>
  normalizeSearchString(name).includes(filterValue) || normalizeSearchString(value).includes(filterValue);
