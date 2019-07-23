import {ImmutableStyleMap} from 'theo';

export default (tokens: ImmutableStyleMap) => {
  return tokens
    .get('props')
    .map(prop => {
      if (prop !== undefined) {
        return prop.get('category');
      }
    })
    .toSet()
    .sort();
};
