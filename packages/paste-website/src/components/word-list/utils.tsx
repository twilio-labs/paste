import type { WordListShape } from './types';

type FilterWordListArgs = (wordList: WordListShape, filterString: string) => Partial<WordListShape>;

export const filterWordList: FilterWordListArgs = (wordList, filterString) => {
  const words = Object.keys(wordList) as [keyof WordListShape];
  return words
    .filter((currentWord) => currentWord.includes(filterString))
    .reduce((accumulatorList, currentWord) => {
      return {
        ...accumulatorList,
        [`${currentWord}`]: wordList[currentWord],
      };
    }, {});
};
