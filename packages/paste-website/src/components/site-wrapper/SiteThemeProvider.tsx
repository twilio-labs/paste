import * as React from 'react';
import {Theme} from '@twilio-paste/theme';
import {useActiveSiteTheme} from '../../context/ActiveSiteThemeContext';

const SiteThemeProvider: React.FC = ({children}) => {
  const {theme} = useActiveSiteTheme();
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <Theme.Provider theme={theme} css={{minWidth: '1024px'}}>
      {children}
    </Theme.Provider>
  );
};

export {SiteThemeProvider};
