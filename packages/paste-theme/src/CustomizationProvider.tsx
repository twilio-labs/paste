import * as React from 'react';
import styled from '@emotion/styled';
import {Global, css, SerializedStyles} from '@emotion/core';
import {themeGet} from '@styled-system/theme-get';
import {ThemeProvider} from 'emotion-theming';
import * as lodash from 'lodash';
import {DefaultTheme} from './themes';

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
    <ThemeProvider theme={providerThemeProp}>
      <Global styles={pasteGlobalStyles({theme: providerThemeProp})} />
      <StyledBase {...props} />
    </ThemeProvider>
  );
};

export {CustomizationProvider};
