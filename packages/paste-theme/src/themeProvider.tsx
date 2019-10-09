import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css} from '@emotion/core';
import {themeGet} from 'styled-system';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import {DefaultTheme, SendGridTheme} from '@twilio-paste/theme-tokens';
import {ThemeVariants} from './constants';

const pasteGlobalStyles = css`
  html {
    font-size: 100%;
  }
`;

export const StyledBase = styled.div`
  font-family: ${themeGet('fonts.fontFamilyText')};
  line-height: 1.15;
  color: ${themeGet('textColors.colorText')};
  font-weight: ${themeGet('fontWeights.fontWeightNormal')};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export interface ThemeProviderProps {
  customBreakpoints?: string[];
  theme?: ThemeVariants;
}

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
  customBreakpoints,
  // theme = 'console' | 'sendgrid' | 'flex' & 'default' eventually
  theme = ThemeVariants.CONSOLE,
  ...props
}) => {
  let breakpoints = {};
  let themeObject = {};

  // when we have more theme-tokens themes, switch the object here based on the theme prop
  switch (theme) {
    case ThemeVariants.SENDGRID:
      themeObject = SendGridTheme;
      breakpoints = customBreakpoints || SendGridTheme.breakpoints;
      break;
    case ThemeVariants.FLEX:
    case ThemeVariants.CONSOLE:
    case ThemeVariants.DEFAULT:
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
