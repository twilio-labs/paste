import styled from '@emotion/styled';
import {themeGet} from '@styled-system/theme-get';
import {SIDEBAR_WIDTH} from './constants';

/* Wraps the entire doc site page */
export const SiteBody = styled.div`
  position: absolute; /* Absolute so we can only scroll the inner area */
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  min-height: 100vh;
  min-width: 240px;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: ${themeGet('fontSizes.fontSize30')};
  line-height: ${themeGet('space.space70')};
  overflow: hidden;

  @supports (display: grid) {
    display: grid;
    grid-template-columns: ${SIDEBAR_WIDTH} 1fr;
  }
`;
