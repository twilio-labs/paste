import {ImmutableStyleMap} from 'theo';
import {Token} from '../../types';

export default (tokens: ImmutableStyleMap, tokenTemplate: (prop: Token) => void) => {
  return tokens
    .get('props')
    .sortBy(prop => {
      if (prop !== undefined) {
        return prop.get('name');
      }
    })
    .map(prop => {
      if (prop !== undefined) {
        return tokenTemplate(prop.toJS());
      }
    })
    .join('\n');
};
