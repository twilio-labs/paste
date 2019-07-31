import * as React from 'react';
import {Global} from '@emotion/core';
import {Theme} from '@twilio-paste/theme';
import {Sidebar} from '../sidebar';
import {Header} from '../header';
import {Navigation} from '../navigation';
import {globalStyles, SiteBody, SiteMain} from './styles';

interface SiteWrapperProps {
  children: React.ReactNode;
}

const SiteWrapper: React.FC<SiteWrapperProps> = props => {
  return (
    <Theme.Provider theme="sendgrid">
      <Global styles={globalStyles} />
      <SiteBody>
        <Sidebar>
          <Header siteTitle="Paste" siteSubTitle="Design System" siteVersion="v0.1" />
          <Navigation />
        </Sidebar>
        <SiteMain>{props.children}</SiteMain>
      </SiteBody>
    </Theme.Provider>
  );
};

export {SiteWrapper};
