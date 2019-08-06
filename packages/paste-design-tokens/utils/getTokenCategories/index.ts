import {ImmutableStyleMap} from 'theo';

export const getTokenCategories = (tokens: ImmutableStyleMap): any => {
  return tokens
    .get('props')
    .map((prop): string | number | undefined => {
      if (prop !== undefined) {
        return prop.get('category');
      }
      return undefined;
    })
    .toSet()
    .sort();
};
