import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import {themeGet} from 'styled-system';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import {DefaultTheme, SendGridTheme} from '@twilio-paste/theme-tokens';

const pasteGlobalStyles = css`
  html {
    font-size: 100%;
  }
`;

export const StyledBase = styled.div`
  font-family: ${themeGet('fonts.fontFamilyText')};
  line-height: 1.15;
  font-weight: ${themeGet('fontWeights.fontWeightNormal')};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export type ThemeOptions = 'default' | 'sendgrid';

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeOptions;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  customBreakpoints,
  // theme = 'default' | 'console' | 'sendgrid' | 'flex' eventually
  theme = 'default',
  ...props
}) => {
  let breakpoints = {};
  let themeObject = {};

  // when we have more theme-tokens themes, switch the object here based on the theme prop
  switch (theme) {
    case 'sendgrid':
      themeObject = SendGridTheme;
      breakpoints = customBreakpoints || SendGridTheme.breakpoints;
      break;
    case 'default':
    default:
      themeObject = DefaultTheme;
      breakpoints = customBreakpoints || DefaultTheme.breakpoints;
      break;
  }

  const providerThemeProp = {
    ...themeObject,
    breakpoints,
  };

  return (
    <StyledThemeProvider theme={providerThemeProp}>
      <Global styles={pasteGlobalStyles} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
