import * as React from 'react';
import {StylingGlobals, ThemeProvider as StyledThemeProvider} from '@twilio-paste/styling-library';
import * as lodash from 'lodash';
import {DefaultTheme} from './themes';
import {pasteGlobalStyles, StyledBase} from './themeProvider';

export interface CustomizationProviderProps {
  customBreakpoints?: string[];
  theme?: {};
  elements?: {};
}

const CustomizationProvider: React.FunctionComponent<CustomizationProviderProps> = ({
  customBreakpoints,
  theme,
  elements,
  ...props
}) => {
  const breakpoints = customBreakpoints || DefaultTheme.breakpoints;
  const baseTheme = lodash.cloneDeep(DefaultTheme);

  const themeObject = lodash.merge(baseTheme, theme);
  const providerThemeProp = React.useMemo(
    () => ({
      ...themeObject,
      breakpoints,
      CUSTOMIZATION_OPT_IN_OVERRIDE_DO_NOT_USE: true,
      elements,
    }),
    [themeObject, breakpoints, elements]
  );

  return (
    <StyledThemeProvider theme={providerThemeProp}>
      <StylingGlobals styles={pasteGlobalStyles({theme: providerThemeProp})} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {CustomizationProvider};
