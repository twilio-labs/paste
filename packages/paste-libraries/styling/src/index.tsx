// Base styling system (emotion)
import styled from '@emotion/styled';

export {Global as StylingGlobals, SerializedStyles, ThemeContext, keyframes, css as EmotionCSS} from '@emotion/core';
export {ThemeProvider, withTheme} from 'emotion-theming';
export {styled};

// Custom styling application (styled-system)
// https://github.com/styled-system/styled-system/tree/master/
export {css, SystemStyleObject} from '@styled-system/css';
export {themeGet} from '@styled-system/theme-get';
export * from 'styled-system';
