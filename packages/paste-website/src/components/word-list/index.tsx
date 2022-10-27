import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Table, TBody, Td, Th, THead, Tr} from '@twilio-paste/table';
import {Label} from '@twilio-paste/label';
import {Input} from '@twilio-paste/input';
import {useUID} from '@twilio-paste/uid-library';
import {Button} from '@twilio-paste/button';
import {FilterIcon} from '@twilio-paste/icons/esm/FilterIcon';
import {ClearIcon} from '@twilio-paste/icons/esm/ClearIcon';

import {EmptyState} from './EmptyState';
import wordsList from '../../data/word-list.json';

type filterWordListArgs = (list: typeof wordsList, filterString: string) => Partial<typeof wordsList>;

const filterWordList: filterWordListArgs = (list, filterString) => {
  const words = Object.keys(list) as [keyof typeof wordsList];
  return words
    .filter((currentWord) => currentWord.includes(filterString))
    .reduce((accumulatorList, currentWord) => {
      return {
        ...accumulatorList,
        [`${currentWord}`]: list[currentWord],
      };
    }, {});
};

type WordFilterProps = {
  value: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onClear: () => void;
};
const WordFilter: React.FC<WordFilterProps> = ({value, onInput, onClear}) => {
  const filterID = useUID();
  return (
    <Box marginBottom="space70" maxWidth={['100%', '100%', 'size30']}>
      <Label htmlFor={filterID}>Filter words:</Label>
      <Input
        type="text"
        id={filterID}
        value={value}
        onInput={onInput}
        data-cy="word-list-filter-input"
        insertBefore={<FilterIcon decorative color="colorTextIcon" />}
        insertAfter={
          value.length > 0 ? (
            <Button variant="secondary_icon" size="reset" onClick={onClear}>
              <ClearIcon decorative={false} size="sizeIcon20" title="Clear word list filter" />
            </Button>
          ) : null
        }
      />
    </Box>
  );
};

const WordsList: React.FC = () => {
  const [filterString, setFilterString] = React.useState('');
  const [filteredWordList, setFilteredWordList] = React.useState<Partial<typeof wordsList>>(wordsList);

  const handleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const filter = e.currentTarget.value;
    setFilterString(filter);
  };

  React.useEffect(() => {
    const newList = filterWordList(wordsList, filterString);
    setFilteredWordList(newList);
  }, [filterString]);

  const filteredWordsArray = Object.keys(filteredWordList) as [keyof typeof wordsList];

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

export {WordsList};
