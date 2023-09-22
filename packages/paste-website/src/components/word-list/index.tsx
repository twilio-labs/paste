import * as React from 'react';
import { Table, TBody, Td, Th, THead, Tr } from '@twilio-paste/table';

import { EmptyState } from './EmptyState';
import wordsList from '../../data/word-list.json';
import { filterWordList } from './utils';
import type { WordListShape } from './types';
import { WordFilter } from './WordFilter';

const WordsList: React.FC = () => {
  const [filterString, setFilterString] = React.useState('');
  const [filteredWordList, setFilteredWordList] = React.useState<Partial<WordListShape>>(wordsList);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  React.useEffect(() => {
    const newList = filterWordList(wordsList, filterString);
    setFilteredWordList(newList);
  }, [filterString]);

  const filteredWordsArray = Object.keys(filteredWordList) as [keyof WordListShape];

  return (
    <>
      <WordFilter value={filterString} onInput={handleInput} onClear={() => setFilterString('')} />
      {filteredWordsArray.length > 0 ? (
        <Table data-cy="word-list-table">
          <THead>
            <Tr>
              <Th width={200}>Word</Th>
              <Th>Description</Th>
            </Tr>
          </THead>
          <TBody>
            {filteredWordsArray.map((word) => {
              return (
                <Tr key={`word-row-${word}`}>
                  <Th>{word}</Th>
                  <Td>{filteredWordList[word]}</Td>
                </Tr>
              );
            })}
          </TBody>
        </Table>
      ) : (
        <EmptyState onClearSearch={() => setFilterString('')} />
      )}
    </>
  );
};

WordsList.displayName = 'WordsList';

export { WordsList };
