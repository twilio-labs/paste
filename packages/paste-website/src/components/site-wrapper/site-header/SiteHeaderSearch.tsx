import * as React from 'react';
import {DocSearch} from '@docsearch/react';
import '@docsearch/css';
import {Box} from '@twilio-paste/box';
import {DOCSEARCHV3_APIKEY, DOCSEARCHV3_INDEXNAME, DOCSEARCHV3_APPID} from '../../../constants';

const SiteHeaderSearch: React.FC = () => {
  return (
    <Box minWidth={['size20', 'size20', 'size20', 'size30']} data-cy="paste-docsearch-container">
      <DocSearch
        placeholder={`Try "button" or "token"`}
        appId={DOCSEARCHV3_APPID}
        indexName={DOCSEARCHV3_INDEXNAME || ''}
        apiKey={DOCSEARCHV3_APIKEY || ''}
      />
    </Box>
  );
};

export {SiteHeaderSearch};
