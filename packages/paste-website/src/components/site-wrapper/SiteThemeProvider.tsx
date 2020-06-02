import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

const SiteThemeProvider: React.FC = ({children}) => {
  const {theme} = useActiveSiteTheme();
  return (
    <Theme.Provider
      theme={theme}
      css={{
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      {children}
    </Theme.Provider>
  );
};

export {SiteThemeProvider};
