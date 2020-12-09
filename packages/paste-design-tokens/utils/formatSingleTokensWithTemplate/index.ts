import {ImmutableStyleMap} from 'theo';
import {Token} from '../../types';

export const formatSingleTokensWithTemplate = (
  tokens: ImmutableStyleMap,
  tokenTemplate: (prop: Token) => string
): string => {
  return tokens
    .get('props')
    .sortBy(prop => {
      if (prop !== undefined) {
        return prop.get('name');
      }
    })
    .map((prop): string | null => {
      if (prop !== undefined) {
        return tokenTemplate(prop.toJS());
      }
      return null;
    })
    .join('\n');
};
