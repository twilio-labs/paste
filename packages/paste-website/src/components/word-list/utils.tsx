import type {WordListShape} from './types';

type FilterWordListArgs = (list: WordListShape, filterString: string) => Partial<WordListShape>;

export const filterWordList: FilterWordListArgs = (list, filterString) => {
  const words = Object.keys(list) as [keyof WordListShape];
  return words
    .filter((currentWord) => currentWord.includes(filterString))
    .reduce((accumulatorList, currentWord) => {
      return {
        ...accumulatorList,
        [`${currentWord}`]: list[currentWord],
      };
    }, {});
};
