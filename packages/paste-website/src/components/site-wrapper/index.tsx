import * as React from 'react';
import {Global} from '@emotion/core';
import {Theme} from '@twilio-paste/theme';
import {Sidebar} from '../sidebar';
import {SiteStickyHeader} from '../SiteStickyHeader';
import {Footer} from '../Footer';
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
          <Footer />
        </SiteMain>
      </SiteBody>
    </Theme.Provider>
  );
};

export {SiteWrapper};
