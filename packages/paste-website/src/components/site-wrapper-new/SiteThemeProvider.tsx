import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

const SiteThemeProvider: React.FC = ({children}) => {
  const {theme} = useActiveSiteTheme();
  return (
    <Theme.Provider theme={theme} customBreakpoints={['768px', '1024px', '1220px']}>
      {children}
    </Theme.Provider>
  );
};

export {SiteThemeProvider};
