import * as React from 'react';
import {Combobox} from '@twilio-paste/combobox';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';

export const SearchBox: React.FC = () => {
  return (
    <Combobox
      placeholder="Search"
      autocomplete
      insertBefore={<SearchIcon decorative />}
      labelText={<ScreenReaderOnly>Search application</ScreenReaderOnly>}
      items={['one', 'two']}
    />
  );
};
