import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Stack} from '@twilio-paste/stack';
import {Theme} from '@twilio-paste/theme';

import {SiteBody} from './SiteBody';
import {NavigationContext} from '../../context/NavigationContext';
import {useDarkMode} from '../../hooks/useDarkMode';
import {SkipLinkContainer} from '../SkipLinkContainer';
import {PASTE_DOCS_CONTENT_AREA, PASTE_DOCS_SEARCH_INPUT, SITE_BREAKPOINTS} from '../../constants';
import type {NavigationQuery} from '../../context/NavigationContext';
import {DarkModeContext} from '../../context/DarkModeContext';
import {inCypress} from '../../utils/inCypress';
import {PreviewThemeContext} from '../../context/PreviewThemeContext';
import type {Themes} from '../../context/PreviewThemeContext';

export interface SiteWrapperProps {
  navigationData: NavigationQuery;
}

const SiteWrapper: React.FC<React.PropsWithChildren<SiteWrapperProps>> = ({children, navigationData}) => {
  const [theme, toggleMode, componentMounted] = useDarkMode();
  const [previewTheme, setPreviewTheme] = React.useState('twilio');

  return (
    <Theme.Provider
      theme={theme}
      customBreakpoints={SITE_BREAKPOINTS}
      disableAnimations={inCypress()}
      cacheProviderProps={{key: 'next'}}
    >
      <NavigationContext.Provider value={{...navigationData}}>
        <DarkModeContext.Provider value={{theme, toggleMode, componentMounted}}>
          <PreviewThemeContext.Provider value={{theme: previewTheme, selectTheme: setPreviewTheme}}>
            <SkipLinkContainer>
              <Stack orientation="horizontal" spacing="space60">
                <Anchor href={`#${PASTE_DOCS_CONTENT_AREA}`}>Skip to content</Anchor>
                <Anchor href={`#${PASTE_DOCS_SEARCH_INPUT}`}>Skip to search</Anchor>
              </Stack>
            </SkipLinkContainer>
            <SiteBody>{children}</SiteBody>
          </PreviewThemeContext.Provider>
        </DarkModeContext.Provider>
      </NavigationContext.Provider>
    </Theme.Provider>
  );
};

export {SiteWrapper};
