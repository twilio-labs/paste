import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css, SerializedStyles} from '@emotion/core';
import {themeGet} from '@styled-system/theme-get';
import {ThemeProvider as StyledThemeProvider} from 'emotion-theming';
import {DefaultTheme, SendGridTheme, FlexTheme} from '@twilio-paste/theme-tokens';
import {ThemeVariants} from './constants';

interface GlobalStyleProps {
  theme: {};
}
const pasteGlobalStyles = (props: GlobalStyleProps): SerializedStyles => css`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap');

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
  // theme = 'console' | 'sendgrid' | 'flex' & 'default' eventually
  theme = ThemeVariants.CONSOLE,
  ...props
}) => {
  let breakpoints = {};
  let themeObject = {};

  switch (theme) {
    case ThemeVariants.SENDGRID:
      themeObject = SendGridTheme;
      breakpoints = customBreakpoints || SendGridTheme.breakpoints;
      break;
    case ThemeVariants.FLEX:
      themeObject = FlexTheme;
      breakpoints = customBreakpoints || FlexTheme.breakpoints;
      break;
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
      <Global styles={pasteGlobalStyles({theme: providerThemeProp})} />
      <StyledBase {...props} />
    </StyledThemeProvider>
  );
};

export {ThemeProvider};
