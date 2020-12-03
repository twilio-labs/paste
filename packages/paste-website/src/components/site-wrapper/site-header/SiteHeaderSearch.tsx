import * as React from 'react';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import docsearch from 'docsearch.js';
import {Box} from '@twilio-paste/box';
import {Input} from '@twilio-paste/input';
import {SearchIcon} from '@twilio-paste/icons/esm/SearchIcon';
import {useWindowSize} from '../../../hooks/useWindowSize';
import 'docsearch.js/dist/cdn/docsearch.min.css';

interface SiteHeaderSearchProps {
  value: string;
  onChange: (newValue: string) => void;
}

const SiteHeaderSearch: React.FC<SiteHeaderSearchProps> = ({value, onChange}) => {
  const {breakpointIndex} = useWindowSize();

  React.useEffect((): void => {
    if (breakpointIndex === undefined) {
      return;
    }

    docsearch({
      apiKey: process.env.GATSBY_DOCSEARCH_APIKEY,
      indexName: 'twilio_paste',
      inputSelector: breakpointIndex < 2 ? `#search-input-mobile` : `#search-input`,
    });
  }, [breakpointIndex]);

  const isMobileNav = breakpointIndex !== undefined && breakpointIndex < 2;

  return (
    <Box minWidth={['size30', 'size30', 'size30', 'size40']}>
      <Input
        id={isMobileNav ? 'search-input-mobile' : 'search-input'}
        type="text"
        placeholder={`Try "button" or "token"`}
        value={value}
        onChange={event => {
          onChange(event.target.value);
        }}
        variant={isMobileNav ? 'default' : 'inverse'}
        insertBefore={
          <Box cursor="default">
            <SearchIcon decorative />
          </Box>
        }
        onClick={() =>
          trackCustomEvent({
            category: 'Top Navigation',
            action: 'click-search',
            label: 'Search',
          })
        }
      />
    </Box>
  );
};

export {SiteHeaderSearch};
