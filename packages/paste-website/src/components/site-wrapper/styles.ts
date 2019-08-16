import {css} from '@emotion/core';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';

export const globalStyles = css`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 14px;
  }
`;

export const SiteBody = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 240px;
  height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: ${themeGet('fontSizes.fontSize20')};
  line-height: ${themeGet('space.space70')};

  @supports (display: grid) {
    display: grid;
    grid-template-columns: 240px 1fr;
  }
`;

export const SiteMain = styled.main`
  position: relative;
  overflow: auto;

  @supports not (display: flex) {
    flex: 1;
  }
`;

export const SiteMainInner = styled.div`
  padding: 0 ${themeGet('space.space200')};
  -webkit-overflow-scrolling: touch;
`;
