import * as React from 'react';
import {Global} from '@emotion/core';
import {Theme} from '@twilio-paste/theme';
import {Sidebar} from '../sidebar';
import {SiteStickyHeader} from '../site-sticky-header';
import {globalStyles, SiteBody, SiteMain, SiteMainInner} from './styles';

interface SiteWrapperProps {
  children: React.ReactNode;
}

const SiteWrapper: React.FC<SiteWrapperProps> = props => {
  return (
    <Theme.Provider theme="sendgrid">
      <Global styles={globalStyles} />
      <SiteBody>
        <Sidebar />
        <SiteMain>
          <SiteStickyHeader />
          <SiteMainInner>{props.children}</SiteMainInner>
        </SiteMain>
      </SiteBody>
    </Theme.Provider>
  );
};

export {SiteWrapper};
