import { filterWordList } from '../utils';
import type { WordListShape } from '../types';
import exampleWordList from '../__fixtures__/examples.json';

describe('filterWordList', () => {
  const testWords = exampleWordList as WordListShape;

  it('should filter words based on partial filter string', () => {
    expect(filterWordList(testWords, 'a')).toEqual({
      above: 'a test',
      activate: 'c test',
      active: 'b test',
      add: 'd test',
      admin: 'e test',
      app: 'f test',
      back: 'g test',
    });
  });

  it('should filter words based on exact word', () => {
    expect(filterWordList(testWords, 'add')).toEqual({
      add: 'd test',
    });
  });

  it('should filter words based on filter string appearing anywhere in the word', () => {
    expect(filterWordList(testWords, 'ti')).toEqual({
      active: 'b test',
      activate: 'c test',
    });
  });

  it('should handle no matches', () => {
    expect(filterWordList(testWords, 'usss')).toEqual({});
  });
});
