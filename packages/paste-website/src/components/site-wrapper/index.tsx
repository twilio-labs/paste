import * as React from 'react';
import {SiteBody} from './SiteBody';
import {ActiveSiteThemeProvider} from '../../context/ActiveSiteThemeContext';
import {SiteThemeProvider} from './SiteThemeProvider';
import '../../assets/css/fonts.css';

const SiteWrapper: React.FC = ({children}) => {
  return (
    <ActiveSiteThemeProvider>
      <SiteThemeProvider>
        <SiteBody>{children}</SiteBody>
      </SiteThemeProvider>
    </ActiveSiteThemeProvider>
  );
};

export {SiteWrapper};
