import * as React from 'react';
import {css, Global} from '@emotion/core';
import {Theme} from '@twilio-paste/theme';
import {SiteBody} from './SiteBody';
import {Sidebar} from './sidebar';
import {SiteHeader} from './SiteHeader';
import {ActiveSiteThemeProvider} from '../../context/ActiveSiteThemeContext';
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

  iframe {
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
  }
`;

const SiteWrapper: React.FC = ({children}) => {
  return (
    <Theme.Provider theme="sendgrid">
      <ActiveSiteThemeProvider>
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
      </ActiveSiteThemeProvider>
    </Theme.Provider>
  );
};

export {SiteWrapper};
