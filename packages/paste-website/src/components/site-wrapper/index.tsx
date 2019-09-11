import * as React from 'react';
import {css, Global} from '@emotion/core';
import {Theme} from '@twilio-paste/theme';
import {SiteBody} from './SiteBody';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {SiteMain, SiteMainInner} from './SiteMain';
import {SiteFooter} from './SiteFooter';
import {ScrollAnchorIntoView} from './ScrollAnchorIntoView';

const globalStyles = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 14px;
  }
`;

const SiteWrapper: React.FC = ({children}) => {
  return (
    <Theme.Provider theme="sendgrid">
      <Global styles={globalStyles} />
      <SiteBody>
        <Sidebar />
        <SiteHeader />
        <SiteMain>
          <ScrollAnchorIntoView />
          <SiteMainInner>{children}</SiteMainInner>
          <SiteFooter />
        </SiteMain>
      </SiteBody>
    </Theme.Provider>
  );
};

export {SiteWrapper};
