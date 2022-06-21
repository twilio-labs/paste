import type {Token} from '../types';

export const sortTokens = (tokens: Array<Token>, comparatorFn?: (a: Token, b: Token) => number): Array<Token> =>
  tokens.sort(comparatorFn);
