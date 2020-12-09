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
    .map((prop): string | undefined => {
      if (prop === undefined) {
        return prop;
      }
      return tokenTemplate(prop.toJS());
    })
    .join('\n');
};
