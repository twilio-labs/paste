import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css, SerializedStyles} from '@emotion/core';
import {themeGet} from '@styled-system/theme-get';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import {DefaultTheme, SendGridTheme, ConsoleTheme} from './themes';
import {ThemeVariants} from './constants';

interface EmotionStyledProps {
  theme: {};
}
const pasteGlobalStyles = (props: EmotionStyledProps): SerializedStyles => css`
  html {
    font-size: 100%;
  }
  body {
    margin: 0;
    font-size: ${themeGet('fontSizes.fontSize30')(props)};
  }
`;

export const pasteBaseStyles = (props: EmotionStyledProps): SerializedStyles => css`
  font-family: ${themeGet('fonts.fontFamilyText')(props)};
  font-size: ${themeGet('fontSizes.fontSize30')(props)};
  line-height: ${themeGet('lineHeights.lineHeight30')(props)};
  color: ${themeGet('textColors.colorText')(props)};
  font-weight: ${themeGet('fontWeights.fontWeightNormal')(props)};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
`;

export const StyledBase = styled.div`
  ${pasteBaseStyles}
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
