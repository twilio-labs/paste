import * as React from 'react';

import {InPageNavigation, InPageNavigationItem} from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/In Page Navigation',
  component: InPageNavigation,
};

export const Default = (): React.ReactNode => {
  return (
    <InPageNavigation>
      <InPageNavigationItem href="/">Bio</InPageNavigationItem>
      <InPageNavigationItem href="/" currentPage>
        Impact
      </InPageNavigationItem>
    </InPageNavigation>
  );
};
