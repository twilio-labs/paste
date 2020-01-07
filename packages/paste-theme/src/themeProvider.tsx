import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css, SerializedStyles} from '@emotion/core';
import {themeGet} from '@styled-system/theme-get';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import {DefaultTheme, SendGridTheme, ConsoleTheme} from '@twilio-paste/theme-tokens';
import {ThemeVariants} from './constants';

interface GlobalStyleProps {
  theme: {};
}
const pasteGlobalStyles = (props: GlobalStyleProps): SerializedStyles => css`
  html {
    font-size: 100%;
  }
  body {
    margin: ${themeGet('space.space0')(props)};
    font-size: ${themeGet('fontSizes.fontSize30')(props)};
  }
`;

export const StyledBase = styled.div`
  font-family: ${themeGet('fonts.fontFamilyText')};
  font-size: ${themeGet('fontSizes.fontSize30')};
  line-height: ${themeGet('lineHeights.lineHeight30')};
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
  theme = ThemeVariants.DEFAULT,
  ...props
}) => {
  let breakpoints = {};
  let themeObject = {};

  switch (theme) {
    case ThemeVariants.SENDGRID:
      themeObject = SendGridTheme;
      breakpoints = customBreakpoints || SendGridTheme.breakpoints;
      break;
    case ThemeVariants.CONSOLE:
      themeObject = ConsoleTheme;
      breakpoints = customBreakpoints || ConsoleTheme.breakpoints;
      break;
    case ThemeVariants.FLEX:
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
      <Global styles={pasteGlobalStyles({theme: providerThemeProp})} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
