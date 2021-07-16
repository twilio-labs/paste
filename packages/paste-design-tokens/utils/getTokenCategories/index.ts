import type {ImmutableStyleMap} from 'theo';

export const getTokenCategories = (tokens: ImmutableStyleMap): any => {
  return tokens
    .get('props')
    .map((prop) => {
      if (prop !== undefined) {
        return prop.get('category');
      }
      return null;
    })
    .toSet()
    .sort();
};
