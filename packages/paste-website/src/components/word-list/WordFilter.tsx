import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Label } from '@twilio-paste/label';
import { Input } from '@twilio-paste/input';
import { useUID } from '@twilio-paste/uid-library';
import { Button } from '@twilio-paste/button';
import { FilterIcon } from '@twilio-paste/icons/esm/FilterIcon';
import { ClearIcon } from '@twilio-paste/icons/esm/ClearIcon';

type WordFilterProps = {
  value: string;
  onInput: (e: React.FormEvent<HTMLInputElement>) => void;
  onClear: () => void;
};
export const WordFilter: React.FC<WordFilterProps> = ({ value, onInput, onClear }) => {
  const filterID = useUID();
  return (
    <Box marginBottom="space70" maxWidth={['100%', '100%', 'size30']}>
      <Label htmlFor={filterID}>Filter words</Label>
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
