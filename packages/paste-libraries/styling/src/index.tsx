// Base styling system (emotion)
import styled from '@emotion/styled';

export type {SerializedStyles} from '@emotion/core';
export {Global as StylingGlobals, ThemeContext, keyframes, css as EmotionCSS} from '@emotion/core';
export {ThemeProvider, withTheme} from 'emotion-theming';
export {styled};

// Custom styling application (styled-system)
// https://github.com/styled-system/styled-system/tree/master/
export type {SystemStyleObject} from '@styled-system/css';
export {css} from './css-function';
export {themeGet} from '@styled-system/theme-get';
export * from 'styled-system';
