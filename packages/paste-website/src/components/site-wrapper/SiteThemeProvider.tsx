import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';
import {SITE_BREAKPOINTS} from '../../constants';

const SiteThemeProvider: React.FC = ({children}) => {
  const {theme} = useActiveSiteTheme();
  return (
    <Theme.Provider theme={theme} customBreakpoints={SITE_BREAKPOINTS}>
      {children}
    </Theme.Provider>
  );
};

export {SiteThemeProvider};
