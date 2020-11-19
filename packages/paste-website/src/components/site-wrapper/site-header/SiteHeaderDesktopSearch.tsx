import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {FormInput} from '@twilio-paste/form';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';

interface SiteHeaderDesktopSearchProps {
  value: string;
  onChange: (newValue: string) => void;
}

const SiteHeaderDesktopSearch: React.FC<SiteHeaderDesktopSearchProps> = ({value, onChange}) => {
  React.useEffect(() => {
    if (typeof window !== `undefined` && window.docsearch != null) {
      window.docsearch({
        apiKey: process.env.GATSBY_DOCSEARCH_APIKEY,
        indexName: 'twilio_paste',
        inputSelector: `#search-input`,
      });
    }
  }, []);

  return (
    <Box minWidth={['size30', 'size30', 'size30', 'size40']}>
      <FormInput
        id="search-input"
        type="text"
        placeholder={`Try "button" or "token"`}
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
        variant="inverse"
        insertBefore={<SearchIcon decorative />}
      />
    </Box>
  );
};

export {SiteHeaderDesktopSearch};
